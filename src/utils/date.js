export const daysLeft = (time) => {
    const currentTime = Date.now();
    const givenDate = new Date(time * 1000);
    const diffTime = Math.abs(givenDate - currentTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (givenDate - currentTime <= 0) {
        return (`Ended ${diffDays} day${diffDays == 1 ? "" : "s"} ago`)
    }
    return (`${diffDays} day${diffDays == 1 ? "" : "s"} left`)
}
export const formatDate = (time) => {
    const givenDate = new Date(time * 1000);
    return (`${givenDate.getDate()}`);
}