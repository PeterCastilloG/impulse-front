import { clsx } from "@/shared/lib/clsx";
import { IDetail } from "../../interfaces/invoice.interfaces";
import Division from "@/shared/components/division/Division";
import styles from "./Invoice-details.module.scss";

export default function InvoiceDetails({
  invoiceDetailts,
  topDivision = true,
}: {
  invoiceDetailts: Array<Array<IDetail>>;
  topDivision?: boolean;
}) {
  return (
    <div className={styles.details}>
      {invoiceDetailts.map((item) => (
        <div className={styles.colum} key={item.length}>
          {item.map((field) => (
            <div
              className={clsx(styles.field, field.variant && styles.variant)}
              key={field.propertie}
            >
              {!field.variant && topDivision && <Division />}
              <div>
                <span>{field.propertie}</span> <span>{field.value}</span>
              </div>
              {item.indexOf(field) === item.length - 1 && !field.variant && (
                <Division />
              )}
              {!topDivision && <Division />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
