import styled from "styled-components";
import { device } from "../../utils/_media";
import { Button } from "../@common/Button";
import WriteFormInput from "./WriteFormInput";
import WriteFormCode from "./WriteFormCode";
import WriteFormTextArea from "./WriteFormTextArea";
import useReviewStore from "../../hooks/useReviewStore";
import { useState } from "react";

export default function WriteForm() {
  const [form, setForm] = useState({
    title: "",
    problem: "",
    question: "",
    category: [],
    code: "",
  });
  const [error, setError] = useState({ title: "", code: "" });
  const [snapshot, reviewStore] = useReviewStore();

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    return "";
  };

  const validateCode = (code) => {
    if (code.trim() === "") return "코드를 입력해주세요";
    return "";
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitField = (e) => {
    e.preventDefault();

    const titleError = validateTitle(form.title);
    const codeError = validateCode(form.code);

    if (titleError || codeError) {
      setError({ title: titleError, code: codeError });
      return;
    }

    reviewStore.postFetchData(form);
  };

  const onRefreshField = (e) => {
    e.preventDefault();

    window.location.reload();
  };

  return (
    <StWriteForm onSubmit={onSubmitField}>
      <WriteFormInput
        name="title"
        value={form.title}
        error={error.title}
        onChange={onChangeField}
        label="제목을 입력해주세요"
      />

      <WriteFormCode
        name="code"
        value={form.code}
        error={error.code}
        onChange={onChangeField}
        label="코드를 입력해주세요"
      />

      <WriteFormTextArea
        name="problem"
        value={form.problem}
        onChange={onChangeField}
        label="사전지식을 입력해주세요"
      />

      <WriteFormTextArea
        name="question"
        value={form.question}
        onChange={onChangeField}
        label="목적을 입력해주세요"
      />

      <WriteFormButtons>
        <Button size="medium" onClick={onRefreshField}>
          취소
        </Button>
        <Button size="medium" primary="true" type="submit">
          등록
        </Button>
      </WriteFormButtons>
    </StWriteForm>
  );
}

const StWriteForm = styled.form`
  width: 750px;
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const WriteFormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;
