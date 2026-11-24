import { Icon } from "@iconify/react";

export default function AcademicProfileCard({
  photo,
  photoAlt,
  label,
  name,
  role,
  distinction,
  socialLinks = [],
  compact = false,
  embedded = false,
  className = "",
}) {
  const cardClasses = embedded
    ? "h-full"
    : "mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_55px_rgb(31_68_49/0.1)] sm:rounded-4xl";
  const contentClasses = compact
    ? "flex h-full flex-col items-center justify-center gap-5 p-2 text-center sm:p-4"
    : "grid items-center gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 lg:p-10";
  const imageClasses = compact
    ? "w-44 shrink-0 rounded-3xl border border-line bg-white p-2 shadow-md shadow-forest-950/5 sm:w-48"
    : "mx-auto w-full max-w-52 rounded-3xl border border-line bg-mist-50 p-2 shadow-md shadow-forest-950/5 md:mx-0";
  const imageShapeClasses =
    "aspect-4/5 w-full rounded-[1.25rem] object-cover object-top";
  const contentAlignment = compact
    ? "min-w-0 text-center"
    : "min-w-0 text-center md:text-start";
  const nameClasses = compact
    ? "text-xl sm:text-2xl"
    : "text-2xl sm:text-3xl lg:text-4xl";
  const labelAlignment = compact
    ? "justify-center"
    : "justify-center md:justify-start";

  return (
    <article className={`${cardClasses} ${className}`}>
      {!embedded && (
        <div className="h-1.5 bg-linear-to-r from-nabta-lime via-forest-700 to-forest-900" />
      )}
      <div className={contentClasses}>
        <div className={`group ${imageClasses}`}>
          <img
            src={photo}
            alt={photoAlt}
            width={520}
            height={650}
            className={`${imageShapeClasses} transition-transform duration-500 group-hover:scale-[1.02]`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={contentAlignment}>
          {label && (
            <div
              className={`flex items-center gap-2.5 text-forest-800 ${labelAlignment}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10">
                <Icon
                  icon="ph:graduation-cap-duotone"
                  width={compact ? 20 : 22}
                  height={compact ? 20 : 22}
                  aria-hidden="true"
                />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                {label}
              </p>
            </div>
          )}

          <h3
            className={`mt-2 break-words font-display font-semibold leading-snug text-forest-900 ${nameClasses}`}
          >
            {name}
          </h3>

          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft sm:mt-4 sm:text-base">
            {role}
          </p>

          {distinction && (
            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-forest-700/20 bg-mist-50 py-1.5 ps-1.5 pe-3.5 text-xs font-semibold leading-snug text-forest-950 sm:text-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nabta-lime text-forest-950">
                <Icon
                  icon="ph:star-duotone"
                  width={17}
                  height={17}
                  aria-hidden="true"
                />
              </span>
              <span className="break-words">{distinction}</span>
            </div>
          )}

          {socialLinks.length > 0 && (
            <div
              className={`mt-5 flex flex-wrap gap-2.5 ${compact ? "justify-center" : "md:justify-start"}`}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/20 bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-900 hover:bg-forest-900 hover:from-forest-900 hover:to-forest-900 hover:text-white hover:shadow-md hover:shadow-forest-950/25"
                >
                  <Icon icon={social.icon} width={21} height={21} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
