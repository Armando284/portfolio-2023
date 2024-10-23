import { useState } from 'react'

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      const response = await fetch('Cv-NTSprint-Armando-P.pdf')
      if (!response.ok) {
        throw new Error('Error al descargar el archivo')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = 'Cv-NTSprint-Armando-P'
      document.body.appendChild(link)
      link.click()

      setTimeout(() => {
        setIsDownloading(false)
      }, 1000)
    } catch (error) {
      console.error('Error al descargar el archivo:', error)
      setIsDownloading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="w-52 h-11 text-purple-300 backdrop-blur-md border-2 border-purple-300/50 rounded-md transition-colors ease-in-out duration-600 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500">
      Get my
      {isDownloading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 icon icon-tabler icons-tabler-outline icon-tabler-loader animate-spin">
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M12 6l0 -3" />
          <path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12l3 0" />
          <path d="M16.25 16.25l2.15 2.15" />
          <path d="M12 18l0 3" />
          <path d="M7.75 16.25l-2.15 2.15" />
          <path d="M6 12l-3 0" />
          <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 icon icon-tabler icons-tabler-outline icon-tabler-file-cv">
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
          <path d="M13 11l1.5 6l1.5 -6" />
        </svg>
      )}
    </button>
  )
}
