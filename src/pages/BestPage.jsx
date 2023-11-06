import Category from "../components/Category/Category";
import BestPost from "../components/Posts/BestPost";
import ForemLayout from "../layout/ForemLayout";

export default function BestPage() {
  return (
    <ForemLayout>
      <Category index={1} />
      <BestPost />
    </ForemLayout>
  );
}
