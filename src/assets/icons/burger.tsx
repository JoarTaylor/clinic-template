import * as React from "react"

const Burger = (props: any) => (
  <svg
    width={20}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 7h18M1 1h18M1 13h18"
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Burger
