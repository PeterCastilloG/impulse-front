import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import styles from "./Credentials-item.module.scss";

export default function Credential({
  label,
  input,
}: {
  label: string;
  input: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.credential}>
      <span className={styles.type}>{label}</span>
      <div className={styles.content}>
        <div className={styles.info}>
          <span>{show ? input : "•".repeat(input.length)}</span>
          {show ? (
            <AiFillEyeInvisible onClick={() => setShow(false)} />
          ) : (
            <AiFillEye onClick={() => setShow(true)} />
          )}
        </div>
        <div className={styles.copy} onClick={()=> navigator.clipboard.writeText(input)}>
          <FaCopy />
        </div>
      </div>
    </div>
  );
}
