import { Icon } from "@iconify/react";
import { teamMembers } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function ProjectTeam() {
  const { t } = useLanguage();

  return (
    <section
      id="team-members"
      className="surface surface-profile relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-nabta-lime/10 blur-3xl"
      />
      <div className="surface-content mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div
          className="grid min-w-0 items-end gap-6 lg:grid-cols-2 lg:gap-16"
          data-reveal
        >
          <div>
            <p className="section-kicker mb-4">{t.team.label}</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.team.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.team.description}
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4 xl:gap-5"
          data-reveal="stagger"
        >
          {teamMembers.map((member, index) => {
            const localizedName = t.team.members?.[index] || member;
            return (
              <article
                key={member}
                className="group min-w-0 basis-full rounded-2xl border border-line bg-white/95 p-4.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-700/35 hover:shadow-xl hover:shadow-forest-950/8 sm:basis-[calc(50%-0.5rem)] sm:p-5 lg:basis-[calc(25%-0.75rem)] lg:p-6 xl:basis-[calc(25%-0.95rem)]"
              >
                <div className="flex items-center justify-between">
                  <p className="rounded-md bg-mist-100/80 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-forest-800">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-forest-900 group-hover:from-forest-900 group-hover:to-forest-900 group-hover:text-white">
                    <Icon icon="ph:user-duotone" width={24} height={24} />
                  </span>
                </div>
                <h3 className="mt-4 text-start font-display text-base font-bold leading-snug text-navy-900 sm:text-lg">
                  {localizedName}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
