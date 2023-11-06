import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BestFeedItem({ review }) {
  return (
    <StBestFeedItem>
      <BestFeedCategory>{review.category}</BestFeedCategory>

      <BestFeedTitle>
        <Link to={"/detail/" + review.id}>{review.title}</Link>
      </BestFeedTitle>

      <BestFeedDesc>{review.problem}</BestFeedDesc>

      <BestFeedUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </BestFeedUser>

      <BestFeedInfo>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </BestFeedInfo>
    </StBestFeedItem>
  );
}

const StBestFeedItem = styled.li`
  position: relative;
  width: 100%;
  height: 250px;
  padding: 24px 14px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f0f1fe;
`;

const BestFeedCategory = styled.h3`
  margin-bottom: 16px;
  font-size: 0.9rem;
  font-weight: 550;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const BestFeedTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 1.15rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    color: rgb(64, 58, 107, 0.5);
  }
`;

const BestFeedDesc = styled.h5`
  margin-bottom: 24px;
  font-size: 0.95rem;
  font-weight: 650;
  font-family: Pretendard;
  color: #333;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BestFeedUser = styled.div`
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
    background: #403a6b;
  }

  h5 {
    padding-left: 6px;
    margin-left: 6px;
    border-left: 1.5px solid #888;
    font-size: 0.825rem;
    font-weight: 500;
    font-family: sans-serif;
    color: #888;
  }
`;

const BestFeedInfo = styled.div`
  position: absolute;
  bottom: 26px;
  right: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;

  span {
    color: rgb(64, 58, 107, 0.8);
  }
`;
