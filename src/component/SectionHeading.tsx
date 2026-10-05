import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-20">
      <p className="text-eyebrow text-base-content/50 flex items-center gap-3">
        <span>{index}</span>
        <span className="h-px w-8 bg-base-content/30" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-headline mt-6 max-w-3xl">{title}</h2>
    </Reveal>
  );
}
