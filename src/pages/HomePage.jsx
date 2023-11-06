import Comments from "../components/Comnents/Comments";
import Dashboard from "../components/Dashboard/Dashboard";
import UserProfile from "../components/UserProfile/UserProfile";
import HomeLayout from "../layout/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <Dashboard />
      <UserProfile />
      <Comments />
    </HomeLayout>
  );
}
