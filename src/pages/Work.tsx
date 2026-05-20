import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Work() {
  const { t } = useTranslation()

  const projects = t("work.projects", {
    returnObjects: true,
  }) as {
    year: string
    category: string
    title: string
    description: string
    stack: string[]
  }[]

  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
            {t("work.eyebrow")}
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight tracking-tight mb-6">
            {t("work.titleLine1")}
            <br />
            {t("work.titleLine2")}
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed">
            {t("work.description")}
          </p>
        </div>

        {/* Projects */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.section
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group grid md:grid-cols-2 gap-20 py-24 border-t border-neutral-200/60"
            >
              {/* LEFT / RIGHT alternation */}
              <div className={isEven ? "" : "md:order-2"}>
                <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-6">
                  {project.year} — {project.category}
                </p>

                <div className="flex items-start gap-6">
                  {/* Dynamic numbering */}
                  <span className="text-6xl font-display text-neutral-200 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 group-hover:text-neutral-900 transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-neutral-600 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>


              {/* Stack Column */}
              <div
                className={`text-sm text-neutral-500 space-y-3 border-neutral-200 pl-8 ${
                  isEven
                    ? "border-l"
                    : "border-r md:border-r md:pl-0 md:pr-8"
                }`}
              >
                {project.stack.map((tech, i) => (
                  <p
                    key={i}
                    className="group-hover:text-neutral-700 transition-colors duration-300"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>
    </main>
  )
}