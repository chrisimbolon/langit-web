import { useTranslation } from "react-i18next"

export default function Capabilities() {
  const { t } = useTranslation()

  const items = t("capabilities.items", { returnObjects: true }) as any[]

  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
            {t("capabilities.eyebrow")}
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-8">
            {t("capabilities.titleLine1")}
            <br />
            {t("capabilities.titleLine2")}
          </h1>

          <p className="text-lg text-neutral-600">
            {t("capabilities.description")}
          </p>
        </div>

        {/* Capabilities List */}
        <div className="space-y-24">
          {items.map((item, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-2xl font-medium mb-6">
                    {item.title}
                  </h2>
                </div>

                <div className="text-neutral-600 space-y-4">
                  <p>{item.description}</p>

                  <ul className="space-y-2 text-sm">
                    {item.bullets.map((bullet: string, i: number) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {index !== items.length - 1 && (
                <div className="border-t border-neutral-200 mt-24" />
              )}
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-32 max-w-2xl">
          <p className="text-xl leading-relaxed text-neutral-700">
            {t("capabilities.closing")}
          </p>
        </div>

      </div>
    </main>
  )
}