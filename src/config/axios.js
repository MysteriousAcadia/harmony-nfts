const axios = require("axios")
const graphQlInstance = axios.create({
    baseURL: "https://marketplace-api.armoonia.app/graphql",
});
export default graphQlInstance;