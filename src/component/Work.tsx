import { projects } from "../data/profile";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading index="03" eyebrow="Selected work" title="Things I have designed and built." />

      <ul className="list border-t border-base-300">
        {projects.map((project, i) => {
          const content = (
            <>
              <span className="pt-1 font-mono text-sm text-base-content/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="list-col-grow">
                <h3 className="text-title transition-transform duration-500 ease-[var(--ease-buoy)] group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-base-content/65">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-ghost badge-sm rounded-full font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`btn btn-square btn-ghost btn-sm self-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                  project.link ? "" : "invisible"
                }`}
                aria-hidden="true"
              >
                <Icon name="arrow" className="size-4" />
              </span>
            </>
          );

          return (
            <li key={project.title} className="border-b border-base-300">
              <Reveal delay={i * 60}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="group list-row items-start gap-6 rounded-none px-0 py-8 md:gap-10">
                    {content}
                  </a>
                ) : (
                  <div className="group list-row items-start gap-6 rounded-none px-0 py-8 md:gap-10">{content}</div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
