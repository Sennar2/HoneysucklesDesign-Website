import { POSTS } from "../../../data/posts";
const fmt = new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'numeric' });

export function generateStaticParams(){ return POSTS.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }){ const post = POSTS.find(p => p.slug === params.slug); return { title: `${post ? post.title : "Post"} — Honeysuckles Design` }; }

export default function BlogPost({ params }){
  const post = POSTS.find(p => p.slug === params.slug);
  if(!post){
    return <div className="section"><div className="mx-auto max-w-5xl px-6"><h1 className="h2">Not found</h1></div></div>;
  }
  return (
    <article className="section">
      <div className="mx-auto max-w-3xl px-6 prose">
        <p className="text-sm text-softbrown/70"><a href="/blog">← Back to all posts</a></p>
        <h1 className="h1">{post.title}</h1>
        <p className="text-sm text-softbrown/70">{fmt.format(new Date(post.date))}</p>
        {post.content.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </article>
  );
}
