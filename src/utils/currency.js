const oneInUsd = 0.3;
export const oneToUSD = one => {
	const usd = parseFloat(one) * oneInUsd;
	return usd.toFixed(2);
};
export const floorDifference = (floor, original) => {

	const diff = original - floor;
	const percent = (Math.abs(diff) / floor) * 100;
	if (diff > 10000 || diff < 10000) {
		return "Not avalilable";
	}
	if (diff > 0) {
		return `${percent.toFixed(0)} above`;
	}
	return `${percent.toFixed(0)} below`;
};
