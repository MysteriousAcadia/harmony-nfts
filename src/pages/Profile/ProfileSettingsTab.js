import PrimaryWhite from "components/Buttons/PrimaryWhite";
import TextInput from "components/Inputs/TextInput";
import Heading from "components/Texts/Heading";
import { useContext, useEffect, useState } from "react";
import CopyIcon from "assets/copy_icon.svg";
import Checkbox from "components/Inputs/Checkbox";
import Web3Context from "contexts/Context";

const DataCard = ({ title, desc }) => {
    return (<div className=" mx-4 text-center">
        <div>{title}</div>
        <div className="glass-2 mt-8 px-7 py-9">{desc}</div>
    </div>)
}

const ProfileSettingsTab = ({ }) => {

    const { getUserData, account, updateUser, token, getNonce } = useContext(Web3Context);
    const [updateState, setUpdateState] = useState("Save Changes");
    useEffect(() => {
        const fetchData = async () => {
            const user = await getUserData();
            setValues(user);
        }
        fetchData();
    }, [account])

    const [values, setValues] = useState({
        name: "Haarmoonie Fan",
        about: "Digital Art, Oil Painting, Mixed Media. Figurative Abstract. Symbolism. Inspired by Klimt, Kahlo, de Saint Phalle and Burlet.",
        website: "www.mywebsite.com",
        twitter: "mytwitter",
        wallet_address: "1x57fhjfd57fhjfd57fhjfd57fhjfd57fhjfd57fhjfd",
        date: "6/11/12",
        website: "www.mywebsite.com",
        twitter: "@someonelikeme",
        show_earnings: true,
        show_spendings: true,
    })
    const [isEdit, setIsEdit] = useState(false);
    const editValue = (field, value) => {
        let newVal = { ...values };
        newVal[field] = value;
        setValues(newVal);
    }
    return (<div>
        <div className="flex flex-col w-full items-center text-white py-16">
            <div className="blur-glass rounded-full w-40 h-40 top-64 shadow-lg"   >
                <img className=" rounded-full m-2 w-36 h-36 bg-gray-400  " />
            </div>
            {!isEdit ?
                <>
                    <Heading className="pt-4">{values?.name || "(No Name)"}</Heading>
                    <div className="py-4 font-normal">{values?.about || "(No Descriptiion)"}</div>
                    <PrimaryWhite
                        className="mt-4"
                        onClick={async () => {
                            if (token) {
                                setIsEdit(true)
                            }
                            else if (await getNonce()) {
                                setIsEdit(true)
                            }
                        }}
                    >Edit Details</PrimaryWhite>
                </> : <div className="px-24 w-full">
                    <TextInput
                        className="font-bold w-full text-3xl mt-4"
                        value={values?.name}
                        placeholder="Your Name goes here..."
                        onChange={(e) => editValue("name", e.target.value)}
                    />
                    <TextInput
                        className="font-normal w-full my-4"
                        value={values?.about}
                        placeholder="Your Description goes here..."
                        onChange={(e) => editValue("about", e.target.value)}
                    />
                </div>}
            <div className="divider" />
            <div className="glass-2 max-w-4xl py-16 px-20">
                <div className="flex items-center mb-8">
                    <b>Wallet Address:</b>
                    <div className="font-normal pl-2 pr-1">{account || ""}</div>
                    <img src={CopyIcon} />
                </div>
                <div className="flex items-center mb-8">
                    <b>Member Since:</b>
                    <div className="font-normal pl-2 pr-1">{(new Date(values?.createdAt || "")).toLocaleDateString("en-US")}</div>
                </div>
                <div className="flex items-center mb-8">
                    <b>Website:</b>
                    {isEdit ?
                        <TextInput
                            placeholder="Your Website goes here..."
                            className="font-normal ml-2 mr-1" value={values?.website} onChange={(e) => editValue("website", e.target.value)} /> :
                        <div className="font-normal pl-2 pr-1">{values?.website || "(No Website)"}</div>
                    }
                </div>
                <div className="flex items-center">
                    <b>Twitter:</b>
                    {isEdit ?
                        <TextInput
                            placeholder="Your Twitter goes here..."
                            className="font-normal ml-2 mr-1 py-2" value={values?.twitter} onChange={(e) => editValue("twitter", e.target.value)} /> :
                        <div className="font-normal pl-2 pr-1">{values?.twitter || "(No Twitter)"}</div>
                    }
                </div>
            </div>
            <div className="max-w-4xl flex flex-col pb-16 ">
                {(isEdit || values?.show_earnings) &&
                    <>
                        <Heading className="mt-16 w-full text-center">Earnings</Heading>
                        <div className="divider" />
                        <div className="flex justify-between w-full">
                            <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} />
                            <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} /> <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} />

                        </div>
                        {isEdit &&
                            <div className="mt-12">
                                <Checkbox
                                    value={values?.show_earnings}
                                    onChange={(value) => editValue("show_earnings", value)}
                                ><div className="font-normal w-full">Show on my profile</div></Checkbox>
                            </div>
                        }
                    </>
                }
                {(isEdit || values?.show_spendings) &&
                    <>
                        <Heading className="mt-16 w-full text-center">Spendings</Heading>
                        <div className="divider" />
                        <div className="flex justify-between w-full">
                            <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} />
                            <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} /> <DataCard
                                title={`Total Spendings`}
                                desc={`10NFTs for 1120 ONE`} />

                        </div>
                        {isEdit &&
                            <div className="mt-12">
                                <Checkbox
                                    value={values?.show_spendings}
                                    onChange={(value) => editValue("show_spendings", value)}
                                ><div className="font-normal w-full">Show on my profile</div></Checkbox>
                            </div>
                        }
                    </>
                }

            </div>
            {isEdit &&
                <PrimaryWhite
                    onClick={async () => {
                        setUpdateState("Updating Changes")
                        await updateUser(values);
                        setUpdateState("Changes Updated!")
                        setIsEdit(false)
                        setUpdateState("Update Changes")

                    }}
                    className="mt-4">
                    {updateState}
                </PrimaryWhite>}

        </div>
    </div >);
}
export default ProfileSettingsTab