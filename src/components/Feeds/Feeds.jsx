import styled from "styled-components";
import { device } from "../../utils/_media";
import BestFeed from "./BestFeed";
import QuestionFeed from "./QuestionFeed";
import useFeed from "./useFeed";

export default function Feeds() {
  const reviewStore = useFeed();

  return (
    <FeedsBox>
      <BestFeed />
      <QuestionFeed />
    </FeedsBox>
  );
}

const FeedsBox = styled.div`
  position: relative;
  width: 980px;
  height: auto;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;
