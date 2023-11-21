import styled, { css } from "styled-components";
import { device } from "../../utils/_media";
import BestPostItem from "./BestPostItem";
import usePostList from "./usePostList";
import Skeleton from "./BestPostSkeleton";

export default function BestPostList() {
  const items = usePostList({ on: "best" });

  if (!items) return <Skeleton />;

  return (
    <StBestPostList>
      {items.content.map((item, index) => (
        <BestPostItem review={item} key={item.id} index={index} />
      ))}
    </StBestPostList>
  );
}

export const StBestPostList = styled.ul`
  position: relative;
  padding-top: 64px;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${(props) =>
    props.$skeleton &&
    css`
      grid-gap: 24px;
    `}
`;
