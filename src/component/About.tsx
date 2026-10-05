import { focus, profile, stats } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading index="01" eyebrow="About" title="Engineer by trade, designer at heart." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="stats stats-vertical w-full border border-base-300 bg-base-100 sm:stats-horizontal lg:stats-vertical">
            {stats.map((stat) => (
              <div key={stat.label} className="stat px-8 py-6">
                <div className="stat-title text-eyebrow">{stat.label}</div>
                <div className="stat-value font-display text-5xl font-medium tracking-tighter">{stat.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="text-lead text-base-content/70">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 md:grid-cols-3">
        {focus.map((item, i) => (
          <Reveal key={item.title} delay={i * 120} className="h-full">
            <article className="flex h-full flex-col gap-4 bg-base-100 p-8 md:p-10">
              <span className="font-mono text-sm text-base-content/40">0{i + 1}</span>
              <h3 className="text-title">{item.title}</h3>
              <p className="leading-relaxed text-base-content/65">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
