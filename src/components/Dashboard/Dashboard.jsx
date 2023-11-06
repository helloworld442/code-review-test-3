import styled from "styled-components";
import { ReactComponent as Earth } from "../../assets/earth-asia-solid.svg";
import { device } from "../../utils/_media";

export default function Dashboard() {
  return (
    <DashboardSection>
      <SectionTitle>Dashboard</SectionTitle>

      <SectionContent>
        <DashbaordLeftItem>
          <h3>코드 리뷰 사이트 별무리</h3>
          <h5>코드 리뷰의 장!! 별무리 입니다. 리뷰를 남기고 확인해보세요!</h5>
          <a>Learn More</a>
        </DashbaordLeftItem>

        <DashboardRightItem>
          <Earth />
        </DashboardRightItem>
      </SectionContent>
    </DashboardSection>
  );
}

const DashboardSection = styled.section`
  margin-top: 30px;
  margin-bottom: 36px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 750;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const SectionContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 48px 64px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: rgb(64, 58, 107, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 36px 48px;
  }
`;

const DashbaordLeftItem = styled.div`
  h3 {
    margin-bottom: 24px;
    font-size: 2.4rem;
    font-weight: 100;
    color: #fff;
  }

  h5 {
    margin-bottom: 36px;
    font-size: 0.85rem;
    font-weight: 650;
    font-family: sans-serif;
    line-height: 2rem;
    color: rgb(242, 236, 254);
  }

  a {
    padding: 12px 20px;
    border-radius: 4px;
    background: #fff;
    color: rgb(64, 58, 107, 1);
    font-size: 0.95rem;
    cursor: pointer;
  }

  @media ${device.tablet} {
    h3 {
      font-size: 1.8rem;
    }

    h5 {
      font-size: 0.825rem;
    }

    a {
      font-size: 0.825rem;
    }
  }
`;

const DashboardRightItem = styled.div`
  svg {
    width: 10.5rem;
    height: 10.5rem;
    fill: rgb(242, 236, 254);
  }

  @media ${device.tablet} {
    svg {
      width: 9.5rem;
      height: 9.5rem;
    }
  }
`;
