import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  tag: string
  title: string
  light?: boolean
}

export default function SectionHeader({ tag, title, light = false }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className="mb-10 text-center">
        <span className={`text-sm font-medium tracking-[0.2em] uppercase ${
          light ? 'text-forest-500' : 'text-forest-600'
        }`}>
          {tag}
        </span>
        <h2 className={`mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl ${
          light ? 'text-cream' : 'text-forest-900'
        }`}>
          {title}
        </h2>
      </div>
    </ScrollReveal>
  )
}
