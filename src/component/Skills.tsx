import { skills } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-base-200/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeading index="02" eyebrow="Skills" title="A focused toolkit, used with intention." />

        <div className="divide-y divide-base-300 border-y border-base-300">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:items-center md:gap-10">
                <h3 className="text-eyebrow text-base-content/50">{group.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="badge badge-lg h-auto rounded-full border-base-300 bg-base-100 px-4 py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
