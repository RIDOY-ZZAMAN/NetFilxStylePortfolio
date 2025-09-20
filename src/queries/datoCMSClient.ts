import { GraphQLClient } from "graphql-request";
import { getDatoCmsToken } from "./getDatoCmsToken";

const DATO_CMS_ENDPOINT = "https://graphql.datocms.com/";
const DATO_CMS_API_TOKEN = getDatoCmsToken();
console.log("This is dato cms api token", DATO_CMS_API_TOKEN);

const datoCMSClient = new GraphQLClient(DATO_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${DATO_CMS_API_TOKEN}`,
  },
});

export default datoCMSClient;
