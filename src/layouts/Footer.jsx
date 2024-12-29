import { useRef } from "react"
import useSize from "../hooks/useSize"

export default function Footer() {
    const sizeRef = useRef()
    const { width, height } = useSize(sizeRef)
    return (
        <footer ref={sizeRef} className="container">
            <h2 >width: {Math.floor(width)}px, height: {Math.floor(height)}px</h2>
        </footer>
    )
}