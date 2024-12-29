import { useRef } from "react"
import useSize from "../hooks/useSize"

export default function Aside() {
    const sizeRef = useRef()
    const { width, height } = useSize(sizeRef)
    return (
        <aside ref={sizeRef} className="container">
            <h2 >width: {Math.floor(width)}px</h2>
            <h2 >height: {Math.floor(height)}px</h2>
        </aside>
    )
}