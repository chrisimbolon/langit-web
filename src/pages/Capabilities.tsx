import { useTranslation } from "react-i18next"

export default function Capabilities() {
  const { t } = useTranslation()

  const items = t("capabilities.items", {
    returnObjects: true,
  }) as any[]

  return (
    <main className="bg-neutral-50">

      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-5xl py-28 md:py-40">

            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              {t("capabilities.eyebrow")}
            </p>

            <h1 className="
              text-5xl
              leading-none
              tracking-tight
              text-neutral-900
              md:text-7xl
              lg:text-[96px]
              lg:leading-[0.95]
            ">
              {t("capabilities.titleLine1")}
              <br />

              <span className="text-neutral-400">
                {t("capabilities.titleLine2")}
              </span>
            </h1>

            <p className="
              mt-12
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-600
              md:text-xl
            ">
              {t("capabilities.description")}
            </p>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="divide-y divide-neutral-200">

            {items.map((item, index) => (
              <div
                key={index}
                className="
                  grid
                  gap-12
                  py-20
                  md:grid-cols-12
                  md:gap-16
                  lg:py-28
                "
              >

                {/* LEFT */}
                <div className="md:col-span-5">

                  <div className="sticky top-32">

                    <p className="mb-6 text-sm text-neutral-400">
                      0{index + 1}
                    </p>

                    <h2 className="
                      text-3xl
                      leading-tight
                      tracking-tight
                      text-neutral-900
                      md:text-4xl
                    ">
                      {item.title}
                    </h2>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="md:col-span-7">

                  <p className="
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-neutral-600
                  ">
                    {item.description}
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">

                    {item.bullets.map(
                      (bullet: string, i: number) => (
                        <div
                          key={i}
                          className="
                            flex
                            items-start
                            gap-3
                            border-t
                            border-neutral-200
                            pt-4
                          "
                        >
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />

                          <p className="text-sm leading-relaxed text-neutral-600">
                            {bullet}
                          </p>
                        </div>
                      )
                    )}

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="py-28 md:py-40">

            <div className="max-w-4xl">

              <p className="
                text-3xl
                leading-tight
                tracking-tight
                text-neutral-900
                md:text-5xl
                md:leading-[1.1]
              ">
                {t("capabilities.closing")}
              </p>

            </div>

          </div>
        </div>
      </section>

    </main>
  )
}