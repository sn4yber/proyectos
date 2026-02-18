import { memo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export interface Project {
  id: string
  category: string
  title: string
  description: string
  characteristics: string
  image?: string
  codeImage?: string
  features: string[]
  technologies: string[]
  links: {
    github: string
    demo: string
  }
  video?: string
  status: string
}

interface ProjectCard3DProps {
  project: Project
  index: number
}

export const ProjectCard3D = memo(({ project, index }: ProjectCard3DProps) => {
  const previewSrc = project.video || project.image
  const topFeatures = project.features.slice(0, 3)
  const topTechnologies = project.technologies.slice(0, 5)

  return (
    <motion.div
      className={`grid items-stretch gap-8 lg:grid-cols-2 ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`relative flex items-center glass-morphism rounded-2xl p-3 sm:p-4 ${
          index % 2 === 1 ? 'lg:col-start-2' : ''
        }`}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.24 }}
      >
        <div className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-black/30 backdrop-blur-md">
          {previewSrc ? (
            project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-[260px] w-full bg-black/40 object-contain sm:h-[300px] md:h-[340px]"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="h-[260px] w-full object-cover sm:h-[300px] md:h-[340px]"
                loading="lazy"
              />
            )
          ) : (
            <div className="h-[260px] w-full bg-gradient-surface sm:h-[300px] md:h-[340px]" />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold text-text-primary backdrop-blur-md">
            Proyecto {project.id}
          </div>
        </div>

        {project.codeImage && (
          <div className="absolute -bottom-3 -right-3 hidden h-20 w-28 overflow-hidden rounded-lg border border-white/20 bg-black/50 p-1 shadow-glass md:block">
            <img src={project.codeImage} alt="Code preview" className="h-full w-full rounded-md object-cover" />
          </div>
        )}
      </motion.div>

      <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
        <motion.div
          className="glass-morphism h-full rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-text-primary">
              {project.category}
            </span>
            <span className="rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-xs font-medium text-text-primary">
              {project.status}
            </span>
          </div>

          <motion.h3 className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl" whileHover={{ scale: 1.01 }}>
            {project.title}
          </motion.h3>

          <p className="mb-5 text-base leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <div className="mb-5 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-primary">Resumen</h4>
            <p className="text-sm leading-relaxed text-text-secondary">
              {project.characteristics}
            </p>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {topFeatures.map((feature, featureIndex) => (
              <motion.span
                key={featureIndex}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: featureIndex * 0.06 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-primary">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {topTechnologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.06 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              Código
            </motion.a>

            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})
