import styled from "styled-components";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function SignInLayout({ children }) {
  return (
    <StSignInLayout>
      <Header />
      {children}
      <Footer />
    </StSignInLayout>
  );
}

const StSignInLayout = styled.div`
  width: 100%;
  height: 100%;
`;
