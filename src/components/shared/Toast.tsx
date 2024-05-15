import type { Toast } from '@/models/types'

export default function Toast(props?: Toast) {
  const titles = {
    success: 'Success',
    warn: 'Be Warnned',
    alert: 'Alert',
  }

  const title = titles[props?.type || 'success']

  return (
    <div
      className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4 aboslute top-5 right-1/2"
      role="alert">
      <p className="font-bold">{title}</p>
      <p>{props?.message}</p>
    </div>
  )
}
