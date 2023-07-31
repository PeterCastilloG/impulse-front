import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IChallenge } from "../../interfaces/configure.interfaces";
import styles from "./Range.module.scss"
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Range({
  challenges,
  challengeSelected,
  onChange,
  label
}: {
  challenges: Array<IChallenge>;
  challengeSelected: IChallenge;
  onChange: ({ challenge }: { challenge: IChallenge }) => void;
  label: string
}) {

  const handleChangeRange = ({ action }: { action: "NEXT" | "PREVIUS" }) => {
    const currentChallengeIndex = challenges.findIndex(item => item.challengeId === challengeSelected.challengeId)
    if (action === "NEXT") {
      rangeChange(currentChallengeIndex === challenges.length - 1 ? 0 : currentChallengeIndex + 1)
    }
    if (action === "PREVIUS") {
      rangeChange(currentChallengeIndex !== 0 ? currentChallengeIndex - 1 : challenges.length - 1)
    }
  }

  const rangeChange = (value: any) => {
    const challenge = challenges.find(
      (item, index) =>
        index === value &&
        challengeSelected.typeProductId === item.typeProductId &&
        challengeSelected.typeModalityId === item.typeModalityId
    );
    if (challenge) onChange({ challenge });
  };

  const marks = challenges
    .sort((a, b) => a.balance - b.balance)
    .reduce((acc, cv) => {
      return {
        ...acc,
        [Object.keys(acc).length]: cv.label

      };
    }, {});

  return (
    <div className={styles.challenge}>
      <span className={styles.label}>{label}</span>
      <div className={styles.balance}>
        <AiOutlineMinusCircle onClick={() => handleChangeRange({ action: "PREVIUS" })} />
        <span>{challengeSelected.balanceLabel}</span>
        <AiOutlinePlusCircle onClick={() => handleChangeRange({ action: "NEXT" })} />
      </div>
      <div className={styles.range}>
        <Slider
          marks={marks}
          trackStyle={{ backgroundColor: "#007CFF" }}
          pushable
          step={null}
          min={0}
          max={Object.keys(marks).length - 1}
          dotStyle={{ display: "none", background: "red" }}
          railStyle={{ background: "rgba(255, 255, 255, 0.25)" }}
          onChange={rangeChange}

          handleStyle={{ background: "#007CFF", border: "none" }}
          value={challenges.findIndex(
            (item) => item.challengeId === challengeSelected.challengeId
          )}
        />
      </div>
    </div>
  );
}
