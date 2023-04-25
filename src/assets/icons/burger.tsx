import * as React from "react"

type Props = {
  pathD: string
}

const Burger: React.FC<Props> = ({pathD="M1 7h18M1 1h18M1 13h18"}) => (
  <svg
    width={20}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={pathD}
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Burger
