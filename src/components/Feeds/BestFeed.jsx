import styled from "styled-components";
import BestFeedList from "./BestFeedList";
import FeedSelect from "./FeedSelect";
import useFeedSelect from "./useFeedSelect";

export default function BestFeed() {
  const [selectMenu, selectItem, onToggle] = useFeedSelect({ on: "best" });

  return (
    <BestFeedSection>
      <SectionTitle>인기글</SectionTitle>
      <SectionDesc>인기 있는 게시글들입니다. 지금 한 눈에 모아보세요.</SectionDesc>

      <FeedSelect trigger={selectItem} items={selectMenu} onToggleSelect={onToggle} />

      <BestFeedList />
    </BestFeedSection>
  );
}

const BestFeedSection = styled.section`
  postion: relative;
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
