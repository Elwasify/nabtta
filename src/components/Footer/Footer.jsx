import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl, socialLinks } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

const contacts = [
  {
    icon: "ph:map-pin-duotone",
    label: "location",
    href: "https://www.google.com/maps/search/?api=1&query=Faculty+of+Agriculture+Zagazig+University",
  },
  {
    icon: "simple-icons:whatsapp",
    text: "01096175175",
    href: "https://wa.me/201096175175",
  },
  {
    icon: "ph:envelope-simple-duotone",
    text: "mohfouadmf42@gmail.com",
    href: "mailto:mohfouadmf42@gmail.com",
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const links = t.nav.filter((item) => item.href !== "#repository");

  return (
    <footer className="site-footer w-full text-white">
      <div className="mx-auto w-full max-w-[1600px] px-3 pb-3 pt-12 sm:px-5 sm:pb-5 sm:pt-16 lg:px-8">
        <div className="mb-10 text-center sm:mb-14" data-reveal>
          <p className="mx-auto font-accent text-4xl italic leading-tight text-white sm:text-5xl">
            {t.footer.taglineStart}{" "}
            <span className="footer-highlight">{t.footer.taglineHighlight}</span>
          </p>
          <a
            href="#order"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest-950 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-mist-100 hover:shadow-xl"
          >
            <Icon icon="ph:package-duotone" width={20} height={20} />
            {t.hero.secondaryButton}
            <Icon
              icon="ph:arrow-up-right-bold"
              width={16}
              height={16}
              className="rtl:-scale-x-100"
            />
          </a>
        </div>

        <div className="footer-panel w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 shadow-[0_18px_50px_rgb(10_30_20/0.28)] backdrop-blur-md sm:rounded-[2.25rem]">
          <div className="grid xl:grid-cols-[1.45fr_1fr_1fr_0.8fr]">
            <div className="border-b border-line p-6 sm:p-8 xl:border-b-0 xl:border-e">
              <Brand />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                {t.footer.description}
              </p>
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-repository-link mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Icon icon="ph:folder-open-duotone" width={20} height={20} />
                {t.footer.repository}
              </a>
            </div>

            <div className="border-b border-line p-6 sm:p-8 xl:border-b-0 xl:border-e">
              <h3 className="text-sm font-bold">{t.footer.quickLinks}</h3>
              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={`/${item.href}`}
                      className="group inline-flex items-center gap-2 transition-colors hover:text-forest-800"
                    >
                      <Icon
                        icon="ph:caret-right-bold"
                        width={12}
                        height={12}
                        className="text-forest-700 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b border-line p-6 sm:p-8 xl:border-b-0 xl:border-e">
              <h3 className="text-sm font-bold">{t.footer.contactUs}</h3>
              <ul className="mt-5 space-y-4 text-sm text-ink-soft">
                {contacts.map((c) => (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-3 transition-colors hover:text-forest-800"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 transition-all duration-300 group-hover:bg-forest-900 group-hover:from-forest-900 group-hover:to-forest-900 group-hover:text-white">
                        <Icon icon={c.icon} width={20} height={20} />
                      </span>
                      <span
                        dir={c.label ? "auto" : "ltr"}
                        className="mt-2 break-words leading-relaxed"
                      >
                        {c.label ? t.footer[c.label] : c.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-bold">{t.footer.followUs}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.footer.socialAccountPrefix} ${s.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/20 bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-900 hover:bg-forest-900 hover:from-forest-900 hover:to-forest-900 hover:text-white hover:shadow-md hover:shadow-forest-950/25"
                  >
                    <Icon icon={s.icon} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-line px-6 py-5 text-xs text-ink-soft sm:px-8">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
