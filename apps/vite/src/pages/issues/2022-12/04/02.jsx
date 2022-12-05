import React from 'react'

export default function App() {
  return <ArrowUp />
}

const ArrowUp = () => {
  return (
    <svg
      className="w-6 h-6 fill-current text-primary rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm-2 10V6h4v6h3l-5 5-5-5h3z" />
    </svg>
  )
}
