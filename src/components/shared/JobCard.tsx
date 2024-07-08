import type { JobCardInfo } from '@/models/types'

export default function JobCard(props?: JobCardInfo) {
  return (
    <a
      className={`h-[456px] flex flex-col justify-start items-center gap-2 max-h-max overflow-hidden rounded-md transition-shadow easy-in-out duration-300 shadow-xl hover:shadow-md group ${props?.classList}`}
      href={`/projects/${props?.id}`}
    >
      <img
        className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 "
        src={props?.imgUrl}
        alt={props?.imgDescription}
        loading="lazy"
      />
      <div
        className="relative w-full h-full flex flex-col items-start justify-between bg-purple-950 text-purple-300 circle-gradient after:from-pink-500 after:to-pink-300 after:-bottom-1/2 after:left-0 after:right-0 after:mx-auto after:opacity-30">
        <svg
          className="absolute -top-8 right-4 z-10 link-icon group-hover:animate-pulse"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        ><path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        ></path><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg
        >
        <div
          className="absolute w-full h-20 bg-purple-950 skew-y-3 -top-14 left-0 right-0">
        </div>
        <div className="-mt-14 z-10 p-4">
          <header>
            <h3 className="text-purple-200 text-lg font-semibold mb-5">
              {props?.title}
            </h3>
          </header>
          <div
            className="text-sm h-14 overflow-hidden flex flex-col items-center justify-between"
            dangerouslySetInnerHTML={{ __html: props?.description as string}}
          />
        </div>
        <footer className="w-full h-14 bg-purple-900 p-4 z-10 flex items-center gap-2">
          {props?.features?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="bg-purple-700 text-purple-100 px-2 rounded-md uppercase text-sm shadow-md">
              {tag}
            </span>
          ))}
        </footer>
      </div>
    </a>
  )
}
