import { clsx } from "@/shared/lib/clsx";
import { IChallenge, IModality } from "../../interfaces/configure.interfaces";
import styles from "./ChallengeModalities.module.scss";
import Division from "@/shared/components/division/Division";

export default function ChallengeModalities({
  label,
  modalities,
  modalitySelectedId,
  handleChangeChallenge,
  challengeSelected
}: {
  label: string;
  modalities: Array<IModality>;
  modalitySelectedId: number;
  handleChangeChallenge: ({
    typeModalityId,
  }: {
    typeModalityId: number;
  }) => void;
  challengeSelected: IChallenge
}) {
  return (
    <div className={styles.challenges}>
      <span className={styles.label}>{label}</span>
      <div className={styles.info}>
        <div className={styles.modalities}>
          {modalities.map((item) => (
            <div
              className={clsx(
                styles.modality,
                item.typeModalityId === modalitySelectedId && styles.select
              )}
              onClick={() =>
                handleChangeChallenge({
                  typeModalityId: item.typeModalityId,
                })
              }
              key={item.typeModalityId}
            >
              {item.typeModalityName}
            </div>
          ))}
        </div>
        <div className={styles.details}>
          <Division />
          <div className={styles.items}>
            {challengeSelected.detailsChallenge.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span> <span>{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
