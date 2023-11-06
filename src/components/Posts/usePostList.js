import useReviewStore from "../../hooks/useReviewStore";

export default function usePostList({ on }) {
  const [snapshot] = useReviewStore();

  const { items } = snapshot;

  return items;
}
