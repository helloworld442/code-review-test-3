import styled from "styled-components";
import { device } from "../utils/_media";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function ForemLayout({ children }) {
  return (
    <StForemLayout>
      <Header />
      <ForemMain>{children}</ForemMain>
      <Footer />
    </StForemLayout>
  );
}

const StForemLayout = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForemMain = styled.main`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
