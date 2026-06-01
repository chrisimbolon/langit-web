export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container py-12 md:py-16">

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-5">
              PT. LANGIT STRATEGI INDONESIA
            </p>

            <p className="max-w-md text-neutral-600 leading-relaxed">
              We design and build structured digital systems
              with engineering discipline, operational clarity,
              and long-term scalability.
            </p>
          </div>

          <div className="md:text-right">

            <p className="text-neutral-500">
              hello@langit.id
            </p>

            <p className="mt-2 text-neutral-500">
              Medan, Indonesia
            </p>

            <p className="mt-8 text-sm text-neutral-400">
              © {new Date().getFullYear()} Langit
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}