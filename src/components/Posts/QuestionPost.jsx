import styled from "styled-components";
import { device } from "../../utils/_media";
import QuestionPostBanner from "./QuestionPostBanner";
import usePost from "./usePost";
import QuestionPostList from "./QuestionPostList";
import QuestionPostSearch from "./QuestionPostSearch";
import CSSTransition from "../@common/CSSTransition";

export default function QuestionPost() {
  const reviewStore = usePost();

  return (
    <CSSTransition>
      <StQuestionPostSection>
        <QuestionPostBanner />

        <SectionTitle>답변을 기다리는 글</SectionTitle>

        <SectionDesc>답변을 기다리는 게시글들입니다. 처음으로 답변의 주인공이 !!</SectionDesc>

        <QuestionPostSearch />

        <QuestionPostList />
      </StQuestionPostSection>
    </CSSTransition>
  );
}

const StQuestionPostSection = styled.section`
  position: relative;
  width: 980px;
  height: auto;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
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
