import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type Project } from "../data/profile";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading index="03" eyebrow="Selected work" title="Things I have designed and built." />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 3) * 90} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);
  const moveFocus = useRef(false);

  // After a keyboard flip, move focus to the button on the face now showing.
  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    (flipped ? backButton : frontButton).current?.focus({ preventScroll: true });
  }, [flipped]);

  // The whole card flips on click or tap, except when following a link.
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) return;
    // event.detail is 0 when the click came from Enter or Space on a button.
    moveFocus.current = event.detail === 0;
    setFlipped((f) => !f);
  };

  const number = String(index).padStart(2, "0");

  return (
    <div className={`flip h-80 cursor-pointer select-none ${flipped ? "is-flipped" : ""}`} onClick={handleClick}>
      <div className="flip-inner">
        {/* Front */}
        <article
          inert={flipped}
          className="flip-face card card-border border-base-300 bg-base-100 transition-colors duration-300 hover:border-base-content/30"
        >
          <div className="card-body justify-between p-7">
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl font-medium tracking-tighter text-base-content/15">{number}</span>
              <button
                ref={frontButton}
                type="button"
                className="btn btn-ghost btn-square btn-sm text-base-content/50"
                aria-label={`Show details for ${project.title}`}
                aria-expanded={flipped}
              >
                <Icon name="flip" className="size-4" />
              </button>
            </div>

            <div>
              {project.org && <p className="text-eyebrow mb-2 text-base-content/50">at {project.org}</p>}
              <h3 className="text-title">{project.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge badge-ghost badge-sm rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-eyebrow mt-6 text-base-content/35">Flip for details</p>
            </div>
          </div>
        </article>

        {/* Back */}
        <article inert={!flipped} className="flip-face flip-back card bg-neutral text-neutral-content">
          <div className="card-body p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-eyebrow text-neutral-content/50">{number} / Details</p>
                <h3 className="text-title mt-3">{project.title}</h3>
              </div>
              <button
                ref={backButton}
                type="button"
                className="btn btn-ghost btn-square btn-sm text-neutral-content/60 hover:bg-neutral-content/10 focus-visible:bg-neutral-content/10 focus-visible:outline-neutral-content/60"
                aria-label={`Back to ${project.title} overview`}
              >
                <Icon name="flip" className="size-4" />
              </button>
            </div>

            <div className="mt-2 flex-1 overflow-y-auto">
              <p className="leading-relaxed text-neutral-content/75">{project.summary}</p>
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-neutral-content/70">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-content/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="card-actions items-center justify-between pt-2">
              <span className="text-eyebrow text-neutral-content/40">{project.org ? project.org : project.link ? "Live" : "Project"}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm border-none bg-neutral-content text-neutral hover:bg-neutral-content/85"
                >
                  Visit site
                  <Icon name="arrow" className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
