import Link from "next/link";
import { Post } from "../service/posts";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, category, date, featured, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg  hover:scale-110 transition-all    ">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={`img`}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-2 ">
          <time className="bg-slate-100 text-sm rounded-md px-2 mt-1 self-end">
            {date.toString()}
          </time>
          <h1 className="text-xl font-bold mt-1 truncate">{title}</h1>
          <p className="mt-2 w-full truncate text-center">{description}</p>
          <span className="text-sm bg-slate-200 rounded-md px-2 py-1">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
