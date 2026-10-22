import './SocialLinks.scss'
import { Icon } from '@iconify/react'
import Tooltip from '@mui/material/Tooltip'

const links = [
  {
    icon: 'mdi:pencil-box',
    id: 'blog',
    link: 'https://blog.hayu.io',
    screenName: 'Blog',
    target: '_self',
  },
  {
    icon: 'mdi:twitter',
    id: 'twitter',
    link: 'https://x.com/conohayu',
    screenName: 'Twitter',
    target: '_blank',
  },
  {
    icon: 'mdi:github',
    id: 'github',
    link: 'https://github.com/githayu',
    screenName: 'GitHub',
    target: '_blank',
  },
  {
    icon: 'simple-icons:niconico',
    id: 'niconico',
    link: 'http://www.nicovideo.jp/user/16418073',
    screenName: 'ニコニコ動画',
    target: '_blank',
  },
  {
    icon: 'simple-icons:pixiv',
    id: 'pixiv',
    link: 'https://pixiv.me/conohayu',
    screenName: 'Pixiv',
    target: '_blank',
  },
  {
    icon: 'mdi:language-css3',
    id: 'userstyles',
    link: 'https://userstyles.org/users/180922',
    screenName: 'UserStyles',
    target: '_blank',
  },
  {
    icon: 'fa6-brands:codepen',
    id: 'codepen',
    link: 'http://codepen.io/hayu/',
    screenName: 'CodePen',
    target: '_blank',
  },
]

export function SocialLinks() {
  return (
    <nav className="c-socialLinks">
      {links.map((link) => (
        <Tooltip enterDelay={100} key={link.link} placement="left" title={link.screenName}>
          <a className={`icon-${link.id}`} href={link.link} target={link.target}>
            <Icon icon={link.icon} />
          </a>
        </Tooltip>
      ))}
    </nav>
  )
}
