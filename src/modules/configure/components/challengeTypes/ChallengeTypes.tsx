import { clsx } from "@/shared/lib/clsx";
import { ITypeProduct } from "../../interfaces/configure.interfaces";
import styles from "./ChallengeTypes.module.scss";

export default function Types({
  types,
  typeProductSelected,
  onChange, 
  label
}: {
  types: ITypeProduct[];
  typeProductSelected: number;
  onChange: ({ typeProductId }: { typeProductId: number }) => void;
  label: string
}) {

  return (
    <div className={styles.types}>
      <span className={styles.label}>{label}</span>
      <div className={styles.items}>
        {
          types.map((type) => <div
            className={clsx(
              styles.type,
              typeProductSelected === type.typeProductId && styles.selected
            )}
            onClick={() => onChange({ typeProductId: type.typeProductId })}
            key={type.typeProductId}
          >
            {type.typeProductName}
          </div>)
        }
      </div>
    </div>
  );
}
