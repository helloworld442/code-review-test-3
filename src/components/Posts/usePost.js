import { useEffect } from "react";
import useReviewStore from "../../hooks/useReviewStore";

export default function usePost() {
  const [snapshot, reviewStore] = useReviewStore();

  useEffect(() => {
    reviewStore.getFetchData();

    return () => reviewStore.resetFetchData();
  }, []);

  return reviewStore;
}
