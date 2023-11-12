import { useEffect, useState } from "react";

export default function useTimer(snapshot) {
  const [seconds, setSeconds] = useState(300);

  const { emailSuccess, emailCodeSuccess } = snapshot;

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0 && emailSuccess && !emailCodeSuccess) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, emailSuccess, emailCodeSuccess]);

  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return [minutes, remainingSeconds];
}
