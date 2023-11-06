import styled from "styled-components";
import Tag from "../@common/Tag";

export default function QuestionFeedItem({ review }) {
  return (
    <StQuestionFeedItem>
      <QuestionFeedTitle>
        <a href={"/detail/" + review.id}>{review.title}</a>
      </QuestionFeedTitle>

      <QuestionFeedDesc>{review.problem}</QuestionFeedDesc>

      <QuestionFeedTags>
        <Tag title={review.category} />
      </QuestionFeedTags>
    </StQuestionFeedItem>
  );
}

const StQuestionFeedItem = styled.li`
  position: relative;
  width: 100%;
  height: 180px;
  padding: 24px 14px;
  box-sizing: border-box;
  border: 2px solid #e1e3e7;
  border-radius: 4px;
`;

const QuestionFeedTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 1.15rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    color: rgb(64, 58, 107, 0.5);
  }
`;

const QuestionFeedDesc = styled.h5`
  margin-bottom: 24px;
  font-size: 0.95rem;
  font-weight: 650;
  font-family: Pretendard;
  color: #333;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const QuestionFeedTags = styled.div`
  position: absolute;
  bottom: 12px;
  right: 14px;
`;
