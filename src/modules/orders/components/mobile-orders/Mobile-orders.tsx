import { IOrdersContentPage } from "../../interfaces/orders.interface";
import styles from "./Mobile-orders.module.scss";
import MobileOrder from "../mobile-item/Mobile-order";

export default function MobileOrders({
  orderPage,
  handlePayChallenge,
  handleVerifyChallengOrder,
}: {
  orderPage: IOrdersContentPage;
  handlePayChallenge: ({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) => void;
  handleVerifyChallengOrder: ({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) => void;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.props}>
        <span>Fecha</span>
        <span>Desafio</span>
        <span>Estado</span>
      </div>
      {orderPage.challengeOrders?.map((item) => (
        <MobileOrder
          key={item.challengeOrderId}
          item={item}
          handlePayChallenge={handlePayChallenge}
          handleVerifyChallengOrder={handleVerifyChallengOrder}
        />
      ))}
    </div>
  );
}
