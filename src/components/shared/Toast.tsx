import type { ToastType } from '@/models/types'
import { useState, useEffect } from 'react'

export default function Toast({
  type,
  message,
  onHide,
}: {
  type: ToastType
  message: string
  onHide: () => void
}) {
  const titles = {
    success: 'Success',
    warn: 'Be Warnned',
    alert: 'Alert',
  }

  const colors = {
    success: 'bg-green-200 border-green-600 text-green-600',
    warn: 'bg-yellow-200 border-yellow-600 text-yellow-600',
    alert: 'bg-red-200 border-red-600 text-red-600',
  }

  const title = titles[type || 'success']
  const style = colors[type || 'success']

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onHide()
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [onHide])

  return (
    <div
      className={`w-64 ${style} border-l-4 rounded-md p-2 fixed top-5 right-5 z-50 duration-500 animate-pulse text-xs
      ${visible ? 'visible' : 'hidden'} 
      `}
      role="alert">
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  )
}
