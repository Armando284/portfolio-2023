import { useState } from "react"

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    console.log('handle download');

    try {
      setIsDownloading(true);

      const response = await fetch('Armando_Peña_CV_2023.pdf');
      if (!response.ok) {
        throw new Error('Error al descargar el archivo');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);


      const link = document.createElement('a');
      link.href = url;
      link.download = 'Armando_Peña_CV_2023';
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        setIsDownloading(false);
      }, 300);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      setIsDownloading(false);
    }
  };


  return (
    <button onClick={handleDownload}
      disabled={isDownloading}
      className="w-48 h-11 px-4 text-yellow-500 transition-colors ease-in-out duration-300 flex items-center justify-center gap-1 border-yellow-500/50 hover:border-yellow-500 active:bg-slate-50 active:ring-2 active:ring-slate-50 border-2 rounded-md">
      {isDownloading ? 'Downloading ...' : 'Download CV'}
    </button>
  )
}