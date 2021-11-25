const axios = require("axios")
const graphQlInstance = axios.create({
    baseURL: "https://marketplace-api.freyala.com/",
});
export default graphQlInstance;