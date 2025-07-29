'use client'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  DESIGNS,
} from './data'
import IosShareIcon from '@mui/icons-material/IosShare';
import LaunchIcon from '@mui/icons-material/Launch';
import { Modals } from '@/components/ui/five'
import { PointerHighlight } from '@/components/ui/pointer-highlight'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVideoReady, setIsVideoReady] = useState(false)
  
  useEffect(() => {
    // Minimum loading duration of 1 second
    const minLoadingTimeout = setTimeout(() => {
      if (isVideoReady) {
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(minLoadingTimeout)
  }, [isVideoReady])

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="relative aspect-video w-full">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <Skeleton className="h-full w-full" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              onLoadedData={() => setIsVideoReady(true)}
              className="aspect-video w-full cursor-zoom-in rounded-xl"
            />
          </motion.div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'projects' | 'design'>('projects')

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
           I like creating Minimalistic sites and in free time I play guitar , game and gulp music . Links to all my socials below .
           <motion.span 
            initial={{ 
              backgroundSize: "0% 100%",
              opacity: 0
            }}
            animate={{ 
              backgroundSize: "100% 100%",
              opacity: 1
            }}
            whileHover={{ 
              scale: 1.02,
              filter: "blur(0.3px)",
              transition: { duration: 0.2 }
            }}
            transition={{ 
              duration: 0.7,
              backgroundSize: {
                delay: 0.3,
                duration: 0.7,
                ease: "easeInOut"
              },
              opacity: {
                duration: 0.2
              }
            }}
            className='ml-1 dark:text-black relative inline-block cursor-pointer'
            style={{
              background: "linear-gradient(to right, #bbf7d0 0%, #bbf7d0 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left"
            }}
           >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{ rotate: 0 }}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
            >
              Open to work
            </motion.span>
           </motion.span>
          </p>
        </div>
      </motion.section>
<div className='absolute -translate-y-20 flex items-center gap-4'>
      <motion.button
        initial={{ opacity: 0.8 }}
        whileHover={{ 
          opacity: 1,
          scale: 1.02,
          filter: "blur(0.3px)",
          transition: { duration: 0.2 }
        }}
        className="px-4 py-1 rounded-md text-sm font-medium 
          bg-zinc-100 dark:bg-zinc-800/80 
          text-zinc-800 dark:text-zinc-200          transition-colors"
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <motion.span
          initial={{ display: "inline-block" }}
          animate={{ rotate: 0 }}
          whileHover={{ 
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.5 }
          }}
        >
          Resume 📄
        </motion.span>
      </motion.button>

      <PointerHighlight
       rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
       pointerClassName="text-blue-500 h-3 w-3"
       containerClassName="inline-block mx-1"
      >
        <motion.span
          initial={{ opacity: 1 }}
          whileHover={{ 
            scale: 1.02,
            filter: "blur(0.3px)",
            transition: { duration: 0.2 }
          }}
          className='relative z-10 text-zinc-800 dark:text-zinc-100 cursor-pointer inline-block'
          onClick={() => { window.open('https://cal.com/waliilaw', '_blank', 'noopener,noreferrer') }}
        >
          <motion.span
            initial={{ display: "inline-block" }}
            animate={{ rotate: 0 }}
            whileHover={{ 
              rotate: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.5 }
            }}
          >
            Book a Meet
          </motion.span>
        </motion.span>
      </PointerHighlight>
</div>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex justify-center gap-8 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={cn(
              "text-lg font-medium relative",
              activeTab === 'projects' 
                ? "text-zinc-900 dark:text-zinc-50" 
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            )}
          >
            Projects
            {activeTab === 'projects' && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
                initial={false}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={cn(
              "text-lg font-medium relative",
              activeTab === 'design' 
                ? "text-zinc-900 dark:text-zinc-50" 
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            )}
          >
            Design
            {activeTab === 'design' && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
                initial={false}
              />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <ProjectVideo src={project.video} />
                  </div>
                  <div className="px-1">
                    <div className="flex items-center gap-3 mb-1">
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={project.link}
                        target="_blank"
                      >
                        {project.name}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                      {project.tag && (
                        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/30 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white cursor-pointer">
                          {project.tag}
                        </span>
                      )}
                    </div>
                    <p>
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4"
                        href={project.github}
                        target="_blank"
                      >
                        Github
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={project.link}
                        target="_blank"
                      >
                        View <LaunchIcon fontSize="small" />
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                    </p>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'design' && (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {DESIGNS.map((design) => (
                <motion.div
                  key={design.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <ProjectVideo src={design.video} />
                  </div>
                  <div className="px-1">
                    <div className="flex items-center gap-3 mb-1">
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={design.link}
                        target="_blank"
                      >
                        {design.name}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                      {design.tag && (
                        <span className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-600/20 dark:ring-purple-500/30 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white cursor-pointer">
                          {design.tag}
                        </span>
                      )}
                    </div>
                    {/* <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={design.link}
                      target="_blank"
                    >
                      View <LaunchIcon fontSize="small" />
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a> */}
                    <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
                      {design.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Stacks</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-normal dark:text-zinc-100">
                      {post.title}
                    </h4>
                    {post.icon && <post.icon className="text-zinc-500" />}
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
