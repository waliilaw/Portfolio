import AodIcon from '@mui/icons-material/Aod';
import SourceIcon from '@mui/icons-material/Source';
import CodeIcon from '@mui/icons-material/Code';

type Project = {
  name: string
  github : string
  description: string
  link: string
  video: string
  id: string
  tag?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  icon?: React.ElementType
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'FLux AO',
    github:'https://github.com/waliilaw/Flux' , 
    description:
      'AI Based MCP tool for Arweave and AO ecosystem',
    link: 'https://useflux.ar.io',
    video:
      '/flux.mp4',
    id: 'project1',
    tag: '$5000 Grant Recipient'
  },
  {
    name: 'ArBet',
    github:'https://github.com/waliilaw/ArBet' , 
    description: 'Interactive 2D game with ingame web3 contracts with lua',
    link: 'https://arbet.waliilaw.me',
    video:
      '/arbet.mp4',
    id: 'project2',
  },
  {
    name : 'Miku-san',
    github:'https://github.com/waliilaw/miku-san-PRIVATE',
    description:'Personal Portfolio creation and built in editor',
    link: 'https://miku-san.waliilaw.me',
    video :'/miku.mp4',
    id: 'project3'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Community',
    title: 'Web3 Developer',
    start: '2025',
    end: 'Present',
    link: 'https://waliilaw.me',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'React Native Dev',
    start: "Jan",
    end: "Mar",
    link: 'https://waliilaw.me',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Fullstack Developer',
    start: '2024',
    end: 'Present',
    link: 'https://waliilaw.me',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Frontend',
    description: 'React , Nextjs , TailwindCSS , Native',
    link: '/',
    uid: 'blog-1',
    icon: AodIcon
  },
  {
    title: 'Backend',
    description:
      'Nodejs , Express , PostgresSQL , MongoDB , Prisma',
    link: '/',
    uid: 'blog-2',
    icon: SourceIcon
  },
  {
    title: 'Languages',
    description:
      'Javascript , Typescript , Solidity , SQL , Rust ',
    link: '/',
    uid: 'blog-3',
    icon: CodeIcon
  },

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/waliilaw',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/waliilaww',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/humaidwali20',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/waliilaww',
  },
]

export const EMAIL = 'humaidwali20@gmail.com'
