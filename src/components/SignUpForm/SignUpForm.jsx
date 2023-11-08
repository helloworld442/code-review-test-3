import styled from "styled-components";
import { device } from "../../utils/_media";
import { createContext, useState } from "react";
import EmailForm from "../EmailForm/EmailForm";
import EmailCodeForm from "../EmailCodeForm/EmailCodeForm";

export const SignUpFormContext = createContext(null);

export default function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    successKey: "",
    nickname: "",
    password: "",
    skill: [],
  });

  const [error, setError] = useState({ nickname: "", password: "", skill: "" });

  return (
    <SignUpFormContext.Provider value={{ form, setForm, error, setError }}>
      <SignUpFormSection>
        <SectionContent>
          <SectionTitle>회원가입</SectionTitle>

          <ValidateFormSection>
            <FormSectionTitle>이메일 인증</FormSectionTitle>

            <EmailForm />

            <EmailCodeForm />
          </ValidateFormSection>
        </SectionContent>
      </SignUpFormSection>
    </SignUpFormContext.Provider>
  );
}

const SignUpFormSection = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f5;
`;

const SectionTitle = styled.h1`
  margin-bottom: 36px;
  font-size: 2.2rem;
  text-align: center;
`;

const SectionContent = styled.div`
  width: calc(100% - 24vw);
  padding: 4vw 12vw;
  margin: 80px 0;
  box-sizing: border-box;
  margin-bottom: 72px;
  border-radius: 0.5rem;
  background: #fff;

  @media ${device.tablet} {
    width: calc(100% - 12vw);
    padding: 6vw;
  }
`;

const ValidateFormSection = styled.section`
  margin-bottom: 30px;
`;

const FormSectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;
