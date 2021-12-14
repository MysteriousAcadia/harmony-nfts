/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'

import Heading from 'components/Texts/Heading'

const faqs = [
    {
        question: "When is the pre-sale?",
        answer:
            "The pre-sale was on September 17th, 2021.",
    },
    {
        question: "When does minting go live?",
        answer:
            "The public sale is live since September 18th, 2021.",
    },
    {
        question: "How many Harmoonies will be available for minting?",
        answer:
            "In total there will be 10,000 Harmoonies brought to life. One hundred of those created will be reserved by the founders of the Harmoonies included custom variants made for founders and Harmony core team members. A percentage of these hundred will be used in future giveaways and competitions further along in our journey.",
    },
    {
        question: "How much will minting a Harmoonie cost?",
        answer:
            "During the pre-sale period, minting will cost 450 ONE per Moonie. Following the pre-sale, the price will increase to 500 ONE per Moonie.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-8 sm:py-16 sm:px-6 lg:px-8 text-white">
            <Heading className="w-full text-center mb-20">FAQ</Heading>

            {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className=" mt-6 glass-2">
                    {({ open }) => (
                        <>
                            <div >
                                <Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
                                    <span className="font-bold">{faq.question}</span>
                                    <span className="ml-6 h-7 flex items-center">
                                        +
                                    </span>
                                </Disclosure.Button>
                            </div>
                            <Disclosure.Panel as="div" className="mt-2 p-6 border-t border-gray-400 pr-12">
                                <p className="text-base ">{faq.answer}</p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}