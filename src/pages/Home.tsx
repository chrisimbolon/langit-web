import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Home() {
  const { t } = useTranslation()

  return (
    <section className="relative py-40">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            {t("home.eyebrow")}
          </p>

          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-neutral-900">
            {t("home.titleLine1")}
            <br />
            <span className="text-neutral-400">
              {t("home.titleLine2")}
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
            {t("home.description")}
          </p>

          <div className="mt-12 flex gap-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-70 transition"
            >
              {t("home.primaryAction")}
            </Link>

            <Link
              to="/capabilities"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition"
            >
              {t("home.secondaryAction")}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}