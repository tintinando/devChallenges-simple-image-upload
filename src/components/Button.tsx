import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`flex flex-row items-center gap-1 text-xs font-medium px-6 py-2 bg-progress rounded-md ${props.className}`}
    >
      {children}
    </button>
  )
}