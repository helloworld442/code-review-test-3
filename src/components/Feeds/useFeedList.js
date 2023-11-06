import { useEffect, useState } from "react";
import useReviewStore from "../../hooks/useReviewStore";

export default function useFeedList({ on }) {
  const [currPage, setCurrPage] = useState(1);
  const [snapshot] = useReviewStore();

  const { items } = snapshot;

  return [items, currPage, setCurrPage];
}
