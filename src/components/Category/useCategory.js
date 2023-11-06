import { useState } from "react";

export default function useCategory(index) {
  const [category, setCategory] = useState(index);

  const onClickCategory = (index) => setCategory(index);

  return [category, onClickCategory];
}
