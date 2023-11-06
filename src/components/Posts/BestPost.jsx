import styled from "styled-components";
import BestPostBanner from "./BestPostBanner";
import BestPostSearch from "./BestPostSearch";
import usePost from "./usePost";
import BestPostList from "./BestPostList";
import CSSTransition from "../@common/CSSTransition";

export default function BestPost() {
  const reviewStore = usePost();

  return (
    <CSSTransition>
      <BestPostSection>
        <BestPostBanner />

        <SectionTitle>인기글 검색</SectionTitle>

        <SectionDesc>
          태그를 활용한 인기글 검색입니다! 지금 검색을 통해 별무리 회원들의 인기글을 확인해보세요!
        </SectionDesc>

        <BestPostSearch />

        <BestPostList />
      </BestPostSection>
    </CSSTransition>
  );
}

const BestPostSection = styled.section`
  position: relative;
  width: 980px;
  height: auto;
  float: right;
`;

const SectionTitle = styled.h3`
  margin-left: 14px;
  margin-bottom: 18px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SectionDesc = styled.h5`
  margin-left: 14px;
  margin-bottom: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
`;
