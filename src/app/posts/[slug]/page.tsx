import PostContent from "@/app/components/\bPostContent";
import AdjacentPostCard from "@/app/components/AdjacentPostCard";
import { getPostData } from "@/app/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/6 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={600}
        height={300}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
