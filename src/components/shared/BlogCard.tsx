import type { Blog } from "@/models/types"

export default function BlogCard(props: Blog) {
  return (
    <a
      href={`/blog/${props.slug}`}
      className="w-full max-h-36 p-2 text-slate-400 flex justify-start items-center gap-5 border border-spacing-5 border-slate-400 rounded-md bg-purple-950 transition-colors ease-linear hover:bg-gradient-to-r hover:from-slate-900 hover:shadow-md">
      <img
        className="object-contain w-16 h-16 md:w-64 md:h-32 rounded-md bg-slate-900"
        src={props.imgUrl}
        alt={props.imgDescription}
        loading="lazy"
      />
      <div>
        <h1 className="text-slate-300 md:font-bold text-lg md:text-2xl capitalize">
          {props.title}
        </h1>
        <p className="line-clamp-3 hidden md:inline-block">
          {props.description}
        </p>
      </div>
    </a>
  )
}
