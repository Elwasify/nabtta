import { Icon } from "@iconify/react";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function ProjectRepository() {
  const { t } = useLanguage();

  return (
    <section
      id="repository"
      className="repository-section surface relative overflow-hidden py-12 text-white sm:py-16 md:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-24 -top-24 h-72 w-72 rounded-full bg-forest-700/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -end-24 h-72 w-72 rounded-full bg-forest-300/15 blur-3xl"
      />

      <div
        className="surface-content mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-5 lg:px-8"
        data-reveal
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-forest-300/35 bg-forest-300/15 text-forest-300">
            <Icon icon="ph:folder-open-duotone" width={34} height={34} />
          </div>
        </div>

        <p className="section-kicker section-kicker-light mt-8">
          {t.repository.label}
        </p>

        <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
          {t.repository.title}
        </h2>
        <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-300 to-white/80" />

        <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
          {t.repository.description}
        </p>

        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-xl bg-forest-300 px-6 py-3.5 text-center text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-300 sm:mt-10 sm:px-8 sm:py-4"
        >
          <Icon icon="ph:github-logo-duotone" width={20} height={20} />
          {t.repository.button}
          <Icon
            icon="ph:arrow-up-right-bold"
            width={16}
            height={16}
            className="rtl:-scale-x-100"
          />
        </a>
      </div>
    </section>
  );
}
