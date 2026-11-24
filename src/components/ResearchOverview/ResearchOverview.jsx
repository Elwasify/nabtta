import { Icon } from "@iconify/react";
import heroImage from "../../assets/nabta-about.webp";
import { useLanguage } from "../../context/useLanguage";

export default function ResearchOverview() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="surface surface-intro py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 rounded-full bg-nabta-lime/10 blur-3xl"
      />
      <div
        className="surface-content mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-5 lg:grid-cols-2 lg:gap-16 lg:px-8"
        data-reveal
      >
        <div className="lg:col-start-1">
          <p className="section-kicker mb-4">{t.overview.label}</p>

          <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {t.overview.title}
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />

          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.overview.paragraphOne}
          </p>

          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.overview.paragraphTwo}
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-forest-700/15 bg-linear-to-br from-nabta-lime-soft to-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-forest-900 ring-1 ring-forest-700/10">
              <Icon icon="ph:quotes-duotone" width={24} height={24} />
            </span>
            <p className="text-sm leading-relaxed text-forest-950 sm:text-base">
              {t.overview.quote}
            </p>
          </div>
        </div>

        <figure className="min-w-0 lg:col-start-2">
          <div className="group overflow-hidden rounded-2xl shadow-xl shadow-forest-950/15 ring-1 ring-line">
            <img
              src={heroImage}
              alt={t.overview.imageAlt}
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] leading-relaxed text-ink-soft sm:text-xs">
            <span className="rounded-full border border-forest-700/20 bg-nabta-lime-soft px-3 py-1 font-semibold uppercase tracking-[0.15em] text-forest-900">
              {t.overview.figureLabel}
            </span>
            <span className="italic">{t.overview.figureNote}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
