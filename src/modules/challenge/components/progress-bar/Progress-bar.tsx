import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress({
  current,
  max,
  state
}: {
  current: number;
  max: number;
  state: boolean
}) {

  return (
    <ProgressBar
      completed={Number(current.toFixed(0))}
      maxCompleted={Number(max.toFixed(0))}
      borderRadius="0"
      customLabel=" "
      height="5px"
      bgColor={state? "#0075FF" : "#FF5757"}
      baseBgColor="#2D2E5F"
    />
  );
}
