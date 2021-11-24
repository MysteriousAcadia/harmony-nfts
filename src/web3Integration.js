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
