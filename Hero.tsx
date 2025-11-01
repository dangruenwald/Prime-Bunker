
import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  image?: string
  day?: boolean
  children?: ReactNode
}

export default function Hero({ title, subtitle, image='/og-day.jpg', children }: Props) {
  return (
    <section className="relative">
      <div className="h-[46vh] min-h-[340px] w-full overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 hero-overlay-day dark:hero-overlay" />
      <div className="section -mt-40 relative">
        <div className="bg-white/85 dark:bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/10 dark:border-white/10">
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 max-w-3xl opacity-90">{subtitle}</p>}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}
