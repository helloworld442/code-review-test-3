import styled from "styled-components";
import { device } from "../utils/_media";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function WriteLayout({ children }) {
  return (
    <StWriteLayout>
      <Header />
      <WriteMain>{children}</WriteMain>
      <Footer />
    </StWriteLayout>
  );
}

const StWriteLayout = styled.div`
  width: 100%;
  height: auto;
  background: rgb(252, 252, 253);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WriteMain = styled.main`
  width: 1150px;
  height: auto;
  margin-top: 100px;
  box-sizing: border-box;
  display: flex;
  gap: 64px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;
