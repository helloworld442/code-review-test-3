import { useEffect, useState } from "react";

export default function useHightlightText(text) {
  const [hightlightText, setHightLightText] = useState("");
  const [hightlightRegex, setHightLightRegex] = useState("");

  const checkHightLightText = (e) => {
    const TEXT_SIZE_REGEX = /#+ ([^]+)/;
    const TEXT_BOLD_REGEX = /\*\*([^ ]+)\*\*/;
    const TEXT_CANCEL_REGEX = /~~([^]+)~~/;

    let texts = e.target.value.split("\n");

    texts = texts.map((text) => {
      if (TEXT_SIZE_REGEX.test(text)) {
        text = text.replaceAll("#", `<span class = "hg-size-text">#</span>`);
      }

      if (TEXT_BOLD_REGEX.test(text)) {
        text = text.replaceAll("*", `<span class = "hg-bold-text">*</span>`);
      }

      if (TEXT_CANCEL_REGEX.test(text)) {
        text = text.replaceAll("~", `<span class = "hg-cancel-text">~</span>`);
      }

      return text;
    });

    texts = texts.join("\n");

    setHightLightRegex(texts);
  };

  const printHightLightText = (text) => {
    const TEXT_SIZE_REGEX = /#+ ([^ ]+)/g;
    const TEXT_BOLD_REGEX = /\*\*([^ ]+)\*\*/g;
    const TEXT_CANCEL_REGEX = /~~([^]+)~~/g;

    let texts = text.split("\n");

    texts = texts.map((text) => {
      const sizeIndex = (text.match(/#/g) || []).length;

      text = text.replace(TEXT_SIZE_REGEX, `<span class = "hg-size-code${sizeIndex}">$1</span>`);

      text = text.replace(TEXT_BOLD_REGEX, `<span class = "hg-bold-code">$1</span>`);

      text = text.replace(TEXT_CANCEL_REGEX, `<span class = "hg-cancel-code">$1</span>`);

      return text;
    });

    texts = texts.join("\n");

    setHightLightText(texts);
  };

  useEffect(() => {
    printHightLightText(text);
  }, [text]);

  return {
    hightlightText,
    hightlightRegex,
    checkFn: checkHightLightText,
    printFn: printHightLightText,
  };
}
