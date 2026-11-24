import { Icon } from "@iconify/react";
import photo from "../../assets/abdallah-elwasify.webp";
import { useLanguage } from "../../context/useLanguage";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Elwasify",
    icon: "simple-icons:github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdallah-elwasify/",
    icon: "simple-icons:linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/abdallah.elwasify.31",
    icon: "simple-icons:facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abdallahelwasify_/",
    icon: "simple-icons:instagram",
  },
];

export default function DeveloperCard() {
  const { t } = useLanguage();

  return (
    <div className="flex w-full items-center justify-center">
      <article className="w-full max-w-[280px] overflow-hidden rounded-3xl border border-line bg-white shadow-lg shadow-forest-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/35 hover:shadow-xl">
        <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-transparent">
          <img
            src={photo}
            alt={t.technicalSupport.name}
            className="h-full w-full object-contain object-top select-none pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex flex-col justify-between p-5 text-center">
          <div>
            <h3 className="font-display text-base font-bold text-navy-900 sm:text-lg">
              {t.technicalSupport.name}
            </h3>
            <p className="mt-1 text-xs font-semibold text-forest-700 sm:text-sm">
              {t.technicalSupport.role}
            </p>
          </div>

          <div
            className="mt-4 flex items-center justify-center gap-2 border-t border-line/70 pt-3.5"
            dir="ltr"
            role="group"
            aria-label={t.technicalSupport.socialLabel}
          >
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-700/15 bg-mist-50 text-forest-800 transition-all duration-200 hover:scale-110 hover:border-forest-900 hover:bg-forest-900 hover:text-white"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon icon={icon} width={18} height={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
