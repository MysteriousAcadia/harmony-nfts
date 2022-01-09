import { createContext, useState } from "react";
import axios from "axios"
import { store } from "react-notifications-component";
import { useWeb3React } from "@web3-react/core";


const Web3Context = createContext();
const profileAxios = axios.create({
    baseURL: "https://armoonia-backend.herokuapp.com/",
});


export const Web3Provider = (props) => {
    const { activate, account, library } = useWeb3React();

    const functionsToExport = {};
    const [signer, setSigner] = useState();
    const [token, setToken] = useState();
    const getConfig = () => ({
        headers: {
            "Authorisation": `Bearer ${token}`
        }
    })

    const getSigningDomain = () => {

        // const contract = new ethers.Contract("0xd8d91aAf19B4EC0BBEC1Ae037723e00e85DB6576",abi,signer);
        // const chainId = 1666700000;
        const _domain = {
            name: "Armoonia Marketplace",
            version: "1",
            verifyingContract: "0x23F9c5478d0F56a3566dbb671080217dEde570CB",
            chainId: 1666700000
        }
        return _domain
    }
    const getTypes = () => {
        const types = {
            Login: [
                { name: "nonce", type: "string" },
                { name: "message", type: "string" },
            ]
        }
        return types;
    }


    const checkWalletConnected = async (isSignerRequired = false) => {
        if (isSignerRequired && !signer) {
            store.addNotification({
                title: "You need to Connect your wallet first and switch to Harmony Network!",
                message: "error",
                type: "success",
                insert: "top",
                width: 1024,
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 600,
                    showIcon: true,
                },
            });
            return false;
        }
        return true;

    }
    functionsToExport.getUserData = async (wallet = account) => {
        try {
            console.log(account);
            const result = await profileAxios.get(`/user/read/${account}`);
            console.log(result?.data?.user);
            return result?.data?.user;
        }
        catch (error) {

        }

    }

    functionsToExport.getNonce = async () => {

        try {
            const result = await profileAxios.get("/user/getnonce")
            const { nonce, nonce_id } = result?.data
            const signature = await signer.signMessage(nonce);
            // const answer = await signer?._signTypedData(getSigningDomain(), getTypes(), { message: "Please sign this message to authenticate into marketplace", nonce: result?.data?.nonce });
            const signerResult = await profileAxios.post("/user/login", {}, { headers: { signature: signature, "nonce-id": nonce_id } });
            setToken(signerResult?.data?.token)
            console.log(signerResult);
            return (signerResult);
            return result?.data?.nonce;

        }
        catch (e) {
            console.log(e);
        }
    }
    functionsToExport.updateUser = async (updatedData) => {
        try {
            console.log(token);
            const result = await profileAxios.put("/user/update", updatedData, getConfig());
            console.log(result);
        }
        catch (e) {

        }
    }
    return (<Web3Context.Provider value={{ signer, setSigner, account, ...functionsToExport }}>
        {props.children}
    </Web3Context.Provider>)
}
export default Web3Context;