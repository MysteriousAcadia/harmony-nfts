/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'

import Heading from 'components/Texts/Heading'

const faqs = [
    {
        question: "What is Logoipsum",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        question: "What is Logoipsum",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        question: "What is Logoipsum",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        question: "What is Logoipsum",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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