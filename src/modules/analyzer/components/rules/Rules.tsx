import { FaCircleInfo } from "react-icons/fa6";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { IAcountRules } from "../../interfaces/analyzer.interfaces";
import styles from "./Rules.module.scss";

export default function Rules({ rules }: { rules: IAcountRules }) {
  return (
    <div className={styles.container}>
      <div className={styles.secctiontitle}>
        <FaCircleInfo />
        <span>{rules.title}</span>
      </div>
      <div className={styles.rulesdesktop}>
        <table className={styles.table}>
          <thead>
            <tr>
              {rules.properties.map((item) => (
                <th key={item.propertie}>{item.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.objects.map((item, index) => (
              <tr key={index}>
                {rules.properties.map((prop) => (
                  <td
                    key={prop.label}
                    style={{
                      color:
                        prop.propertie === "resume"
                          ? item.resume.status
                            ? "#01B574"
                            : "#FF5757"
                          : "white",
                    }}
                  >
                    <div className={styles.value}>
                      <span>{item[prop.propertie].value ?? ""}</span>
                      {prop.propertie === "tradingObjects" &&
                        item.tradingObjects.extra && (
                          <div className={styles.extrainfo}>
                            <p>{item.tradingObjects.extra}</p>
                            <FaCircleInfo />
                          </div>
                        )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.rulesmobile}>
        {rules.objects.map((item) => (
          <div key={item.tradingObjects.value} className={styles.cart}>
            <div className={styles.title}>
              {item.tradingObjects.extra ? (
                <div className={styles.extrainfo}>
                  <p>{item.tradingObjects.extra}</p>
                  <AiFillQuestionCircle />
                </div>
              ) : "ㅤ"}
              <span>{item.tradingObjects.value}</span>
              {
                {
                  CUMPLE: <AiFillCheckCircle style={{ color: "#01B574" }} />,
                  "NO ALCANZO": (
                    <AiFillCloseCircle style={{ color: "#FF5757" }} />
                  ),
                  default: <AiFillInfoCircle />
                }[item.resume.value]
              }
            </div>
            <div className={styles.content}>
              {item.calc && <span>Calculo: {item.calc.value}</span>}
              {item.results && <span>Resultado: {item.results.value}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
