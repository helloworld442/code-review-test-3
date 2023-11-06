import styled from "styled-components";
import QuestionPostItem from "./QuestionPostItem";
import usePostList from "./usePostList";

export default function QuestionPostList() {
  const items = usePostList({ on: "question" });

  if (!items) return <div>is Loaindg</div>;

  return (
    <StQuestionPostList>
      {items.map((item) => (
        <QuestionPostItem review={item} key={item.id} />
      ))}
    </StQuestionPostList>
  );
}

const StQuestionPostList = styled.ul`
  position: relative;
  padding-top: 64px;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 18px;
`;
