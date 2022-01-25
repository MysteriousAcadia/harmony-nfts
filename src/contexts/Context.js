import { createContext, useEffect, useState } from "react";
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
            "Authorization": "Bearer x-access-token",
            "x-access-code": `${token}`
        }
    })
    useEffect(() => {
        const updateSigner = async () => {
            setToken();
            const data =
                library?.messenger?.chainType === "hmy"
                    ? library.provider
                    : await library.getSigner(account);
            setSigner(data);
            functionsToExport.getNonce(data)

        }
        if (account) {
            updateSigner();
        }
    }, [account])

    useEffect(()=>{
        if(account){

        }
    },[account])

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

    functionsToExport.getNonce = async (signer) => {

        try {
            const result = await profileAxios.get("/user/getnonce")
            const { nonce, nonce_id } = result?.data
            const signature = await signer.signMessage(nonce);
            // const answer = await signer?._signTypedData(getSigningDomain(), getTypes(), { message: "Please sign this message to authenticate into marketplace", nonce: result?.data?.nonce });
            const signerResult = await profileAxios.post("/user/login", {}, { headers: { signature: signature, "nonce-id": nonce_id } });
            setToken(signerResult?.data?.token)
            return true;

        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    functionsToExport.updateUser = async (updatedData) => {
        try {
            if (await checkWalletConnected()) {
                console.log(token);
                const result = await profileAxios.put("/user/update", updatedData, getConfig());
                console.log(result);
                store.addNotification({
                    title: "Profile Updated",
                    message: "Success",
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
                return true;
            }
            return false;

        }
        catch (e) {
            return false;
        }
    }
    functionsToExport.doILikeNFT = async(contract, tokenId)=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post(`/likesnft/boolean/${account}`,{contract:contract, token:tokenId});
            if(response?.data?.success){
                return true;
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
    functionsToExport. likeNFT = async (contract,tokenId)=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post("/likenft",{contract:contract, token:tokenId});
            if(response?.data?.success){
                return true;
            }
            else{
               
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
    functionsToExport.doIfollowCollection = async(contract)=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post(`/followscollection/boolean/${account}`,{contract:contract});
            if(response?.data?.success){
                return true;
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
    functionsToExport. followCollection = async (contract,tokenId)=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post("/followcollection",{contract:contract, token:tokenId});
            if(response?.data?.success){
                return true;
            }
            else{
               
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
   
    functionsToExport. getLikesNumber = async (body=[{contract:"",token:""}])=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post("/user/nft/likes",body);
            if(response?.data?.success){
                return true;
            }
            else{
               
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
    functionsToExport. getCollectionsNumber = async (body=[{contract:""}])=>{
        if(!await checkWalletConnected(true)){
            return false;
        }
        try{
            const response = await profileAxios.post("/user/collection/follows",body);
            if(response?.data?.success){
                return true;
            }
            else{
               
                return false;
            }
        }
        catch(e){
            console.log(e)
            return false;
        }
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
        if (!token) {
            store.addNotification({
                title: "Please sign the message to authenticate",
                message: "Info",
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

            if (await functionsToExport.getNonce(signer)) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;


    }
    return (<Web3Context.Provider value={{ signer, setSigner, account, token, ...functionsToExport }}>
        {props.children}
    </Web3Context.Provider>)
}
export default Web3Context;