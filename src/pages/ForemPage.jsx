import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import Feeds from "../components/Feeds/Feeds";

export default function ForemPage() {
  return (
    <>
      <Category index={0} />
      <Carousel />
      <Feeds />
    </>
  );
}
