import type { Blog } from "@/models/types"

export default function BlogCard(props?: Blog) {
  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden flex flex-col md:flex-row justify-center items-center md:text-right transition-all ease-in-out shadow-slate-950 shadow-md md:shadow-none border-purple-700 border md:border-0">
      <img
        className="object-cover w-full h-full md:w-1/2 rounded-lg bg-slate-900 md:-mr-12 transition-opacity opacity-80 hover:opacity-100 hue-rotate-30 hover:hue-rotate-0"
        src={props?.imgUrl}
        alt={props?.imgDescription}
        loading="lazy"
      />
      <div className="absolute md:relative w-full h-full p-4 flex flex-col justify-between items-start md:items-end md:gap-5 bg-purple-950/80 backdrop-blur-sm md:backdrop-blur-0 md:bg-transparent">
        <h1 className="text-slate-300 md:text-lg xl:font-bold xl:text-xl capitalize">
          {props?.title}
        </h1>
        <div
          className="w-full h-24 md:h-32 flex flex-col justify-between items-start gap-2 md:p-5 rounded-lg md:bg-purple-950 text-slate-400 z-10 md:shadow-lg">
          <p className="line-clamp-3 text-sm md:text-base">
            {props?.description}
          </p>
          <div className="w-full flex flex-wrap md:justify-end items-center gap-1">
            {props?.tags?.map((tag, i) => <span key={i} className="px-2 bg-purple-700 text-slate-300 text-xs rounded-md capitalize">{tag}</span>)}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <a href={`/blog/${props?.slug}`} className="w-max h-max md:h-11 md:px-4 text-yellow-500 transition-colors ease-in-out duration-300 flex items-center gap-1 md:border-yellow-500/50 md:hover:border-yellow-500 md:border-2 md:rounded-lg">Read more</a>
        </div>
      </div>
    </div>
  )
}
