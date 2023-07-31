import { httpRequest } from "@/shared/lib/build-request";

export async function configurePageContent({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "configure",
    headers: {
      user_id,
      user_token,
    },
  });

  return { data };
}

export const challengeOrder = async ({
  user_id,
  user_token,
  challengeId,
  acceptCancelation,
  acceptTerms,
  cupon,
}: {
  user_id: number;
  user_token: string;
  challengeId: number;
  acceptCancelation: boolean;
  acceptTerms: boolean;
  cupon?: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "EXXICAPITAL_CUSTOMER_API",
    url: "challenge-orders",
    method: "POST",
    headers: {
      user_id,
      user_token,
    },
    body: {
      challengeId: challengeId,
      acceptCancelation,
      acceptTerms,
      risk: "Agresivo",
      platform: "MT4",
      currency: "USD",
      ...(cupon ? { cupon } : {}),
    },
  });

  return { success, data, kindMessage };
};

export const validateCupon = async ({
  user_id,
  user_token,
  cupon,
}: {
  user_id: number;
  user_token: string;
  cupon: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "EXXICAPITAL_CUSTOMER_API",
    url: "challenge-orders/cupon",
    headers: {
      user_id,
      user_token,
    },
    params: {
      cupon,
    },
  });

  return { success };
};
