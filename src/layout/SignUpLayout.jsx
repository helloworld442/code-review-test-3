import styled from "styled-components";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function SignUpLayout({ children }) {
  return (
    <StSignUpLayout>
      <Header />
      {children}
      <Footer />
    </StSignUpLayout>
  );
}

const StSignUpLayout = styled.div`
  width: 100%;
  height: 100%;
`;
