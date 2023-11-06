import styled from "styled-components";
import { device } from "../../utils/_media";
import ValidateForm from "../ValidateForm/ValidateForm";
import { createContext, useState } from "react";

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
        <SectionTitle>회원가입</SectionTitle>

        <SectionContent>
          <ValidateForm />
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
  padding-top: 30px;
  padding-bottom: 18px;
  font-size: 2.2rem;
  text-align: center;
`;

const SectionContent = styled.div`
  width: calc(100% - 24vw);
  padding: 6vw 12vw;
  box-sizing: border-box;
  margin-bottom: 72px;
  border-radius: 0.5rem;
  background: #fff;

  @media ${device.tablet} {
    width: calc(100% - 12vw);
    padding: 6vw;
  }
`;
