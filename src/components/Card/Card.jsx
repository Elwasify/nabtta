import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/useLanguage";

export default function Card({ name, photo, socialLinks = [] }) {
  const { t } = useLanguage();

  return (
    <article className="group flex w-full max-w-[280px] flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-md shadow-forest-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-700/35 hover:shadow-2xl hover:shadow-forest-950/15">
      <div className="relative aspect-[3/3.9] w-full overflow-hidden bg-mist-100">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-forest-700/35">
            <Icon icon="ph:user-duotone" width={96} height={96} />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-forest-950/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 text-center">
        <div>
          <h3 className="font-display text-base font-bold text-navy-900 sm:text-lg">
            {name}
          </h3>
        </div>

        {socialLinks.length > 0 && (
          <div className="mt-4 flex items-center justify-center gap-2 border-t border-line/70 pt-3.5" dir="ltr">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} ${t.presentation.socialLinkLabel} ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-700/15 bg-mist-50 text-forest-800 transition-all duration-200 hover:scale-110 hover:border-forest-900 hover:bg-forest-900 hover:text-white"
              >
                <Icon icon={social.icon} width={18} height={18} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
