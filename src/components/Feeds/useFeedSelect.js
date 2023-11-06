import { useState } from "react";

export default function useFeedSelect({ on }) {
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [selectItem, setSelectItem] = useState("JavaScript");

  const onToggle = (item) => setSelectItem(item);

  return [selectMenu, selectItem, onToggle];
}
