import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border">
      <p className="text-sm text-slate-400">{props.date}</p>
      
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-cyan-600 hover:text-cyan-900">{props.title}</h2>
      </Link>
      <p className="text-slate-600">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;