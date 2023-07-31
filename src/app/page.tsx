"use client";

import Select from "@/shared/components/select/Select";
import { useState } from "react";

const g = [
  { value: "1", label: "uno" },
  { value: "2", label: "dos" },
];
export default function Home() {
  const [state, setState] = useState(g[0]);

  const handle = (newState: string) => {
    console.log("1");
    const newValue = g.find((item) => item.value == newState);
    if (newValue) {
      setState(newValue);
    }
  };

  return <div></div>;
}
