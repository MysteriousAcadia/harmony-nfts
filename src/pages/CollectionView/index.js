import { useState, useEffect } from "react";

import graphQlInstance from "config/axios";
import { useParams } from "react-router";

import Cards from "./Cards";
import Cover from "./Cover";
import Filters from "./Filters";
import SaleHistory from "./SaleHistory";
import { useCallback } from "react";
import { useRef } from "react";

const CollectionView = () => {
  const { marketId } = useParams();
  const [collectionDetail, setCollectionDetail] = useState();
  const [nfts, setNfts] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);
  const loader = useRef(null);


  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  market(id:"${marketId}"){
    active
    name
    id
    token
    fee
    reflectionFee
    totalAuctions
    totalSellOrders
    totalSales
    totalNfts
    currencyStats{
      floor
      volume
      fees
    }
    attributes{
      key
      values
    }
  }
}

`,
      });
      console.log(result.data);
      setCollectionDetail(result.data?.data?.market);
    };

    fetchData();
  }, [marketId]);

  useEffect(() => {
    const fetchNFTs = async () => {
      setPage(0);
      setEnd(false);
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nfts(first:9,skip:${9 * 0},where:{market:"${marketId}",attributes:[${Object.keys(filters).map(key => filters[key] ? `{key:"${key}",value:"${filters[key]}"},` : ``)}]}){
  token
    id
    tokenId
    image
     currentAuction{
      highestBid
      endsAt
      seller{
        id
        address
      }
    }
    currentSellOrder{
      id
      seller {
        id
        address
      }
      price

    }
  }
}

`,
      });
      console.log(result.data);
      setNfts(result.data?.data?.nfts);
    };
    fetchNFTs();
  }, [filters]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nfts(first:9,skip:${9 * page},where:{market:"${marketId}",attributes:[${Object.keys(filters).map(key => filters[key] ? `{key:"${key}",value:"${filters[key]}"},` : ``)}]}){
  token
    id
    tokenId
    image
     currentAuction{
      highestBid
      endsAt
      seller{
        id
        address
      }
    }
    currentSellOrder{
      id
      seller {
        id
        address
      }
      price

    }
  }
}

`,
      });
      if (result.data?.data?.nfts?.length > 0) {
        setNfts([...nfts, ...result.data?.data?.nfts]);
      }
      else {
        setEnd(true);
      }
    };
    if (page > 0 && !end) {
      fetchNFTs();

    }
  }, [page]);

  const [historyOpen, setHistoryOpen] = useState(false);

  const openHistory = () => setHistoryOpen(true);

  return (
    <>
      <div className="container px-4 mx-auto">
        {historyOpen && (
          <SaleHistory
            historyOpen={historyOpen}
            setHistoryOpen={setHistoryOpen}
          />
        )}
        <Cover collectionDetail={collectionDetail} openHistory={openHistory} />
        <Filters collectionDetail={collectionDetail} filters={filters} setFilters={setFilters} />
        <Cards nfts={nfts} />
        <div ref={loader} />


      </div>
    </>
  );
};
export default CollectionView;
