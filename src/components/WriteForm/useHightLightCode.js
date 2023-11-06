import hljs from "highlight.js";
import { useEffect, useState } from "react";

export default function useHightlightCode(code) {
  const [hightlightCode, setHightLightCode] = useState("");

  useEffect(() => {
    let hightcode = hljs.highlight(code, { language: "javascript" }).value;
    hightcode = hightcode.replace(/" "/g, "&nbsp; ");

    setHightLightCode(hightcode);
  }, [code]);

  return hightlightCode;
}
