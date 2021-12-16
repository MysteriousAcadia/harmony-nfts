/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'

import Heading from 'components/Texts/Heading'

const faqs = [
    //     {
    //         question: "About Armoonia",
    //         answer:
    //             `Armoonia is a decentralized marketplace for generative NFT collections on Harmony. We
    // aim to provide both creators and collectors with the go- to platform for establishing innovative
    // NFT projects.
    //         Explore, sell and buy NFT's from differents collections on our marketplace!`,
    //     },
    {
        question: "What is Armoonia?",
        answer:
            `Armoonia is a generative NFT marketplace... But what separates us from others? Well, we will
be focusing primarily on providing a marketplace platform for <b>generative NFT collections</b>.
Focusing on a singular niche in this huge market allows us to really cater the Armoonia
marketplace towards generative NFTs.Each and every single collection will be vetted before
being verified.This reduces the risk of being scammed by interacting with fraudulent and/ or
unverified scams.Stand - out projects will also have a chance of being officially featured on the
front page!`,
    },
    {
        question: "What are the fees on Armoonia?",
        answer:
            `A 4% marketplace fee is taken on all secondary sales , 1% fee for reflections goes to
<b>Harmoonies</b> holders.Creators can choose between a 0–5% fee from their project’s secondary
sales. <b>This means that the maximum fee on a purchase will be 10% (the minimum being
5%).</b>`,
    },
    {
        question: "Im having an technical issue with Armoonia, what should i do?",
        answer:
            `If you are facing and issue or have any problems please contact our team on our discord server.
<b>Join our Discord: <a target="__blank" href="https://discord.gg/RHTmcCyX">https://discord.gg/RHTmcCyX</a></b>`,
    },
    //     {
    //         question: "About Harmoonies",
    //         answer:
    //             `Hello World! We are the Harmoonies! We are a first of our kind generative NFT project on
    // Harmony.
    // We are a family of 10,000 unique, fun and cute faces (including some you may recognize!).`,
    //     },
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
                                <p className="text-base " dangerouslySetInnerHTML={{ "__html": faq.answer }}></p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}