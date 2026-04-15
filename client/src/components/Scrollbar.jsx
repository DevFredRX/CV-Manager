import { useEffect, useRef, useState } from 'react'

import 'src/assets/styles/scrollbar.css'

export default function Scrollbar({ variant }) {

    const trackRef = useRef(null)
    const [target, setTarget] = useState(null)

    useEffect(() => {
        if (variant === 'contained') setTarget(trackRef.current?.parentElement)
        else setTarget(window)
    }, [variant])

    const handleDrag = (e) => {
        if (!trackRef.current || !target) return
        const track = trackRef.current
        const rect = track.getBoundingClientRect()
        let percentage = (e.clientY - rect.top) / rect.height
        percentage = Math.max(0, Math.min(1, percentage))
        if (variant === 'contained') {
            const scrollMax = target.scrollHeight - target.clientHeight
            target.scrollTop = percentage * scrollMax
        } else {
            const scrollMax = document.documentElement.scrollHeight - window.innerHeight
            window.scrollTo({ top: percentage * scrollMax, behavior: 'auto' })
        }
    }

    const handleMouse = (e) => {
        handleDrag(e)
        const moveListener = (e) => handleDrag(e)
        const upListener = () => {
            document.removeEventListener('mousemove', moveListener)
            document.removeEventListener('mouseup', upListener)
            document.body.style.userSelect = ''
        }
        document.addEventListener('mousemove', moveListener)
        document.addEventListener('mouseup', upListener)
        document.body.style.userSelect = 'none'
    }

    return (

        <div className={`scrollbar scrollbar-${variant}`} ref={trackRef} onMouseDown={handleMouse}>
            <div className="scrollbar-track">
                <div className="scrollbar-thumb"></div>
            </div>
        </div>

    )
    
}