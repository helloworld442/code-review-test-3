import styled, { keyframes } from "styled-components";
import { StBestPostList } from "./BestPostList";

export default function Skeleton() {
  return (
    <StBestPostList>
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
      <BestPostSkeleton />
    </StBestPostList>
  );
}

function BestPostSkeleton() {
  return (
    <StBestPostSkeleton>
      <BestPostSkeletonTitle />

      <BestPostSkeletonDesc />

      <BestPostSkeletonUser>
        <span />
        <h5 />
      </BestPostSkeletonUser>

      <BestPostSkeletonInfo />
    </StBestPostSkeleton>
  );
}

const blinkAnimation = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    };

    50% {
        background-color: rgba(165, 165, 165, 0.2);
    };

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    };
`;

const StBestPostSkeleton = styled.li`
  position: relative;
  width: 100%;
  height: 220px;
  padding: 24px 14px;
  box-sizing: border-box;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestPostSkeletonTitle = styled.h3`
  margin-bottom: 16px;
  width: 100%;
  height: 24px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestPostSkeletonDesc = styled.h5`
  margin-bottom: 24px;
  width: 100%;
  height: 36px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestPostSkeletonUser = styled.div`
  position: absolute;
  bottom: 20px;
  left: 14px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    border-radius: 100%;
    animation: ${blinkAnimation} 1.5s linear infinite;
  }

  h5 {
    padding-left: 6px;
    margin-left: 6px;
    width: 100px;
    height: 24px;
    animation: ${blinkAnimation} 1.5s linear infinite;
  }
`;

const BestPostSkeletonInfo = styled.div`
  position: absolute;
  bottom: 26px;
  right: 14px;
  width: 100px;
  height: 24px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;
