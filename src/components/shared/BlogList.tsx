import { blogs } from "@/lib/blogs";
import { useState, type ChangeEvent, type ReactNode } from "react";
import BlogCard from "./BlogCard";

type MyBlogComponent = {
  children?: ReactNode
}

export default function BlogList(props: MyBlogComponent) {
  const [blogsArray, setBlogsArray] = useState(blogs)


  function debouncer() {
    let timerid: number
    return function (e: ChangeEvent<HTMLInputElement>) {
      const value = e.target.value
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        filterBlogs(value)
      }, 500);
    }
  }

  const filterBlogs = (param: string): void => {
    if (!param || typeof param !== 'string' || param === '') {
      setBlogsArray(blogs)
      return
    }
    const searchParam = param.toLowerCase()
    const arr = blogsArray.filter(b => b.title.toLowerCase().includes(searchParam) || b.description.toLowerCase().includes(searchParam))
    // TODO: Include tags search
    setBlogsArray(arr)
  }


  return (
    <>
      <div className="w-full flex flex-wrap justify-between items-center mb-5 sm:mb-0">
        {props.children}
        <div className="w-max h-11 px-4 flex justify-between items-center gap-4 rounded-full border-slate-400 border-2">
          <input type="search" name="param" placeholder="Search" onChange={debouncer()} className="border-0 bg-transparent outline-none" />
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </div>
      </div>
      <section className="flex flex-col gap-5">
        {
          blogsArray.map((blog) => (
            <BlogCard
              key={blog.slug}
              slug={blog.slug}
              title={blog.title}
              imgUrl={blog.imgUrl}
              imgDescription={blog.imgDescription}
              description={blog.description}
            />
          ))
        }
      </section>
    </>
  )
}