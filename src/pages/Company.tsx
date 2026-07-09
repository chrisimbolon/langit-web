// src/pages/Company.tsx
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Company() {
  const { t } = useTranslation();

  const approachItems = (t("company.approach.items", { returnObjects: true }) || []) as string[];
  const members = (t("company.leadership.members", { returnObjects: true }) || []) as any[];

  return (
    <main className="relative py-16 md:py-24 lg:py-32 bg-white overflow-x-hidden">

      {/* Background */}
      <div className="absolute top-0 right-0 -z-10 w-[250px] md:w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-neutral-500 mb-6">
            {t("company.eyebrow")}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display leading-tight tracking-tight text-neutral-950 mb-6">
            {t("company.titleLine1")}
            <span className="block text-neutral-400">
              {t("company.titleLine2")}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            {t("company.description")}
          </p>
        </header>

        {/* DOWNLOAD */}
        <section className="py-10 md:py-14 border-t border-neutral-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-900 mb-2">
                {t("company.profile.title")}
              </h3>
              <p className="text-sm md:text-base text-neutral-500">
                {t("company.profile.description")}
              </p>
            </div>

            <a
              href="/documents/company-profile-ID.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase border-b-2 border-neutral-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition"
            >
              {t("company.profile.download")}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition" />
            </a>
          </div>
        </section>

        {/* APPROACH */}
        <section className="grid md:grid-cols-12 gap-10 py-16 md:py-24 border-t border-neutral-100">
          <div className="md:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6">
              {t("company.approach.title")}
            </h2>
            <p className="text-neutral-600">
              {t("company.approach.intro")}
            </p>
          </div>

          <div className="md:col-span-7 space-y-5">
            {approachItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <span className="text-xs font-bold text-neutral-300 group-hover:text-blue-500 transition">
                  0{i + 1}
                </span>
                <p className="text-neutral-900 font-medium border-b pb-3 w-full group-hover:translate-x-1 transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-16 md:py-24 border-t border-neutral-100">

          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display mb-4">
              {t("company.leadership.title")}
            </h2>
            <p className="text-sm md:text-base text-neutral-500">
              {t("company.leadership.description")}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-fit mx-auto place-items-center">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full max-w-6xl"> */}

              {members.map((member, i) => {
                const founderImages: Record<string, string> = {
                  "Abdul Halik Nasution": "A-Halik.jpeg",
                    "Christyan Simbolon": "Chris.jpeg",
  
                "Herri": "Herri.jpeg",
                };

                const imageName = founderImages[member.name] ?? "placeholder.jpeg";

                return (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
                  >

                    {/* IMAGE */}
                    <div className="relative w-full max-w-[260px] aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">

                      {/* subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

                      <img
                        src={`/images/founders/${imageName}`}
                        alt={member.name}
                        className="w-full h-full object-cover object-center grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="mt-6 space-y-2 transition-all duration-500 group-hover:translate-y-[-2px]">
                      <h3 className="font-semibold text-lg text-neutral-950 tracking-tight">
                        {member.name}
                      </h3>

                      <p className="text-[10px] uppercase tracking-widest text-blue-600">
                        {member.role}
                      </p>

                      <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}