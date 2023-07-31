"use client";
import { IAnalyzerContentPage as IAnalyzerContentPage } from "./interfaces/analyzer.interfaces";
import { useState } from "react";
import { challengeOrderExtension } from "./services/analyzer.service";
import { UserAuth } from "@/shared/interfaces/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { clsx } from "@/shared/lib/clsx";
import Challenge from "./components/challenge-order/Challenge-order";
import Analyzer from "./components/analyzer/Analyzer";
import styles from "./Analyzer.module.scss";
import ExtensionPacks from "./components/extension-packs/Extension-packs";
import "react-toastify/dist/ReactToastify.css";

export default function AnalyzerPage({
  analyzerPage: metricsPage,
  userAuth,
}: {
  analyzerPage: IAnalyzerContentPage;
  userAuth: UserAuth;
}) {
  const { userMessage, challengeOrders, pageMessage, orders } = metricsPage;

  const router = useRouter();
  const search = useSearchParams();

  const orderId = search.get("order");

  const defaultOrder =
    challengeOrders.find(
      ({ challengeOrderId }) => challengeOrderId === Number(orderId)
    ) ?? challengeOrders[0];

  const [challengeOrder, setChallengeOrder] = useState(defaultOrder);
  const [loading, setLoading] = useState(false);

  function handleChangeOrder<T>(challengeOrderId: T) {
    const newChallengeOrder = challengeOrders.find(
      (item) => item.challengeOrderId == challengeOrderId
    );
    if (newChallengeOrder) {
      setChallengeOrder(newChallengeOrder);
    }
  }

  async function handlePurchaseChallengeOrderExtension(
    challengeOrderExtensionId: number
  ) {
    setLoading(true);
    const { success, data, kindMessage } = await challengeOrderExtension({
      ...userAuth,
      challengeOrderExtensionId,
      orderId: challengeOrder.orderId,
    });
    if (success) {
      router.push("/challenge/invoice/" + data.challengeOrderId);
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
    setLoading(false);
  }

  return (
    <div className={clsx(styles.container, loading && styles.ableBtns)}>
      <span className={styles.title}>{userMessage}</span>
      <Challenge
        challengeOrderInfo={challengeOrder.challengeOrderInfo}
        challengeOrderId={challengeOrder.challengeOrderId}
        orders={orders}
        handleChangeOrder={handleChangeOrder}
      />

      {challengeOrder.extensionPacks && (
        <ExtensionPacks
          extension={challengeOrder.extensionPacks}
          handlePurchaseChallengeOrderExtension={
            handlePurchaseChallengeOrderExtension
          }
        />
      )}

      {challengeOrder.analyzer && (
        <Analyzer
          challengeOrderAnalyzer={challengeOrder.analyzer}
          pageMessage={pageMessage}
        />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
