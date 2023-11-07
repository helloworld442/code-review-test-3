import styled, { keyframes } from "styled-components";

export default function Skeleton() {
  return (
    <>
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
      <QuestionPostSkeleton />
    </>
  );
}

function QuestionPostSkeleton() {
  return (
    <StQuestionPostSkeleton>
      <QuestionPostSkeletonTitle>
        <QuestionPostSkeletonStatus />

        <h3 />
      </QuestionPostSkeletonTitle>

      <QuestionPostSkeletonDesc />

      <QuestionPostSkeletonUser>
        <span />
        <h5 />
      </QuestionPostSkeletonUser>

      <QuestionPostSkeletonPoint />
    </StQuestionPostSkeleton>
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

const StQuestionPostSkeleton = styled.li`
  position: relative;
  width: 100%;
  height: 180px;
  padding: 24px 14px;
  box-sizing: border-box;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionPostSkeletonStatus = styled.div`
  display: inline-block;
  padding: 8px 12px;
  margin-right: 14px;
  box-sizing: border-box;
  width: 80px;
  height: 36px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionPostSkeletonTitle = styled.h3`
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  h3 {
    width: 300px;
    height: 36px;
    animation: ${blinkAnimation} 1.5s linear infinite;
  }
`;

const QuestionPostSkeletonDesc = styled.h5`
  width: 600px;
  height: 36px;
  margin-bottom: 24px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const QuestionPostSkeletonUser = styled.div`
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

const QuestionPostSkeletonPoint = styled.div`
  position: absolute;
  top: 50%;
  right: 36px;
  transform: translateY(-50%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;
