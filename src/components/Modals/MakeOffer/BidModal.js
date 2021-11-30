/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "../style.css";
import { useEthers, useEtherBalance } from "@usedapp/core";
import ONEInput from "components/Inputs/ONEInput/index";
import IncludedFees from "./IncludedFees";
import OfferExpiration from "./OfferExpiration";
import PrimaryWhite from "components/Buttons/PrimaryWhite";
import Checkbox from "components/Inputs/Checkbox";
import CheckoutItem from "./CheckoutItem";
import Total from "./Total";
import CloseIcon from "assets/close_icon.svg";
import ONEInputLight from "components/Inputs/ONEInput/light";
import { utils } from "../../../../node_modules/ethers/lib/ethers";


export default function BidModal({ ownerAddress, price, onClick, tokenId, image, open = true, setOpen = () => { } }) {
    const [value, setValue] = useState(0)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="text-main-default fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay
                            className="fixed inset-0"
                            style={{ background: "rgba(0, 0, 0, 0.7)" }}
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div className="inline-block align-bottom glass-3 mx-8 px-32 pt-16 pb-8 w-80v text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
                            <div className="float-right">
                                <button onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </button>
                            </div>
                            <div className="text-2xl font-bold mb-8">Place a Bid</div>

                            <div className="text-xl">
                                You must bid atleast
                            </div>
                            <div className="text-xl my-8 font-bold">{utils.formatEther(price || 0)} ONE</div>
                            <ONEInput
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <IncludedFees />
                            {/* <Total price={price} /> */}
                            <div className="text-xl my-8 font-bold">Once a Bid is placed, it cannot be withdrawn</div>

                            <div className="flex justify-around w-full">
                                <Checkbox>
                                    {" "}
                                    <div>
                                        I agree with Armoonia's{" "}
                                        <u>
                                            <b>Terms and Conditions</b>
                                        </u>
                                        *
                                    </div>
                                </Checkbox>
                            </div>

                            <PrimaryWhite onClick={async () => {
                                await onClick(value);
                                setOpen(false);
                            }} className="mt-16">Place Bid</PrimaryWhite>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
