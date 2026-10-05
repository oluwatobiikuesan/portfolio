import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import { profile } from "../data/profile";
import Icon from "./Icon";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-16 pb-24 sm:px-6 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-32">
      <div>
        {profile.available && (
          <div className="rise badge badge-outline badge-lg h-auto gap-2 rounded-full border-base-300 px-4 py-2 font-mono text-xs" style={delay(0)}>
            <span className="status animate-pulse bg-base-content/70" />
            Available for new projects
          </div>
        )}

        <h1 className="text-display mt-8">
          <span className="rise inline-block" style={delay(120)}>
            {profile.firstName}
          </span>
          <br />
          <span className="rise inline-block text-base-content/35" style={delay(240)}>
            {profile.lastName}
          </span>
        </h1>

        <p className="rise mt-8 font-serif text-3xl italic leading-tight text-base-content/80 md:text-4xl" style={delay(380)}>
          {profile.role} who {profile.tagline}
        </p>

        <p className="rise text-lead mt-6 max-w-xl text-base-content/65" style={delay(500)}>
          {profile.intro}
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={delay(620)}>
          <Link to="/#work" className="btn btn-primary px-7">
            View my work
            <Icon name="arrow" className="size-4" />
          </Link>
          <Link to="/#contact" className="btn btn-ghost px-7">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={delay(300)}>
        <div className="float">
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-base-300 bg-base-200">
            <img
              src={profile.image}
              alt={profile.imageAlt}
              className="size-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              loading="eager"
            />
          </figure>
          <div className="card absolute -bottom-6 -left-4 border border-base-300 bg-base-100/90 shadow-xl backdrop-blur sm:-left-8">
            <div className="card-body gap-1 px-5 py-4">
              <p className="text-eyebrow text-base-content/50">Currently</p>
              <p className="font-display font-medium tracking-tight">Building tools for the web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
