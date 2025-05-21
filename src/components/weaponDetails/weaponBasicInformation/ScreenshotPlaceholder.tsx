import { ReactNode } from 'react';

interface ScreenshotPlaceholderProps {
  children: ReactNode
}

const ScreenshotPlaceholder = ({ children }: ScreenshotPlaceholderProps) => {
  return (
    <div
      className="w-100 h-50 bg-dark rounded-2xl
      flex justify-center items-center
      border-1 border-medium"
    >
      {children}
    </div>
  )
}

export default ScreenshotPlaceholder
