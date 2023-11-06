import styled from "styled-components";
import QuestionFeedList from "./QuestionFeedList";
import useFeedSelect from "./useFeedSelect";
import FeedSelect from "./FeedSelect";

export default function QuestionFeed() {
  const [selectMenu, selectItem, onToggle] = useFeedSelect({ on: "question" });

  return (
    <QuestionFeedSection>
      <SectionTitle>답변을 기다리는 글</SectionTitle>
      <SectionDesc>답변을 기다리는 게시글들입니다. 처음으로 답변의 주인공이 !!</SectionDesc>

      <FeedSelect trigger={selectItem} items={selectMenu} onToggleSelect={onToggle} />

      <QuestionFeedList />
    </QuestionFeedSection>
  );
}

const QuestionFeedSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SectionDesc = styled.h4`
  margin-bottom: 24px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
`;
