export default function FigmaEmbed() {
  return (
    <section id="figma" className="mt-24">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-black/5 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                      dark:border-white/10 dark:from-[#0f172a] dark:via-[#0b1b33] dark:to-[#111827] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]">

        <h2 className="text-2xl font-extrabold text-black/90 dark:text-white/90">
          UI Interaction Study
        </h2>

        <p className="mt-2 text-sm text-black/60 dark:text-white/60">
          Interactive Figma prototype exploring motion-driven product storytelling.
        </p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          <iframe
            className="h-full w-full"
            src="https://embed.figma.com/proto/r5aZHr48F9qOwMPwhWrTo4/Untitled?node-id=1-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}