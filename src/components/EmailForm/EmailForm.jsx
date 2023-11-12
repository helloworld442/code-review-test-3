import styled from "styled-components";
import useAuthStore from "../../hooks/useAuthStore";
import useInput from "./useInput";

export default function EmailForm() {
  const [form, onChange] = useInput();
  const [snapshot, authStore] = useAuthStore();

  const { emailSuccess, emailCodeSuccess, emailError } = snapshot;

  const onSubmitEmail = (e) => {
    e.preventDefault();

    const emailForm = { email: form.email };

    authStore.postFetchEmail(emailForm);
  };

  return (
    <form onSubmit={onSubmitEmail}>
      <FormInputBox>
        <FormInputLabel>
          이메일 <span>*</span>
        </FormInputLabel>

        <FormInput
          type="email"
          name="email"
          onChange={onChange}
          disabled={emailSuccess || emailCodeSuccess}
          placeholder="이메일을 입력하세요"
        />

        <FormInputButton disabled={emailSuccess || emailCodeSuccess}>인증받기</FormInputButton>
      </FormInputBox>
    </form>
  );
}

const FormInputBox = styled.div`
  position: relative;
  margin: 48px 0;
  display: flex;
  align-items: center;
`;

const FormInputLabel = styled.label`
  display: inline-block;
  width: 20%;
  font-size: 1rem;
  font-weight: bold;

  span {
    color: red;
  }
`;

const FormInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 400;
  color: #333;
  background: #f0f1f5;

  &:placeholder {
    color: #888;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const FormInputButton = styled.button`
  position: absolute;
  right: 0;
  height: 50px;
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  color: rgb(254, 254, 254);
  background: rgb(64, 58, 107, 0.8);
  cursor: pointer;

  &:disabled {
    background: rgb(194, 200, 214);
    cursor: not-allowed;
  }
`;
