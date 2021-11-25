import marketAbi from "./abi/marketplace.json";
import feeAbi from "./abi/feeRegistry.json";
import { Contract } from "@ethersproject/contracts";

let marketContract, feeContract;

export const connectContracts = async (signer) => {
  marketContract = new Contract(
    "0x68E7E61033cb5E7dC07aC184e4C040d9Ce872000",
    marketAbi,
    signer
  );
  feeContract = new Contract(
    "0xc0Ba328Ee3Ae23A3482fE8C5A0A00C6C21b8B739",
    feeAbi,
    signer
  );
  console.log("Connected to contracts");
};

/** marketplace functions */
export const bid = async (token, tokenId, value) => {
  try {
    const transaction = await marketContract.bid(token, tokenId, value);
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const buy = async (token, tokenId, currency, value) => {
  try {
    const transaction = await marketContract.buy(
      token,
      tokenId,
      currency,
      value
    );
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const createAuction = async (
  token,
  tokenId,
  currency,
  initialBid,
  duration
) => {
  try {
    const transaction = await marketContract.createAuction(
      token,
      tokenId,
      currency,
      initialBid,
      duration
    );
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const createMarket = async (token, name, fee, reflectionFee) => {
  try {
    const transaction = await marketContract.createMarket(
      token,
      name,
      fee,
      reflectionFee
    );
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const getNftOwner = (token, tokenId) => {
  try {
    const owner = marketContract.getNftOwner(token, tokenId);
    console.log(owner);
  } catch (error) {
    console.log(error);
  }
};

export const cancelSell = (token, tokenId) => {
  try {
    const transaction = marketContract.cancelSell(token, tokenId);
    const receipt = transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const endAuction = (token, tokenId) => {
  try {
    const transaction = marketContract.endAuction(token, tokenId);
    const receipt = transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const sell = (token, tokenId, currency, price) => {
  try {
    const transaction = marketContract.sell(token, tokenId, currency, price);
    const receipt = transaction.wait();
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const setMarketFee = (token, fee, reflectionFee) => {
  try {
    const transaction = marketContract.setMarketFee(token, fee, reflectionFee);
    const receipt = transaction.wait();
    console.log(receipt);
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
