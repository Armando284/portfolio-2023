import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const articles = document.querySelectorAll('article')

      articles.forEach((article) => {
        const articleTop = article.offsetTop
        const articleHeight = article.offsetHeight
        const scrollPosition = window.scrollY
        const vHeight = window.innerHeight

        if (
          scrollPosition >= articleTop - vHeight / 2 &&
          scrollPosition < articleTop + articleHeight - vHeight / 2 &&
          activeLink !== article.id
        ) {
          setActiveLink(article.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const NavLink = ({ text, url }: { text: string, url: string }) => (
    <li >
      <a
        href={`/${url}`}
        onClick={() => setActiveLink(url)}
        className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-purple-500 hover:border-purple-500 transition-colors duration-300 ${`#${activeLink}` === url ? 'bg-purple-100/80 text-purple-700 border-purple-700' : ''}`}>
        {text}
      </a>
    </li >
  )

  return (
    <nav
      className="text-sm font-medium text-center text-slate-700 border-b border-slate-200 flex justify-center fixed top-0 w-full bg-white bg-opacity-70 backdrop-blur-xl z-50  tracking-widest">
      <ul className="flex flex-wrap -mb-px space-x-2">
        <li>
          <a
            href="/#top"
            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-purple-700 hover:border-purple-700 text-purple-700 uppercase">
            Home
          </a>
        </li>
        <NavLink text="Technologies" url="#technologies" />
        <NavLink text="Work Experience" url="#work-experience" />
        <NavLink text="Personal Projects" url="#personal-projects" />
        <NavLink text="Blog Latest" url="#blog-latest" />
        <NavLink text="About Me" url="#about-me" />
      </ul>
    </nav>)
}