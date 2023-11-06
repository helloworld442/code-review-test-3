import styled from "styled-components";
import { device } from "../utils/_media";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function HomeLayout({ children }) {
  return (
    <StHomeLayout>
      <Header />
      <HomeMain>{children}</HomeMain>
      <Footer />
    </StHomeLayout>
  );
}

const StHomeLayout = styled.div`
  width: 100%;
  height: auto;
  background: rgb(252, 252, 253);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeMain = styled.main`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
`;
