import { httpRequest } from "@/shared/lib/build-request";

export const invoicePageContent = async ({
  user_id,
  user_token,
  challengeOrderId,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
}) => {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "invoice/" + challengeOrderId,
    headers: {
      user_id,
      user_token,
    },
  });
  return data;
};

export const createInvoice = async ({
  user_id,
  user_token,
  challengeOrderId,
  paymentProcessor,
  currencyCode,
  currencyToken,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
  paymentProcessor: string;
  currencyCode?: string;
  currencyToken?: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "invoice/create",
    method: "POST",
    headers: {
      user_id,
      user_token,
    },
    body: {
      challengeOrderId,
      paymentProcessor,
      currencyCode,
      currencyToken
    },
  });
  return { success, data, kindMessage };
};

export const verifyInvoice = async ({
  user_id,
  user_token,
  challengeOrderId,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "EXXICAPITAL_CUSTOMER_API",
    url: "invoices/verify",
    headers: {
      user_id,
      user_token,
    },
    params: {
      challengeOrderId,
    },
  });
  return { success, data, kindMessage };
};
