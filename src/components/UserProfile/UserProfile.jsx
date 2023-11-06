import styled from "styled-components";
import { ReactComponent as Earth } from "../../assets/earth-asia-solid.svg";

export default function UserProfile() {
  return (
    <UserProfileSection>
      <SectionTitle>User Profile</SectionTitle>

      <SectionContent>
        <ContentProfile>
          <Earth className="thumnail" />
          <h5 className="rate">Cluster</h5>
        </ContentProfile>

        <ContentInfo>
          <p>
            <span>이름</span>minmin
          </p>
          <p>
            <span>기술 스택</span> javascript
          </p>
        </ContentInfo>

        <ContentLink>마이페이지</ContentLink>
      </SectionContent>
    </UserProfileSection>
  );
}

const UserProfileSection = styled.section`
  width: 450px;
  float: left;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 750;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const SectionContent = styled.div`
  position: relative;
  padding: 36px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const ContentProfile = styled.div`
  .thumnail {
    width: 6.2rem;
    height: 6.2rem;
    padding: 8px;
    border-radius: 50%;
    fill: rgb(64, 58, 107, 0.8);
    background: rgb(253, 253, 252);
  }

  .rate {
    margin-top: 24px;
    text-align: center;
    font-size: 1.15rem;
  }
`;

const ContentInfo = styled.div`
  width: 300px;
  margin: 12px 0;
  font-size: 1rem;
  font-weight: 550;
  font-family: Pretendard;
  color: #555;

  p {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: Jua;
    color: #333;
  }
`;

const ContentLink = styled.a`
  position: absolute;
  bottom: 36px;
  right: 36px;
  width: 240px;
  padding: 12px 24px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  font-weight: 200;
  color: #bbb;
  text-align: center;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(64, 58, 107, 0.8);
    color: rgb(64, 58, 107, 0.8);
  }
`;
