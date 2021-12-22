import AllCard from "components/Cards/AllCard/index";
import BoxTab from "components/Tabs/BoxTab/index";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { getTotalTokens, tokenOfOwnerByIndex } from "web3Integration";
import OwnedNFTCard from "components/Cards/OwnedNFTCard/index";

const CollectedItems = ({ markets }) => {
    const { activate, account, library } = useWeb3React();
    const [allTokens, setAllTokens] = useState([]);
    //[{market:{},tokens:[]}]

    useEffect(() => {
        const fetchMyTokens = async () => {
            const data =
                library?.messenger?.chainType === "hmy"
                    ? library.provider
                    : await library.getSigner(account);
            const allTokensNew = await Promise.all(markets?.map(async (market) => {
                const { id } = market
                const res = (await getTotalTokens(data, account, id)).toNumber();
                const allTokens = {
                    market: market,
                    totalToken: res,
                    tokenId: [],
                }
                for (let i = 0; i < res; i++) {
                    const tokenId = (await tokenOfOwnerByIndex(data, account, i)).toNumber();
                    allTokens.tokenId.push(tokenId);
                }

                console.log(res);
            }))
            console.log(allTokensNew);
            setAllTokens(allTokensNew);
        }
        if (account) {
            fetchMyTokens();
        }
    }, [markets, account])
    const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1,]);
    return (<>
        <div className="container my-16 mx-auto px-4">
            <div className="flex flex-col w-full items-center">
                <BoxTab
                    tabs={["Unlisted", "On Sale", "Bids and Offers"]}
                >
                    <div>
                        <div className="grid grid-cols-4 gap-4">
                            {allTokens.map(token => {
                                const { market, tokenId } = token;
                                return (<>{tokenId.map((id) => <OwnedNFTCard token={market} tokenId={id} />)

                                }</>)
                            })}
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </BoxTab>
            </div>
        </div>
    </>);
}
export default CollectedItems