import styled from "styled-components";
import { device } from "../../utils/_media";
import BestPostItem from "./BestPostItem";
import usePostList from "./usePostList";

export default function BestPostList() {
  const items = usePostList({ on: "best" });

  if (!items) return <div>is Loading</div>;

  return (
    <StBestPostList>
      {items.map((item, index) => (
        <BestPostItem review={item} key={item.id} index={index} />
      ))}
    </StBestPostList>
  );
}

const StBestPostList = styled.ul`
  position: relative;
  padding-top: 64px;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
