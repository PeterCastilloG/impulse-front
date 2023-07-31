import { BiSolidTime } from "react-icons/bi";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import BtnOrderState from "../order-state-btn/Order-state-btn";
import styles from "./Mobile-order.module.scss";
import OrderStateIcon from "../order-state-icon/Order-state-icon";
import { ChallengeOrder } from "../../interfaces/orders.interface";
import { IoIosArrowDown } from "react-icons/io";

export default function MobileOrder({
  item,
  handlePayChallenge,
  handleVerifyChallengOrder,
}: {
  item: ChallengeOrder;
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
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  return (
    <div className={styles.challengeorder}>
      <div className={styles.propsorder}>
        <span>{item.createdAt}</span> <span>{item.title}</span>
        <span>
          <OrderStateIcon type={item.status} showText={false} />
          <IoIosArrowDown
            className={styles.drop}
            onClick={() => setShowOrderDetails(!showOrderDetails)}
          />
        </span>
      </div>
      <div className={clsx(styles.details, showOrderDetails && styles.show)}>
        <div className={styles.extra}>
          <div>
            <span>id:</span> <span>{item.challengeOrderId}</span>
          </div>
          <div>
            <span>Cantidad:</span> <span>{item.price}</span>
          </div>
          <div>
            <span>Moneda:</span> <span>{item.currency}</span>
          </div>
          <div>
            <span>Estado:</span> <OrderStateIcon type={item.status} />
          </div>
        </div>
        <div className={styles.btn}>
          <BtnOrderState
            type={item.status}
            challengeOrderId={item.challengeOrderId}
            credentials={item.credentials}
            handlePayChallenge={handlePayChallenge}
            handleVerifyChallengOrder={handleVerifyChallengOrder}
          />
        </div>
      </div>
    </div>
  );
}
