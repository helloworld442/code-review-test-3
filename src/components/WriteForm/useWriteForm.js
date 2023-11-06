import { useState } from "react";
import useReviewStore from "../../hooks/useReviewStore";

export default function useWriteForm() {
  const [form, setForm] = useState({
    title: "",
    preKnow: "",
    purpose: "",
    category: [],
    code: "",
  });

  const [error, setError] = useState({
    title: "",
    preKnow: "",
    purpose: "",
    code: "",
  });

  const [snapshot, reviewStore] = useReviewStore();

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 5) return "제목의 길이를 (5~45)자로 맞춰주세요";
    if (title.length > 45) return "제목의 길이를 (5~45)자로 맞춰주세요";
    return "";
  };

  const validateCode = (code) => {
    if (code.trim() === "") return "코드를 입력해주세요";
    return "";
  };

  const validatePreKnow = (preKnow) => {
    if (preKnow.trim() === "") return "문제상황을 입력해주세요";
    return "";
  };

  const validatePurpose = (purpose) => {
    if (purpose.trim() === "") return "궁금한 점을 업력해주세요";
    return "";
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const titleError = validateTitle(form.title);
    const codeError = validateCode(form.code);
    const preKnowError = validatePreKnow(form.preKnow);
    const purposeError = validatePurpose(form.purpose);

    if (titleError || codeError || preKnowError || purposeError) {
      setError({
        title: titleError,
        preKnow: preKnowError,
        purpose: purposeError,
        code: codeError,
      });
      return;
    }

    reviewStore.postFetchData(form);
  };

  const onRefresh = (e) => {
    e.preventDefault();

    window.location.reload();
  };

  return [form, error, onChange, onSubmit, onRefresh];
}
