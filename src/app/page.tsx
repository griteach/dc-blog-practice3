import CaroselPosts from "./components/CaroselPosts";
import FeaturedPosts from "./components/FeaturedPosts";
import HeroPage from "./components/Hero";

export default function Home() {
  return (
    <>
      <HeroPage />
      <FeaturedPosts />
      <CaroselPosts />
    </>
  );
}
