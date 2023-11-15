import styled, { keyframes } from "styled-components";
import { StQuestionFeedList } from "./QuestionFeedList";

export default function Skeleton() {
  return (
    <StQuestionFeedList>
      <QuestionFeedSkeleton />
      <QuestionFeedSkeleton />
      <QuestionFeedSkeleton />
      <QuestionFeedSkeleton />
      <QuestionFeedSkeleton />
      <QuestionFeedSkeleton />
    </StQuestionFeedList>
  );
}

function QuestionFeedSkeleton() {
  return (
    <StQuestionFeedSkeleton>
      <QuestionFeedSkeletonTitle />
      <QuestionFeedSkeletonDesc />
      <QuestionFeedSkeletonTags />
    </StQuestionFeedSkeleton>
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

const StQuestionFeedSkeleton = styled.li`
  position: relative;
  width: 100%;
  height: 180px;
  padding: 24px 14px;
  box-sizing: border-box;
  border-radius: 4px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionFeedSkeletonTitle = styled.h3`
  margin-bottom: 16px;
  width: 100%;
  height: 36px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionFeedSkeletonDesc = styled.h5`
  margin-bottom: 24px;
  width: 100%;
  height: 48px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionFeedSkeletonTags = styled.div`
  position: absolute;
  bottom: 12px;
  right: 14px;
  width: 100px;
  height: 30px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;
