import { projects } from '@/lib/projects'
import type { Job } from '@/models/types'
import JobCard from './JobCard'
import { useState, type ChangeEvent, type ReactNode } from 'react'

export default function ProjectList(props: {children: ReactNode}) {
  const [projectsArray, setProjectsArray] = useState<Job[]>(projects)

  function debouncer() {
    let timerId: number
    return function (e: ChangeEvent<HTMLInputElement>) {
      const value = e.target.value
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        filterBlogs(value)
      }, 500)
    }
  }

  const filterBlogs = (param: string): void => {
    if (!param || typeof param !== 'string' || param === '') {
      setProjectsArray(projects)
      return
    }
    const searchParam = param.toLowerCase()
    const results = projectsArray.filter(
      (project) =>
        project.title.toLowerCase().includes(searchParam) ||
        project.description.toLowerCase().includes(searchParam) ||
        project.features?.includes(searchParam)
    )
    setProjectsArray(results)
  }

  return (
    <>
      <div className="w-full flex flex-wrap justify-between items-center my-4 sm:mb-0">
        {props.children}
        <div className="w-full sm:w-max h-11 px-4 flex justify-between items-center gap-4 rounded-full border-purple-300 text-purple-300 bg-purple-950/50 border-2">
          <input
            type="search"
            name="param"
            placeholder="Search"
            onChange={debouncer()}
            className="border-0 outline-none text-purple-300 placeholder:text-purple-300 bg-transparent"
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
      <section className="flex flex-wrap justify-between gap-5 md:my-10 w-">
        {projectsArray.map((project) => (
          <JobCard
          key={project.id}
          id={project.id}
          imgUrl={project.imgUrl}
          imgDescription={project.imgDescription}
          title={project.title}
          description={project.description}
          features={project.features}
          classList="w-full md:w-72 lg:w-64 xl:w-80 mb-4"
        />
        ))}
      </section>
    </>
  )
}
