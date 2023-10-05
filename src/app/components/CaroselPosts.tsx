import { getNonFeaturedPosts } from "../service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CaroselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-4">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
