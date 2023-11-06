import styled from "styled-components";
import { device } from "../../utils/_media";
import { Pagnation } from "../@common/Pagnation";
import QuestionFeedItem from "./QuestionFeedItem";
import useFeedList from "./useFeedList";

export default function QuestionFeedList() {
  const [items, currPage, setCurrPage] = useFeedList({ on: "question" });

  if (!items) return <div>is Loading</div>;

  return (
    <>
      <StQuestionFeedList>
        {items.slice(0, 6).map((item) => (
          <QuestionFeedItem review={item} key={item.id} />
        ))}
      </StQuestionFeedList>

      <Pagnation
        currPage={currPage}
        setCurrPage={setCurrPage}
        totalPages={items.length}
        itemPerPages={6}
      />
    </>
  );
}

const StQuestionFeedList = styled.div`
  margin-bottom: 36px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;
