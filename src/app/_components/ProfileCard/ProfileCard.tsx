import './ProfileCard.scss'
import { Icon } from '@iconify/react'
import Button from '@mui/material/Button'
import { ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx'
import { useAtom, useSetAtom } from 'jotai'
import React from 'react'

import { profileTheme } from '@/theme'

import { particlesAtom, SocialLinks } from '..'
import { hashAtom } from '../../_atoms'

const constant = {
  birthday: '1995.12.26',
  comment: 'Web制作が好きです。',
  likes: [
    'Web Design',
    'JavaScript',
    'Motion Graphics',
    'ニコニコ動画',
    'アニメ',
    'ミクさん',
    '音楽',
    'お絵かき',
  ],
  location: 'Saitama, Japan',
  name: 'Hayu',
}

export function ProfileCard() {
  const [hash, setHash] = useAtom(hashAtom)
  const setParticles = useSetAtom(particlesAtom)
  const [isAnimation] = React.useState(!hash)

  return (
    <ThemeProvider theme={profileTheme}>
      <div
        className={clsx('c-profileCard', {
          'c-profileCard--anime': isAnimation,
          'is-aboutMe': hash === '#about-me',
        })}
      >
        <div
          className="c-profileCard-main"
          onAnimationEnd={(e) => {
            if (
              e.target instanceof HTMLButtonElement &&
              e.target.classList.contains('c-profileCard-aboutMeButton')
            ) {
              setParticles(true)
            }
          }}
        >
          <div className="c-profileCard-cover" />
          <div className="c-profileCard-avatar" />
          <div className="c-profileCard-content">
            <h1 className="c-profileCard-name">{constant.name}</h1>

            <ul className="c-profileCard-meta">
              <li className="c-profileCard-location">
                <Icon icon="mdi:map-marker" />
                {constant.location}
              </li>
              <li className="c-profileCard-birthday">
                <Icon icon="mdi:cake-variant" />
                {constant.birthday}
              </li>
            </ul>

            <Button
              className="c-profileCard-aboutMeButton"
              onClick={() => {
                setHash(hash ? '' : 'about-me')
              }}
              sx={{ borderRadius: '28px', height: 36, px: 2 }}
            >
              {hash === '#about-me' ? 'Close' : 'About me'}
            </Button>
          </div>
        </div>

        <div className="c-profileCard-detail">
          <div className="c-profileCard-detailSections">
            <section>
              <h2>About me</h2>
              <p className="c-profileCard-comment">{constant.comment}</p>
            </section>

            <section>
              <h2>Likes</h2>
              <ul className="c-profileCard-likes">
                {constant.likes.map((like, i) => (
                  <li key={i}>{like}</li>
                ))}
              </ul>
            </section>
          </div>

          <SocialLinks />
        </div>
      </div>
    </ThemeProvider>
  )
}
