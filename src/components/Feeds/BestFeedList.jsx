import styled from "styled-components";
import { device } from "../../utils/_media";
import { Pagnation } from "../@common/Pagnation";
import BestFeedItem from "./BestFeedItem";
import useFeedList from "./useFeedList";

export default function BestFeedList() {
  const [items, currPage, setCurrPage] = useFeedList({ on: "best" });

  if (!items) return <div>is Loading</div>;

  return (
    <>
      <StBestFeedList>
        {items.slice(0, 6).map((item) => (
          <BestFeedItem review={item} key={item.id} />
        ))}
      </StBestFeedList>

      <Pagnation
        currPage={currPage}
        setCurrPage={setCurrPage}
        totalPages={items.length}
        itemPerPages={6}
      />
    </>
  );
}

const StBestFeedList = styled.ul`
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
