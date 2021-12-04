const axios = require("axios")
const graphQlInstance = axios.create({
    // baseURL: "https://marketplace-api.armoonia.app/graphql",
    baseURL: "https://marketplace-api.freyala.com/graphql/",
});
export default graphQlInstance;