import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getAllPosts(): Promise<Post[]> {
  //1. 모든 데이터 가져오기
  const filePath = path.join(process.cwd(), "data", "posts.json");

  //2. 모든 데이터 보여주기
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((post) => post.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(filename: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${filename}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === filename);

  if (!post) throw new Error(`${filename}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");

  return { ...post, content, next, prev };
}
