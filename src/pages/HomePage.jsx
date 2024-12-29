import { useRef } from "react"
import useSize from "../hooks/useSize"

export default function HomePage() {
  const sizeRef = useRef()
  const { width, height } = useSize(sizeRef)

  return (
    <div ref={sizeRef} className="home-container container">
      <h2 >width: {Math.floor(width)}px, height: {Math.floor(height)}px</h2>
    </div>
  )
}
