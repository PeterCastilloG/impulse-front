import { MdArrowBackIosNew } from "react-icons/md";
import styles from "./Invoice-processor.module.scss";
import { IInvoiceInfo } from "../../interfaces/invoice.interfaces";
import Image from "next/image";
import Division from "@/shared/components/division/Division";
import { clsx } from "@/shared/lib/clsx";
import ProcessorWarn from "../processor-warn/Processor-warn";
import InvoiceDetails from "../invoice-details/Invoice-details";
import Link from "next/link";

export default function InvoiceProcessor({
  invoiceInfo,
  setShowInvoice,
}: {
  invoiceInfo: IInvoiceInfo;
  setShowInvoice: (status: boolean) => void;
}) {
  console.log({ invoiceInfo });
  return (
    <div className={styles.invoice}>
      <div className={styles.return} onClick={() => setShowInvoice(false)}>
        <MdArrowBackIosNew />
        <span>{invoiceInfo.labelInvoice}</span>
      </div>
      <span className={styles.title}>{invoiceInfo.title}</span>
      <div className={styles.info}>
        <div className={styles.processor}>
          <span>{invoiceInfo.payWith}</span>
          <Image
            src={invoiceInfo.img}
            alt="processor"
            width={100}
            height={100}
          />
        </div>
        <InvoiceDetails topDivision={false} invoiceDetailts={invoiceInfo.properties}/>
      </div>
      <div>
        <Link
          href={invoiceInfo.checkpage.link}
          target="_blank"
          className={styles.verify}
        >
          {invoiceInfo.checkpage.text}
        </Link>
      </div>
      <div className={styles.extainfo}>
        {invoiceInfo.extraInfo.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      {invoiceInfo.warns.map((item, index) => (
        <ProcessorWarn warns={item} key={index} />
      ))}
      <Link
        href={invoiceInfo.checkpage.link}
        target="_blank"
        className={styles.chechurlprocessor}
      >
        {invoiceInfo.checkpage.text}
      </Link>
      <button className={styles.verify}>{invoiceInfo.verify.text}</button>
    </div>
  );
}
