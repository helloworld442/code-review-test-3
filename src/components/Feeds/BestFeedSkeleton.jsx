import styled, { keyframes } from "styled-components";

export default function Skeleton() {
  return (
    <>
      <BestFeedSkeleton />
      <BestFeedSkeleton />
      <BestFeedSkeleton />
      <BestFeedSkeleton />
      <BestFeedSkeleton />
      <BestFeedSkeleton />
    </>
  );
}

function BestFeedSkeleton() {
  return (
    <StBestFeedSkeleton>
      <BestFeedSkeletonCategory />

      <BestFeedSkeletonTitle />

      <BestFeedSkeletonDesc />

      <BestFeedSkeletonUser>
        <span />
        <h5 />
      </BestFeedSkeletonUser>

      <BestFeedSkeletonInfo />
    </StBestFeedSkeleton>
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

const StBestFeedSkeleton = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  padding: 24px 14px;
  box-sizing: border-box;
  border-radius: 4px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestFeedSkeletonCategory = styled.h3`
  width: 80px;
  height: 24px;
  margin-bottom: 16px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestFeedSkeletonTitle = styled.h3`
  margin-bottom: 16px;
  width: 100%;
  height: 36px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestFeedSkeletonDesc = styled.h5`
  margin-bottom: 24px;
  width: 100%;
  height: 56px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const BestFeedSkeletonUser = styled.div`
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
    border: 2px solid #eee;
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

const BestFeedSkeletonInfo = styled.div`
  position: absolute;
  bottom: 26px;
  right: 14px;
  width: 100px;
  height: 36px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;
