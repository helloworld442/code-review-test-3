import styled from "styled-components";
import { Button } from "../@common/Button";
import WriteFormInput from "./WriteFormInput";
import WriteFormCode from "./WriteFormCode";
import useWriteForm from "./useWriteForm";
import WriteFormTextArea from "./WriteFormTextArea";
import { device } from "../../utils/_media";

export default function WriteForm() {
  const [form, error, onChange, onSubmit, onRefresh] = useWriteForm();

  return (
    <StWriteForm onSubmit={onSubmit}>
      <WriteFormInput
        name="title"
        value={form.title}
        error={error.title}
        onChange={onChange}
        label="제목을 입력해주세요"
      />

      <WriteFormCode
        name="code"
        value={form.code}
        error={error.code}
        onChange={onChange}
        label="코드를 입력해주세요"
      />

      <WriteFormTextArea
        name="preKnow"
        value={form.preKnow}
        error={error.preKnow}
        onChange={onChange}
        label="사전지식을 입력해주세요"
      />

      <WriteFormTextArea
        name="purpose"
        value={form.purpose}
        error={error.purpose}
        onChange={onChange}
        label="목적을 입력해주세요"
      />

      <WriteFormButtons>
        <Button size="medium" onClick={onRefresh}>
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
