import Category from "../components/Category/Category";
import QuestionPost from "../components/Posts/QuestionPost";
import ForemLayout from "../layout/ForemLayout";

export default function QuestionPage() {
  return (
    <ForemLayout>
      <Category index={2} />
      <QuestionPost />
    </ForemLayout>
  );
}
