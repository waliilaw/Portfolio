'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MorphingDialog } from '@/components/ui/morphing-dialog'

export function Header() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src={"/wali.png"}
          width={100}
          height={100}
          alt='pfp'
          className='rounded-xl mb-2 opacity-85'
        />
      </motion.div>
      <header className="mb-8 flex flex-row">
        <div>
        <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-black  dark:text-white font-medium "
            delay={0.1}
          >
            Wali
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Web2 & Web3 Developer
          </TextEffect>
        </div>
      </header>
    </div>
  )
}
