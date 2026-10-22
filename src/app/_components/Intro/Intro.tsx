'use client'

import type { Engine } from '@tsparticles/engine'

import './Intro.scss'
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import clsx from 'clsx'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import React from 'react'

import { ProfileCard } from '..'
import { hashAtom } from '../../_atoms'
import { config } from './particles-config'

export const particlesAtom = atom(false)

/**
 * tsParticlesのエンジンにslimのプラグインを読み込む
 * MARK: initParticles
 */
async function initParticles(engine: Engine) {
  await loadSlim(engine)
}

export function Intro() {
  const particles = useAtomValue(particlesAtom)
  const hash = useAtomValue(hashAtom)

  return (
    <div
      className={clsx('p-intro', {
        'p-intro--particles': particles,
        'page--aboutMe': hash === '#about-me',
        'page--home': !hash,
      })}
      id="intro"
    >
      <ParticlesProvider init={initParticles}>
        <IntroParticles />
      </ParticlesProvider>

      <ProfileCard />

      <button
        aria-label="Scroll down"
        className="p-intro-scrollDown"
        onClick={() => {
          document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
        }}
        type="button"
      />
    </div>
  )
}

/**
 * エンジンの読み込み後にパーティクルを描画する
 * MARK: IntroParticles
 */
function IntroParticles() {
  const { loaded } = useParticlesProvider()
  const setParticles = useSetAtom(particlesAtom)

  React.useEffect(() => {
    if (loaded) setParticles(true)
  }, [loaded])

  return <Particles options={config} />
}
