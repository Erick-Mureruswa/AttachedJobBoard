import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function parseDate(dateStr: string): string {
  return dateStr;
}

export function getAllPostMetas(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data } = matter(raw);

    return {
      slug: data.slug as string,
      title: data.title as string,
      description: data.description as string,
      date: parseDate(data.date as string),
      category: data.category as string,
      readTime: data.readTime as string,
      featured: Boolean(data.featured),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return getAllPostMetas().map((p) => p.slug);
}

export async function getPost(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);

    if (data.slug !== slug) continue;

    const processed = await remark()
      .use(remarkHtml, { allowDangerousHtml: false })
      .process(content);

    return {
      slug: data.slug as string,
      title: data.title as string,
      description: data.description as string,
      date: parseDate(data.date as string),
      category: data.category as string,
      readTime: data.readTime as string,
      featured: Boolean(data.featured),
      content: processed.toString(),
    };
  }

  return null;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
