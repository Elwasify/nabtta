import logo from "../../assets/nabta-logo.webp";
import navbarLogo from "../../assets/nabta-navbar-logo.webp";

export default function Brand({ light = false }) {
  return (
    <a href="/#home" aria-label="NABTA home" className="flex shrink-0 items-center">
      <span
        className="flex h-10 w-28 items-center justify-center px-1 sm:h-11 sm:w-32"
      >
        <img
          src={light ? navbarLogo : logo}
          alt="NABTA"
          className="h-full w-full object-contain"
        />
      </span>
    </a>
  );
}
