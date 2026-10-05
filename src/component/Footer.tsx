import { profile, socials } from "../data/profile";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-300/70">
      <div className="footer mx-auto max-w-6xl items-center px-4 py-10 sm:footer-horizontal sm:px-6">
        <aside>
          <p className="font-display text-lg font-semibold tracking-tight">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="text-sm text-base-content/50">
            &copy; {year}. Designed and built with care.
          </p>
        </aside>

        <nav className="grid-flow-col items-center gap-2 sm:place-self-center sm:justify-self-end">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel="noreferrer"
              className="btn btn-ghost btn-square btn-sm"
              aria-label={social.label}
            >
              <Icon name={social.icon} className="size-[18px]" />
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-ghost btn-sm"
          >
            <Icon name="arrow-up" className="size-4" />
            Top
          </button>
        </nav>
      </div>
    </footer>
  );
}
