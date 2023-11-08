import styled, { css } from "styled-components";
import { device } from "../../utils/_media";
import useAuthStore from "../../hooks/useAuthStore";
import useInput from "./useInput";
import useTimer from "./useTimer";

export default function EmailCodeForm() {
  const [form, onChange] = useInput();
  const [snapshot, authStore] = useAuthStore();
  const [minutes, remainingSeconds] = useTimer(snapshot);

  const { emailSuccess, emailCodeSuccess, emailCodeError } = snapshot;

  const onSubmitEmailCode = (e) => {
    e.preventDefault();

    const emailCodeForm = { email: form.email, successKey: form.successKey };

    authStore.postFetchEmailCode(emailCodeForm);
  };

  return (
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
