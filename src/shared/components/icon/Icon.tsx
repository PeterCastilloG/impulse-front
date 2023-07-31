import { ImAccessibility } from "react-icons/im";

export default function Icon({ icon }: { icon: string }) {
  return (
    <>
      {
        {
          default: <ImAccessibility />,
        }[icon]
      }
    </>
  );
}
