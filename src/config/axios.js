const axios = require("axios")
const graphQlInstance = axios.create({
    baseURL: "http://marketplace-api.freyala.com:8080/",
});
export default graphQlInstance;