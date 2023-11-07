import styled, { css } from "styled-components";
import { device } from "../../utils/_media";
import useInput from "./useInput";
import useAuthStore from "../../hooks/useAuthStore";
import useTimer from "./useTimer";

export default function ValidateForm() {
  const [form, onChange] = useInput();
  const [snapshot, authStore] = useAuthStore();
  const [minutes, remainingSeconds] = useTimer(snapshot);

  const { emailSuccess, emailError, emailCodeSuccess, emailCodeError } = snapshot;

  const onSubmitEmail = (e) => {
    e.preventDefault();

    const emailForm = { email: form.email };

    authStore.postFetchEmail(emailForm);
  };

  const onSubmitEmailCode = (e) => {
    e.preventDefault();

    const emailCodeForm = { email: form.email, successKey: form.successKey };

    authStore.postFetchEmailCode(emailCodeForm);
  };

  return (
    <ValidateFormSection>
      <SectionTitle>이메일 인증</SectionTitle>

      <form onSubmit={onSubmitEmail}>
        <FormInputBox>
          <FormInputLabel>
            이메일 <span>*</span>
          </FormInputLabel>

          <FormInput
            type="email"
            name="email"
            onChange={onChange}
            disabled={emailSuccess}
            placeholder="이메일을 입력하세요"
          />

          <FormInputButton disabled={emailSuccess}>인증받기</FormInputButton>
        </FormInputBox>
      </form>

      <form onSubmit={onSubmitEmailCode}>
        <FormInputBox>
          <FormInputLabel>
            이메일 인증 <span>*</span>
          </FormInputLabel>

          <FormInput
            type="text"
            name="successKey"
            onChange={onChange}
            disabled={emailCodeSuccess}
            placeholder="인증코드를 입력하세요"
          />

          <FormTimer $active={emailSuccess} $disabled={emailCodeSuccess}>
            {minutes} : {remainingSeconds}
          </FormTimer>

          <FormInputButton disabled={!emailSuccess || emailCodeSuccess}>인증하기</FormInputButton>
        </FormInputBox>
      </form>
    </ValidateFormSection>
  );
}

const ValidateFormSection = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

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

const FormTimer = styled.span`
  padding: 16px 12px;
  margin: 0 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  color: rgb(254, 254, 254);
  background: rgb(194, 200, 214);
  cursor: not-allowed;

  @media (${device.tablet}) {
    font-size: 0.825rem;
    margin: 0 6px;
  }

  ${(props) =>
    props.$active &&
    css`
      background: rgb(64, 58, 107, 0.8);
    `}

  ${(props) =>
    props.$disabled &&
    css`
      background: rgb(194, 200, 214);
    `}
`;
