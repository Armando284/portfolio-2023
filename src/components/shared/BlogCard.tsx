import type { Blog } from '@/models/types'

export default function BlogCard(props?: Blog) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col md:flex-row justify-center items-center md:text-right transition-all ease-in-out shadow-slate-950 shadow-md md:shadow-none border-purple-700 border md:border-0">
      <div className="w-full h-[256px] md:min-w-[320px] md:w-[320px] md:h-[180px] md:max-h-[180px] lg:min-w-[480px] lg:w-[480px] lg:h-[270px] lg:max-h-[270px] bg-slate-900 rounded-lg overflow-hidden flex justify-center items-center md:-mr-24">
        <img
          className="w-full h-full object-cover transition-opacity opacity-80 hover:opacity-100 hue-rotate-30 hover:hue-rotate-0"
          src={props?.imgUrl}
          alt={props?.imgDescription}
          loading="lazy"
        />
      </div>

      <div className="absolute md:relative w-full h-full flex flex-col justify-between items-start md:items-end md:gap-5 bg-purple-950/50 backdrop-blur-sm md:backdrop-blur-0 md:bg-transparent">
        <header className="p-4 pb-0">
          <h1 className="text-purple-200 md:text-lg xl:font-bold xl:text-xl capitalize">
            {props?.title}
          </h1>
        </header>
        <div className="w-full h-24 md:h-32 flex flex-col justify-between items-start gap-1 px-4 md:p-5 rounded-lg md:bg-purple-950 text-purple-300 z-10 md:shadow-xl">
          <p className="line-clamp-2 text-sm md:text-base">
            {props?.description}
          </p>
          <div className="w-full flex flex-wrap md:justify-end items-center gap-1">
            {props?.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-purple-700 text-purple-300 px-2 rounded-md capitalize text-sm shadow-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <footer className="w-full h-auto p-4 flex justify-end bg-purple-950 md:bg-transparent">
          <a
            href={`/blog/${props?.slug}`}
            className="w-max h-max md:h-11 md:px-4 text-yellow-500 transition-colors ease-in-out duration-300 flex items-center gap-1 md:border-yellow-500/50 md:hover:border-yellow-500 md:border-2 md:rounded-lg">
            Read more
          </a>
        </footer>
      </div>
    </div>
  )
}
