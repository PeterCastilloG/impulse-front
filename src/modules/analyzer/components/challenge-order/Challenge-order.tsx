import {
  AiFillAndroid,
  AiFillApple,
  AiFillCheckCircle,
  AiFillQuestionCircle,
  AiFillWindows,
} from "react-icons/ai";
import { FaCartShopping, FaCircleInfo } from "react-icons/fa6";
import { IChallengeOrderInfo } from "../../interfaces/analyzer.interfaces";
import Division from "@/shared/components/division/Division";
import styles from "./Challenge-order.module.scss";
import Link from "next/link";
import Select from "@/shared/components/select/Select";
import Credentials from "@/shared/components/credentials/Credentials";

export default function Challenge({
  challengeOrderInfo,
  orders,
  challengeOrderId,
  handleChangeOrder,
}: {
  challengeOrderInfo: IChallengeOrderInfo;
  orders: Array<{ challengeOrderId: number; login: string }>;
  challengeOrderId: number;
  handleChangeOrder: <T>(chalvaengeOrderId: T) => void;
}) {
  return (
    <div className={styles.challenge}>
      <div className={styles.content}>
        <div className={styles.accounts}>
          <span>
            <FaCircleInfo /> {challengeOrderInfo.account.accountLabel}
          </span>
          <Select
            curretnValue={challengeOrderId}
            onChange={handleChangeOrder}
            disabled={false}
            options={orders.map((item) => ({
              value: item.challengeOrderId,
              label: item.login,
            }))}
            placeholder="Selecionar login"
            filter={false}
          />
        </div>
        <div className={styles.details}>
          <span className={styles.propertie}>
            {challengeOrderInfo.fase.faseLabel}
          </span>
          <span className={styles.value}>
            <AiFillCheckCircle />
            {challengeOrderInfo.fase.faseState}
          </span>
        </div>
      </div>
      <div className={styles.division}>
        <Division />
      </div>
      <div className={styles.info}>
        <Link
          href={"/challenge"}
          className={styles.newchallenge}
          prefetch={false}
        >
          <FaCartShopping />
          Nuevo desafio
        </Link>
        <Credentials
          data={{
            btnName: challengeOrderInfo.credenciales.btnName,
            fields: challengeOrderInfo.credenciales.fields,
            title: challengeOrderInfo.credenciales.title,
          }}
        />
        <div className={styles.btns}>
          <span>
            <FaCircleInfo />
            DESCARGAR MT4
          </span>
          <a
            href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg?utm_source=www.metatrader4.com&utm_campaign=download.mt4.macos"
            target="_BLANK"
          >
            <AiFillApple className={styles.icon} />
          </a>
          <a
            href="https://download.mql5.com/cdn/web/19600/mt4/worldtraders4setup.exe"
            target="_BLANK"
          >
            {" "}
            <AiFillWindows className={styles.icon} />
          </a>
        </div>
        <div className={styles.helps}>
          <div>
            <FaCircleInfo />
          </div>
          <div>
            <AiFillQuestionCircle />
          </div>
        </div>
        <div className={styles.redes}>
          <a href="" target="_blank">
            <AiFillAndroid />
            <span>Android APP</span>
          </a>
          <a href="" target="_blank">
            <AiFillApple />
            <span>IOS APP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
