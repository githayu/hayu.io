'use client'

import React from 'react'

/** スプライトの元の高さ */
const MIKU_HEIGHT = 1000

/**
 * フラットデザインの初音ミク (CodePen「Hatsune Miku Flat」)
 * 枠の高さに合わせて縮小する
 * MARK: HatsuneMiku
 */
export function HatsuneMiku() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = React.useState(0)

  React.useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      setZoom(entry.contentRect.height / MIKU_HEIGHT)
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="c-hatsuneMiku-container" ref={ref} style={{ height: '100%' }}>
      <div className="c-hatsuneMiku" style={{ zoom }}>
        <div className="c-hatsuneMiku-headWrap">
          <div className="c-hatsuneMiku-eyelashes--left" />
          <div className="c-hatsuneMiku-eyelashes--right" />
          <div className="c-hatsuneMiku-eye--left" />
          <div className="c-hatsuneMiku-eye--right" />
          <div className="c-hatsuneMiku-mouth" />
          <div className="c-hatsuneMiku-hair--left" />
          <div className="c-hatsuneMiku-hair--right" />
        </div>

        <div className="c-hatsuneMiku-bodyWrap">
          <div className="c-hatsuneMiku-body" />
          <div className="c-hatsuneMiku-tie" />
          <div className="c-hatsuneMiku-arm--left" />
          <div className="c-hatsuneMiku-arm--right" />
          <div className="c-hatsuneMiku-foot--left" />
          <div className="c-hatsuneMiku-foot--right" />
        </div>
      </div>
    </div>
  )
}
