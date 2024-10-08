import { useState, useEffect } from 'react'
import '@/styles/navbar.css'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const NavLink = ({ text, url }: { text: string; url: string }) => (
    <li className={'flex items-center'}>
      <a
        href={`${url}`}
        className={`w-full block py-2 px-3 text-purple-300 rounded transition-colors ease-in-out hover:bg-purple-900/30 lg:hover:bg-transparent lg:hover:text-yellow-500 lg:p-0 focus:ring-yellow-500`}>
        {text}
      </a>
    </li>
  )

  const ExpDropdown = () => (
    <div
      className={`z-10 bg-purple-950 rounded-lg drop-shadow-lg w-fit lg:w-44 p-2 lg:p-5 lg:absolute top-6 lg:hidden lg:group-hover:block`}
    >
      <ul
        className="space-y-1 lg:space-y-3 text-sm">
        <NavLink
          text="Work"
          url="/#work-experience"
        />
        <NavLink
          text="Featured Projects"
          url="/#personal-projects"
        />
        <NavLink
          text="Technologies"
          url="/#technologies"
        />
      </ul>
    </div>
  )

  return (
    <nav className="sticky top-0 z-50 bg-purple-950 shadow-md w-full h-auto nav-scroll">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse ease-in-out transition-colors fill-yellow-50"
          aria-label="Armando Dev. home page.">
          <svg
            width="484.25000000000006"
            height="101.92953342059133"
            viewBox="0 0 370.18518518518516 77.9200892207354"
            className="css-1j8o68f w-44 max-h-8 main-icon">
            <defs id="SvgjsDefs2211"></defs>
            <g
              id="SvgjsG2212"
              transform="matrix(0.7920075685449823,0,0,0.7920075685449823,-7.192925700805121,-0.6399410518976204)">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M90.918,37.826c0-20.412-16.607-37.018-37.02-37.018c-20.27,0-36.788,16.379-37.014,36.597L9.247,55.031   c-0.268,0.617-0.207,1.328,0.163,1.893c0.37,0.562,0.998,0.902,1.672,0.902h5.801v25.055c0,5.049,4.107,9.156,9.155,9.156h13.144   h0.037h7.655c5.196,0,9.422-4.227,9.422-9.422V46.594c2.544-0.842,4.386-3.239,4.386-6.062c0-2.823-1.842-5.219-4.386-6.062v-8.821   c2.544-0.842,4.386-3.239,4.386-6.062c0-3.521-2.863-6.387-6.386-6.387s-6.389,2.865-6.389,6.387c0,2.823,1.844,5.22,4.389,6.062   v8.821c-2.545,0.841-4.389,3.239-4.389,6.062c0,2.823,1.844,5.221,4.389,6.062v36.021c0,2.988-2.432,5.422-5.422,5.422h-7.655   h-0.037H26.038c-2.842,0-5.154-2.312-5.154-5.156V55.826c0-1.104-0.896-2-2-2H14.13l6.589-15.205   c0.109-0.251,0.166-0.522,0.166-0.795c0-18.206,14.811-33.018,33.015-33.018c18.207,0,33.02,14.812,33.02,33.018   c0,8.033-2.918,15.76-8.213,21.783c-0.039,0.037-0.083,0.066-0.12,0.106c-5.075,5.562-7.869,12.771-7.869,20.302v17.174   c0,1.104,0.896,2,2,2s2-0.896,2-2V80.02c0-6.469,2.38-12.66,6.698-17.463c0.053-0.048,0.109-0.09,0.158-0.145   C87.6,55.635,90.918,46.903,90.918,37.826z M54.296,17.201c1.315,0,2.386,1.071,2.386,2.387s-1.07,2.387-2.386,2.387   c-1.317,0-2.39-1.071-2.39-2.387C51.906,18.271,52.979,17.201,54.296,17.201z M54.296,38.146c1.315,0,2.386,1.071,2.386,2.387   c0,1.316-1.07,2.387-2.386,2.387c-1.317,0-2.39-1.071-2.39-2.387C51.906,39.216,52.979,38.146,54.296,38.146z"></path>
                <path d="M48.93,30.06c0-3.522-2.866-6.388-6.389-6.388s-6.389,2.866-6.389,6.388c0,2.823,1.844,5.22,4.389,6.062v10.034   c0,1.112,0.264,2.223,0.762,3.217l5.419,10.793c0.221,0.439,0.337,0.93,0.337,1.42v21.646c0,1.104,0.896,2,2,2c1.105,0,2-0.896,2-2   V61.586c0-1.111-0.263-2.223-0.762-3.215l-5.418-10.793c-0.22-0.438-0.337-0.931-0.337-1.422V36.122   C47.086,35.28,48.93,32.883,48.93,30.06z M42.542,27.672c1.316,0,2.389,1.071,2.389,2.388c0,1.316-1.072,2.387-2.389,2.387   s-2.389-1.071-2.389-2.387C40.153,28.743,41.225,27.672,42.542,27.672z"></path>
                <path d="M72.438,30.06c0-3.522-2.865-6.388-6.389-6.388s-6.389,2.866-6.389,6.388c0,2.823,1.844,5.22,4.389,6.062v10.034   c0,0.492-0.117,0.984-0.337,1.422l-5.418,10.791c-0.499,0.994-0.763,2.105-0.763,3.217v21.646c0,1.104,0.896,2,2,2s2-0.896,2-2   V61.586c0-0.49,0.115-0.98,0.337-1.42l5.419-10.794c0.498-0.993,0.762-2.104,0.762-3.216V36.122   C70.594,35.28,72.438,32.883,72.438,30.06z M66.049,32.447c-1.316,0-2.389-1.071-2.389-2.387c0-1.317,1.072-2.388,2.389-2.388   c1.317,0,2.389,1.071,2.389,2.388C68.438,31.376,67.365,32.447,66.049,32.447z"></path>
              </g>
            </g>
            <g
              id="SvgjsG2213"
              transform="matrix(1.65843902099701,0,0,1.65843902099701,84.27028752667002,-3.3705635265284)">
              <path d="M11.36 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M7.88 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M31.560000000000002 40 l-4.48 0 c-0.24 -0.72 -0.4 -1.16 -0.4 -3.44 l0 -4.4 c0 -2.6 -0.88 -3.56 -2.88 -3.56 l-1.52 0 l0 11.4 l-4.4 0 l0 -28 l6.64 0 c4.56 0 6.52 2.12 6.52 6.44 l0 2.2 c0 2.88 -0.92 4.72 -2.88 5.64 l0 0.08 c2.2 0.92 2.92 3 2.92 5.92 l0 4.32 c0 1.36 0.04 2.36 0.48 3.4 z M24.4 16 l-2.12 0 l0 8.6 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -2.76 c0 -2 -0.68 -2.88 -2.24 -2.88 z M40.04 12 l3.2 19.88 l0.08 0 l2.96 -19.88 l6.12 0 l0 28 l-4.16 0 l0 -20.08 l-0.08 0 l-2.96 20.08 l-4.16 0 l-3.2 -19.8 l-0.08 0 l0 19.8 l-3.84 0 l0 -28 l6.12 0 z M65.36 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M61.88 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M81.28 40 l-5.4 -20.28 l-0.08 0 l0 20.28 l-3.96 0 l0 -28 l5.52 0 l4.44 16.76 l0.08 0 l0 -16.76 l3.92 0 l0 28 l-4.52 0 z M88.96 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M95.84 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M109.32000000000001 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M104.92 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M127.32000000000001 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M134.20000000000002 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M148.04000000000002 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M161.64000000000001 12 l3.32 22.84 l0.08 0 l3.32 -22.84 l4.04 0 l-4.32 28 l-6.56 0 l-4.32 -28 l4.44 0 z"></path>
            </g>
          </svg>
        </a>
        <button
          onClick={() => setShowMenu(!showMenu)}
          type="button"
          className={`btn-burger ${showMenu ? 'open' : ''
            } p-2 w-10 h-10 flex flex-col items-center justify-center gap-2 text-sm text-slate-400 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-slate-400  `}
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <span className="burger-line border-slate-300 border-b w-full "></span>
          <span className="burger-line border-slate-300 border-b w-full "></span>
          <span className="burger-line border-slate-300 border-b w-full "></span>
        </button>
        <div
          className={`${showMenu ? '' : 'hidden'
            } w-full lg:block lg:w-auto transition-all ease-out duration-300`}>
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0">
            <NavLink
              text="About"
              url="/#about-me"
            />
            <li className={'flex flex-col justify-center items-start relative group'}>
              <span
                className="flex items-center py-2 px-3 text-purple-300 rounded transition-colors ease-in-out hover:bg-purple-900/30 lg:hover:bg-transparent lg:hover:text-yellow-500 lg:p-0 focus:ring-yellow-500"
              >
                Experience
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </span>
              <ExpDropdown />
            </li>
            <NavLink
              text="Testimonies"
              url="/#testimonies"
            />
            <NavLink
              text="Featured Posts"
              url="/#featured-posts"
            />
          </ul>
        </div>
        <div
          className={`${showMenu ? '' : 'hidden'
            } w-full lg:block lg:w-auto transition-all ease-out duration-300`}>
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0">
            <NavLink
              text="Projects"
              url="/projects"
            />
            <NavLink
              text="Blog"
              url="/blog"
            />
            <li>
              <a
                href="/#contact"
                className="w-28 h-8 bg-yellow-500 text-purple-950 font-semibold transition-colors ease-in-out duration-300 hover:bg-yellow-700 hover:text-purple-50 active:bg-purple-300 active:ring-2 active:ring-purple-300 flex justify-center items-center gap-1 border-yellow-500 border-2 rounded-md">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
