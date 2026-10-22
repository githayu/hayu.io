'use client'

import React from 'react'
import { createPortal } from 'react-dom'

import styles from './DemoStage.module.scss'

type DemoStageProps = React.PropsWithChildren<{
  /** 背景色 */
  background: string
  /** 再生し直すボタンを出すか */
  replayable?: boolean
  /** デモのCSSのURL */
  stylesheet: string
}>

/** シャドウルート内の基本スタイル (継承されるページのスタイルを初期値に戻し、CodePenのbodyを再現する) */
const baseStyle = /*css*/ `
  :host {
    all: initial;
  }

  .body {
    position: absolute;
    inset: 0;
  }
`

/** CodePenのペンの設定で読み込んでいたnormalize.css */
const NORMALIZE_CSS = '/works/demos/normalize.css'

/**
 * 制作物のデモを描画する16:9の枠
 * ページのスタイルが入り込まないようにShadow DOMの中に描画する
 * 画面に入ってから中身を描画し、アニメーションを最初から見られるようにする
 * MARK: DemoStage
 */
export function DemoStage({ background, children, replayable, stylesheet }: DemoStageProps) {
  const hostRef = React.useRef<HTMLDivElement>(null)
  const [shadowRoot, setShadowRoot] = React.useState<ShadowRoot | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [loadedCount, setLoadedCount] = React.useState(0)
  const [playCount, setPlayCount] = React.useState(0)

  React.useEffect(() => {
    const host = hostRef.current

    if (!host) return

    setShadowRoot(host.shadowRoot ?? host.attachShadow({ mode: 'open' }))

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      setIsVisible(true)
      observer.disconnect()
    })

    observer.observe(host)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.stage} style={{ background }}>
      <div className={styles.host} ref={hostRef} />

      {shadowRoot &&
        isVisible &&
        createPortal(
          <>
            <style>{baseStyle}</style>
            {[NORMALIZE_CSS, stylesheet].map((href) => (
              <link
                href={href}
                key={href}
                onLoad={() => setLoadedCount((count) => count + 1)}
                rel="stylesheet"
              />
            ))}

            {loadedCount >= 2 && (
              <div className="body" key={playCount}>
                {children}
              </div>
            )}
          </>,
          shadowRoot
        )}

      {replayable && (
        <button
          className={styles.replay}
          onClick={() => setPlayCount((count) => count + 1)}
          type="button"
        >
          Replay
        </button>
      )}
    </div>
  )
}
