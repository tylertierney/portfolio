import './TechStackIcon.css'
import {
  amazonS3Icon,
  angularIcon,
  auth0Icon,
  chakraIcon,
  emailIcon,
  firebaseIcon,
  githubActionsIcon,
  herokuIcon,
  mongoDbIcon,
  netlifyIcon,
  nextJsIcon,
  nodeIcon,
  reactIcon,
  socketIoIcon,
  storybookIcon,
} from '../../../../icons/icons'
import { useState } from 'react'

export type iconKey =
  | 'React'
  | 'Node JS'
  | 'Heroku'
  | 'Socket.IO'
  | 'Netlify'
  | 'Chakra UI'
  | 'Firebase'
  | 'Next.js'
  | 'MongoDB'
  | 'Auth0'
  | 'Angular'
  | 'Netlify Identity'
  | 'Amazon S3'
  | 'SendGrid'
  | 'Vite'
  | 'Github Actions'
  | 'Storybook'

const techStackIcons = new Map<iconKey, { icon: JSX.Element; color: string }>([
  ['React', { icon: reactIcon, color: '#61dafb' }],
  ['Node JS', { icon: nodeIcon, color: '#73aa63' }],
  ['Heroku', { icon: herokuIcon, color: '#79589f' }],
  ['Socket.IO', { icon: socketIoIcon, color: 'silver' }],
  ['Netlify', { icon: netlifyIcon, color: '#74bece' }],
  ['Chakra UI', { icon: chakraIcon, color: '#4dc8c3' }],
  ['Firebase', { icon: firebaseIcon, color: '#ffcb2d' }],
  ['Next.js', { icon: nextJsIcon, color: 'purple' }],
  ['MongoDB', { icon: mongoDbIcon, color: '#12aa52' }],
  ['Auth0', { icon: auth0Icon, color: '#eb5423' }],
  ['Angular', { icon: angularIcon, color: '#dd0031' }],
  ['Netlify Identity', { icon: netlifyIcon, color: '#74bece' }],
  ['Amazon S3', { icon: amazonS3Icon, color: '#e08b2d' }],
  ['SendGrid', { icon: emailIcon, color: '#61dafb' }],
  ['Github Actions', { icon: githubActionsIcon, color: 'green' }],
  ['Storybook', { icon: storybookIcon, color: 'pink' }],
])

interface TechStackIconProps {
  name: iconKey
}

export default function TechStackIcon({ name }: TechStackIconProps) {
  const icon = techStackIcons.get(name)?.icon ?? reactIcon

  const [color, setColor] = useState('var(--text)')

  const hoverColor = techStackIcons.get(name)?.color ?? 'var(--text)'

  return (
    <div
      onMouseEnter={() => setColor(hoverColor)}
      onMouseLeave={() => setColor('var(--text)')}
      style={{ color }}
      className="techStackIcon"
    >
      <div className="icon">{icon}</div>
      <span className="name">{name}</span>
    </div>
  )
}
