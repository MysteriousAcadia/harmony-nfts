import marketAbi from "./abi/marketplace.json";
import feeAbi from "./abi/feeRegistry.json";
import tokenAbi from "abi/token.json";
import { Contract } from "@ethersproject/contracts";
import { store } from "react-notifications-component";


let marketContract, feeContract;

export const connectContracts = async (signer) => {
  marketContract = new Contract(
    "0x6e0A0e71C729BB9B5693D050dDF8bB747b29914b",
    marketAbi,
    signer
  );
  feeContract = new Contract(
    "0x06e293A8dC54D23518Ed5888fad6D4B364a4619E",
    feeAbi,
    signer
  );
  console.log("Connected to contracts", marketContract);
};
const notification = (type = "Message", message = "") => {
  store.addNotification({
    title: type,
    message: message,
    type: "success",
    insert: "top",
    width: 1024,
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 600,
      showIcon: true,
    },
  });
};


/** marketplace functions */
export const bid = async (token, tokenId, value) => {
  console.log(token)
  console.log(tokenId)
  console.log(value)
  try {
    if (!marketContract) {
      notification("Error", "Connect to wallet first!");
      return false;
    }
    const transaction = await marketContract.bid(token, tokenId, value, {
      value,
    });
    if (!marketContract) {
      notification("General", "Transaction Initiated!");
      return false;
    }
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const buy = async (
  token,
  tokenId,
  value,
  currency = "0x0000000000000000000000000000000000000000"
) => {
  if (!marketContract) {
    notification("Error", "Connect to wallet first!");
    return false;
  }
  try {
    console.log();
    const transaction = await marketContract.buy(
      token,
      tokenId,
      currency,
      value,
      { value }
    );
    notification("Progress", "Transaction Initiated");
    const receipt = await transaction.wait();
    notification("Success", "Transaction Success");


    console.log(receipt);
  } catch (error) {
    notification("Error", "Transaction Failed");

    console.log(error);
  }
};

export const createAuction = async (
  signer,
  token,
  tokenId,
  initialBid,
  duration,
  currency = "0x0000000000000000000000000000000000000000"
) => {
  try {
    if (!marketContract) {
      notification("Error", "Connect to wallet first!");
      return false;
    }
    const nftContract = new Contract(token, tokenAbi, signer)

    const owner = await nftContract.approve("0x6e0A0e71C729BB9B5693D050dDF8bB747b29914b", tokenId);
    console.log(token)
    console.log(tokenId)
    console.log(initialBid)
    console.log(duration)
    notification("Progress", "Transaction Initiated");

    const transaction = await marketContract.createAuction(
      token,
      tokenId,
      currency,
      initialBid,
      duration,
    );
    // const receipt = await transaction.wait();
    console.log(transaction);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
    notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const createMarket = async (token, name, fee, reflectionFee) => {
  try {
    if (!marketContract) {
      notification("Error", "Connect to wallet first!");
      return false;
    }
    notification("Progress", "Transaction Initiated");

    const transaction = await marketContract.createMarket(
      token,
      name,
      fee,
      reflectionFee
    );
    const receipt = await transaction.wait();
    console.log(receipt);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
    notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const getNftOwner = async (signer, token, tokenId) => {
  try {
    if (!marketContract) {
      notification("Error", "Connect to a wallet to buy");
      return false;
    }
    // notification("Progress", "Transaction Initiated");

    const nftContract = new Contract(token, tokenAbi, signer)

    const owner = await nftContract.ownerOf(tokenId);

    return owner
  } catch (error) {
    console.log(error);
    // notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const cancelSell = (token, tokenId) => {
  try {
    notification("Progress", "Transaction Initiated");

    const transaction = marketContract.cancelSell(token, tokenId);
    const receipt = transaction.wait();
    console.log(receipt);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
    notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const endAuction = async (token, tokenId) => {
  try {
    notification("Progress", "Transaction Initiated");
    console.log(token)
    console.log(tokenId)
    const transaction = await marketContract.endAuction(token, tokenId);
    console.log(transaction);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
    notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const sell = async (signer,
  token,
  tokenId, price,
  currency = "0x0000000000000000000000000000000000000000") => {
  try {
    notification("Progress", "Transaction Initiated");

    const nftContract = new Contract(token, tokenAbi, signer)

    const owner = await nftContract.approve("0x6e0A0e71C729BB9B5693D050dDF8bB747b29914b", tokenId);
    const transaction = marketContract.sell(token, tokenId, currency, price);
    // const receipt = transaction.wait();
    console.log(transaction);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
    notification("Error", "Transaction Failed: " + error.toString());

  }
};

export const setMarketFee = (token, fee, reflectionFee) => {
  try {
    const transaction = marketContract.setMarketFee(token, fee, reflectionFee);
    const receipt = transaction.wait();
    console.log(receipt);
    notification("Success", "Transaction Success");

  } catch (error) {
    console.log(error);
  }
};

export const setMarketState = (token, active) => {
  try {
    const transaction = marketContract.setMarketState(token, active);
    const receipt = transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const transferOwnership = async (newOwner) => {
  try {
    const transaction = await marketContract.transferOwnership(newOwner);
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const withdraw = async (currency) => {
  try {
    const transaction = await marketContract.withdraw(currency);
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);

  }
};

export const withdrawNft = async (token, tokenId) => {
  try {
    const transaction = await marketContract.withdrawNft(token, tokenId);
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

/** registry functions */
export const getFees = async (harmoonieIds) => {
  try {
    const fees = await feeContract.getFees(harmoonieIds);
    console.log(fees);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (harmoonieId, currency) => {
  try {
    const register = await feeContract.register(harmoonieId, currency);
    console.log(register);
  } catch (error) {
    console.log(error);
  }
};
