import { useState } from 'react'

export default function ContactSection() {
  const [isCopying, setIsCopying] = useState(false)
  const email = 'arman2p284@gmail.com'

  const handleEmailClick = () => {
    const subject = 'Job offer!'

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`

    window.location.href = mailtoLink
  }

  const handleCopyClick = () => {
    setIsCopying(true)
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTimeout(() => {
          setIsCopying(false)
        }, 600)
        // alert('Email address copied to clipboard!')
      })
      .catch((error) => {
        setIsCopying(false)
        console.error('Error copying email address:', error)
      })
  }

  return (
    <section className="w-auto flex items-center justify-center">
      <div className="w-auto h-11 border border-slate-400/50 bg-purple-950 rounded-md flex items-center gap-4 px-4 text-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-mailbox">
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
          <path d="M12 11v-8h4l2 2l-2 2h-4" />
          <path d="M6 15h1" />
        </svg>
        <span>arman2p284@gmail.com</span>
      </div>
      <button
        className="w-11 h-11 text-yellow-500 transition-colors ease-in-out duration-300 flex items-center justify-center gap-1 border-yellow-500/50 hover:border-yellow-500 active:bg-green-50 active:ring-2 active:ring-green-500/50 border-2 rounded-md"
        onClick={handleCopyClick}>
        {isCopying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check text-green-500">
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
            <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
            <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
            <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
            <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
            <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
            <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
            <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        )}
      </button>
      <button
        className="w-11 h-11 bg-yellow-500 text-slate-700 font-semibold transition-colors ease-in-out duration-300 hover:bg-yellow-700 hover:text-slate-50 active:bg-slate-50 active:ring-2 active:ring-slate-50 flex justify-center items-center gap-1 border-yellow-500 border-2 rounded-md"
        onClick={handleEmailClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-send">
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M10 14l11 -11" />
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
        </svg>
      </button>
    </section>
  )
}
