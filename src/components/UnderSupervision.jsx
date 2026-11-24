import { useLanguage } from "../context/useLanguage";
import { supervisor } from "../data/researchData";
import AcademicProfileCard from "./AcademicProfileCard";

const supervisorSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EKvDwBgQ4/",
    icon: "simple-icons:facebook",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201096402629",
    icon: "simple-icons:whatsapp",
  },
];

export default function UnderSupervision() {
  const { t } = useLanguage();
  return (
    <section
      id="supervisor"
      className="surface surface-profile relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-nabta-lime/10 blur-3xl rtl:translate-x-1/2"
      />
      <div
        className="surface-content mx-auto max-w-4xl px-4 text-center sm:px-5 lg:px-8"
        data-reveal
      >
        <p className="section-kicker">{t.supervisor.label}</p>
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
          {t.supervisor.title}
        </h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
        <div className="mt-8">
          <AcademicProfileCard
            photo={supervisor.photo}
            photoAlt={t.supervisor.name}
            name={t.supervisor.name}
            role={t.supervisor.role}
            distinction={t.supervisor.distinction}
            socialLinks={supervisorSocialLinks}
          />
        </div>
      </div>
    </section>
  );
}