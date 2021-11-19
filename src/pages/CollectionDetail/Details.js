import { Disclosure } from "@headlessui/react";

const Details = ({ }) => {

    return (<>
        <div className="container px-4 mx-auto">
            <div className="flex justify-around text-white">
                <div>
                    <Disclosure as="div" className=" mt-6 glass-2">
                        {({ open }) => (
                            <>
                                <div >
                                    <Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
                                        <span className="font-bold">Details</span>
                                        <span className="ml-6 h-7 flex items-center">
                                            +
                                        </span>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel as="div" className="mt-2 p-6 border-t border-gray-400 pr-12">
                                    <p className="inline-block ">
                                        <b>Token ID: </b> Contract address: 0x495f947276749Ce646f68AC8c24842c..
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className=" mt-6 glass-2">
                        {({ open }) => (
                            <>
                                <div >
                                    <Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
                                        <span className="font-bold">Details</span>
                                        <span className="ml-6 h-7 flex items-center">
                                            +
                                        </span>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel as="div" className="mt-2 p-6 border-t border-gray-400 pr-12">
                                    <p className="inline-block ">
                                        <b>Token ID: </b> Contract address: 0x495f947276749Ce646f68AC8c24842c..
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
                    <Disclosure as="div" className=" mt-6 glass-2">
                        {({ open }) => (
                            <>
                                <div >
                                    <Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
                                        <span className="font-bold">Details</span>
                                        <span className="ml-6 h-7 flex items-center">
                                            +
                                        </span>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel as="div" className="mt-2 p-6 border-t border-gray-400 pr-12">
                                    <p className="inline-block ">
                                        <b>Token ID: </b> Contract address: 0x495f947276749Ce646f68AC8c24842c..
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    </>);
}
export default Details