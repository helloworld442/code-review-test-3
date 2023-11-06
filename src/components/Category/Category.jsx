import { css, styled } from "styled-components";
import { device } from "../../utils/_media";
import { Link } from "react-router-dom";
import useCategory from "./useCategory";

export default function Category({ index }) {
  const [category, onClickCategory] = useCategory(index);

  return (
    <CategoryBox>
      <a href="/forem">
        <CategoryTitle onClick={() => onClickCategory(0)} $active={category === 0}>
          전체
        </CategoryTitle>
      </a>
      <a href="/forem/best">
        <CategoryTitle onClick={() => onClickCategory(1)} $active={category === 1}>
          인기글
        </CategoryTitle>
      </a>
      <a href="/forem/question">
        <CategoryTitle onClick={() => onClickCategory(2)} $active={category === 2}>
          답변중
        </CategoryTitle>
      </a>
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  width: 150px;
  height: auto;
  margin-right: 12px;
  flex-direction: column;
  display: flex;
  float: left;

  @media ${device.tablet} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 24px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const CategoryTitle = styled.h2`
  padding: 12px 0;
  box-sizing: border-box;
  font-size: 1.4rem;
  font-weight: 550;
  color: rgb(64, 58, 107, 0.5);
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      color: #333;
    `}
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;
