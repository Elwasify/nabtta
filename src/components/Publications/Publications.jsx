import { Icon } from "@iconify/react";
import { publications } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section
      id="publications"
      className="surface surface-publications py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div
          className="grid min-w-0 items-end gap-6 lg:grid-cols-2 lg:gap-16"
          data-reveal
        >
          <div>
            <p className="section-kicker mb-4">{t.publicationsSection.label}</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.publicationsSection.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.publicationsSection.description}
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-12 md:gap-6"
          data-reveal="stagger"
        >
          {publications.map((publication, index) => (
            <article
              key={publication.slug}
              className="group flex min-w-0 basis-full flex-col rounded-2xl border border-line bg-white/90 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-forest-700/30 hover:shadow-xl hover:shadow-forest-950/10 sm:p-6 md:basis-[calc(50%-0.75rem)] lg:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      icon="ph:book-open-text-duotone"
                      width={24}
                      height={24}
                    />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-700">
                    {t.publicationsSection.reference}{" "}
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist-50 px-3 py-1 text-xs font-medium text-ink-soft">
                  <Icon
                    icon="ph:calendar-blank-duotone"
                    width={16}
                    height={16}
                    className="text-forest-800"
                  />
                  {publication.platform} · {publication.year}
                </span>
              </div>

              <h3
                dir="ltr"
                className="mt-5 text-start font-display text-xl font-medium leading-snug text-navy-900 sm:text-2xl"
              >
                {publication.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                {t.publicationSummaries[publication.slug]}
              </p>

              <p
                dir="ltr"
                className="mt-6 text-start text-xs font-medium italic text-ink-soft"
              >
                {publication.journal}
              </p>

              <div className="mt-6 border-t border-line pt-6">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-forest-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900"
                >
                  {t.publicationsSection.readPublication}
                  <Icon
                    icon="ph:arrow-up-right-bold"
                    width={16}
                    height={16}
                    className="rtl:-scale-x-100"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
