import { getAllPosts } from "../service/posts";

export default async function PostPage() {
  const posts = await getAllPosts();

  return <h1>PostPage</h1>;
}
