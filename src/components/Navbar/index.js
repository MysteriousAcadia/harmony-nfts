import { useEffect, useState } from "react";
import "./style.css";
import fullLogo from "assets/logo_full.svg";
import wallet from "assets/HomePage/wallet.svg"
import PrimaryButton from "components/Buttons/Primary";
import { Link } from "react-router-dom";
import ConnectWallet from "components/Modals/ConnectWallet";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Navbar = () => {
    const { activateBrowserWallet, account, ...pp } = useEthers();
    const etherBalance = useEtherBalance(account);

    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 4) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
    })
    const ConnectToWalletButton = () => {
        console.log(pp);
        if (!account) {
            return (<div class="flex text-white">
                <PrimaryButton
                    onClick={() => setOpen(!open)}
                ><div className="flex items-center"><img className="mr-2 h-4" src={wallet} /> Connect wallet</div></PrimaryButton>
            </div>)
        }
        else {
            return (<div className="text-white">
                {etherBalance && JSON.stringify(etherBalance)} ETH
            </div>)
        }
    }
    return (<>
        <ConnectWallet
            open={open}
            setOpen={setOpen} />
        <div className={`sticky top-0 z-50 ${navbar ? "navbar-background" : "bg-transparent"}`}><nav
            class={`flex items-center justify-between py-8 flex-wrap   container px-4 mx-auto`}>
            <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <Link to="/" class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <img src={fullLogo} />
                </Link>
                <div class="block lg:hidden ">
                    <button
                        id="nav"
                        class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="relative flex-grow mr-12 text-gray-600 lg:block hidden">
                <input
                    class="border-2 w-full border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style={{ "enableBackground": "new 0 0 56.966 56.966" }}
                        width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>

            <div class="menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div class="text-md  text-white  ">
                    <Link to="/collections"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded  mr-2">
                        Collections
                    </Link>
                    <Link to="/stats"
                        class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Stats
                    </Link>
                    <Link to="/faq"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        FAQ
                    </Link>
                </div>
                <ConnectToWalletButton />

            </div>

        </nav >
        </div></>);
}
export default Navbar;