import { Post } from "../service/posts";
import PostCard from "./PostCard";

export type Props = {
  posts: Post[];
};

export default function GridPost({ posts }: Props) {
  return (
    <section className="mt-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
