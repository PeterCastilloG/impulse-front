import { IAppTraderServices } from "../interfaces/appTraderServices";

export const environment: Record<IAppTraderServices, string> = {
  EXXICAPITAL_DEFAULT: "https://testgold.impulseworld.pro",
  EXXICAPITAL_GEO_API: "https://testgold.impulseworld.pro/api/geo/v1",
  EXXICAPITAL_SECURITY_CUSTOMER_API: "https://testgold.impulseworld.pro/api/security-customer/v1",
  EXXICAPITAL_FACEBOOK_ID: "ENV_EXXICAPITAL_FACEBOOK_ID",
  EXXICAPITAL_GOOGLE_ID: "ENV_EXXICAPITAL_GOOGLE_ID",
  EXXICAPITAL_CUSTOMER_API: "https://testgold.impulseworld.pro/api/exx-customer/v1",
  EXXICAPITAL_BASE_URL: "https://testgold.impulseworld.pro",
  VISA_URL_JS: "ENV_VISA_URL_JS",
  PAGE_CONTENT: "http://localhost:3001"
};

// export const environment: Record<IAppTraderServices, string> = {
//   EXXICAPITAL_DEFAULT: "http://127.0.0.1",
//   EXXICAPITAL_GEO_API: "http://127.0.0.1:51592/v1",
//   EXXICAPITAL_SECURITY_CUSTOMER_API: "http://127.0.0.1:51590/v1",
//   EXXICAPITAL_FACEBOOK_ID: "521334611948705",
//   EXXICAPITAL_GOOGLE_ID: "845728841792-4miav43it7lv31jhs0nnr2d0egq4nkeb.apps.googleusercontent.com",
//   EXXICAPITAL_CUSTOMER_API: "http://127.0.0.1:51601/v1",
//   EXXICAPITAL_BASE_URL: "http://localhost:4400/",
//   VISA_URL_JS: "https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true", 
// };