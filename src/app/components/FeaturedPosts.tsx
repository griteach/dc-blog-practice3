import { getAllPosts, getFeaturedPosts } from "../service/posts";
import GridPost from "./GridPost";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <h1 className="font-bold text-xl my-2">Featured Posts</h1>
      <GridPost posts={posts} />
    </>
  );
}
