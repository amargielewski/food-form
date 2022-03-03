import { useState, useEffect, useRef } from "react";

//components
import { Input } from "components";

export const Time = () => {
  const [time, setTime] = useState("");
  const inputTime = useRef<any>();

  const handleChange = () => {
    const timeValue = inputTime.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,2})(\d{0,2})(\d{0,2})/);
    inputTime.current.value = !timeValue[2]
      ? timeValue[1]
      : `${timeValue[1]}:${timeValue[2]}${`${
          timeValue[3] ? `:${timeValue[3]}` : ""
        }`}${`${timeValue[4] ? `-${timeValue[4]}` : ""}`}`;
    const time = inputTime.current.value.replace(/(\D)/g, "");
    setTime(time);
  };

  useEffect(() => {
    handleChange();
  }, [time]);

  return <Input type="text" ref={inputTime} onChange={handleChange} />;
};
