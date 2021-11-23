/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "./style.css"
import { useEthers, useEtherBalance } from "@usedapp/core";
import PrimaryWhite from 'components/Buttons/PrimaryWhite';
import SecondaryWhite from 'components/Buttons/SecondaryWhite';


export default function ConnectWallet({ open = false, setOpen = () => { } }) {
    const { activateBrowserWallet, account } = useEthers();
    const { ethereum } = window;
    const etherBalance = useEtherBalance(account);
    // const [open, setOpen] = useState(false);
    const onClickMetamask = async () => {
        activateBrowserWallet();
        // await ethereum.request({ method: 'eth_requestAccounts' })
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="text-main-default fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" style={{ background: "rgba(0, 0, 0, 0.7)" }} />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom glass-3  px-16 pt-8 pb-8 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl">
                            <div className="text-4xl font-bold mb-8"> Connect your wallet</div>
                            <div className="mb-8 text-xl">Connect to one of our available wallet providers:</div>
                            <div className="flex mt-4 items-center">
                                <PrimaryWhite className="ml-2">Yes, I'm sure</PrimaryWhite>
                                <SecondaryWhite className="">Go back</SecondaryWhite>
                            </div>


                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}