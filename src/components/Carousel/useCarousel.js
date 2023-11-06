import { useEffect, useState } from "react";

export default function useCarousel() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % 3);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const onClickRadio = (page) => setPage(page);

  return [page, onClickRadio];
}
