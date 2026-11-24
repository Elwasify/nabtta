import { Icon } from "@iconify/react";
import { areas } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

const icons = {
  Atom: "ph:drop-duotone",
  Dna: "ph:atom-duotone",
  FlaskConical: "ph:leaf-duotone",
  Sprout: "ph:plant-duotone",
};

const tone =
  "bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 group-hover:from-forest-900 group-hover:to-forest-900 group-hover:text-white";

export default function ResearchAreas() {
  const { t } = useLanguage();

  return (
    <section
      id="research-areas"
      className="surface surface-fields py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div
          className="grid min-w-0 items-end gap-6 lg:grid-cols-2 lg:gap-16"
          data-reveal
        >
          <div>
            <p className="section-kicker mb-4">{t.areasSection.label}</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.areasSection.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.areasSection.description}
          </p>
        </div>

        <div
          className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6"
          data-reveal="stagger"
        >
          {areas.map((area, index) => (
            <article
              key={area.icon}
              className="group flex min-w-0 flex-col rounded-2xl border border-line bg-white/90 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-forest-700/30 hover:shadow-xl hover:shadow-forest-950/10 sm:p-7"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${tone}`}
              >
                <Icon
                  icon={icons[area.icon] || "ph:plant-duotone"}
                  width={30}
                  height={30}
                />
              </div>

              <h3 className="mt-6 font-display text-xl font-medium text-navy-900">
                {t.areas[index].title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {t.areas[index].description}
              </p>

              <p className="mt-8 border-t border-line pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-700">
                {String(index + 1).padStart(2, "0")} /{" "}
                {t.areasSection.focusLabel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
