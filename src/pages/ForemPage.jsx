import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import Feeds from "../components/Feeds/Feeds";
import ForemLayout from "../layout/ForemLayout";

export default function ForemPage() {
  return (
    <ForemLayout>
      <Category index={0} />
      <Carousel />
      <Feeds />
    </ForemLayout>
  );
}
