import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "eliato.myshopify.com",
  storefrontAccessToken: "cf2904deae44b0f3177d72b916132ae5", //it's public key dw
});

export default client;
