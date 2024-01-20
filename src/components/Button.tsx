import React from "react"
import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-white rounded-lg py-1 px-3 text-black font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
