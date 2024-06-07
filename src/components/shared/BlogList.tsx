import { blogs } from '@/lib/blogs'
import type { Blog } from '@/models/types'
import { useState, type ChangeEvent, type ReactNode } from 'react'
import BlogCard from './BlogCard'

type MyBlogComponent = {
  children?: ReactNode
}

export default function BlogList(props: MyBlogComponent) {
  const [blogsArray, setBlogsArray] = useState<Blog[]>(blogs)

  function debouncer() {
    let timerid: number
    return function (e: ChangeEvent<HTMLInputElement>) {
      const value = e.target.value
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        filterBlogs(value)
      }, 500)
    }
  }

  const filterBlogs = (param: string): void => {
    if (!param || typeof param !== 'string' || param === '') {
      setBlogsArray(blogs)
      return
    }
    const searchParam = param.toLowerCase()
    const arr = blogsArray.filter(
      (b) =>
        b.title.toLowerCase().includes(searchParam) ||
        b.description.toLowerCase().includes(searchParam) ||
        b.tags?.includes(searchParam)
    )
    setBlogsArray(arr)
  }

  return (
    <>
      <div className="w-full flex flex-wrap justify-between items-center my-4 sm:mb-0">
        {props.children}
        <div className="w-full sm:w-max h-11 px-4 flex justify-between items-center gap-4 rounded-full border-purple-300 text-purple-300 bg-purple-950/50 border-2">
          <input
            type="search"
            name="param"
            placeholder="Filter"
            onChange={debouncer()}
            className="border-0 outline-none text-purple-300 bg-transparent"
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
      </div>
      <section className="flex flex-col gap-5 md:mb-10">
        {blogsArray.map((blog) => (
          <BlogCard
            key={blog?.slug}
            slug={blog?.slug}
            title={blog?.title}
            imgUrl={blog?.imgUrl}
            imgDescription={blog?.imgDescription}
            description={blog?.description}
            tags={blog?.tags}
          />
        ))}
      </section>
    </>
  )
}
