import styled from "styled-components";
import { device } from "../../utils/_media";
import BestFeed from "./BestFeed";
import QuestionFeed from "./QuestionFeed";
import useFeed from "./useFeed";
import CSSTransition from "../@common/CSSTransition";

export default function Feeds() {
  const reviewStore = useFeed();

  return (
    <CSSTransition>
      <FeedsBox>
        <BestFeed />
        <QuestionFeed />
      </FeedsBox>
    </CSSTransition>
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
