import './SocialLinks.scss'
import { Icon, type IconifyIcon } from '@iconify/react'
import Tooltip from '@mui/material/Tooltip'

/** Mikumoのロゴ (mikumo.ioのicon.svgを単色にしたもの) */
const mikumoIcon: IconifyIcon = {
  body: '<g fill="currentColor"><rect x="14" y="10" width="17" height="8" rx="4"/><rect x="9" y="20" width="33" height="8" rx="4"/><rect x="6" y="30" width="31" height="8" rx="4"/></g>',
  height: 48,
  width: 48,
}

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
  {
    icon: mikumoIcon,
    id: 'mikumo',
    link: 'https://mikumo.io/',
    screenName: 'Mikumo',
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
