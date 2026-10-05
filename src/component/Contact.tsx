import { useState, type FormEvent } from "react";
import { profile, socials } from "../data/profile";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: the form opens the visitor's email app with the message filled in.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-base-200/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeading index="04" eyebrow="Contact" title="Have an idea? Let's make it real." />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="space-y-10">
            <p className="text-lead text-base-content/70">
              I am open to freelance work, collaborations and full time roles. Send a note and I will get back to you
              soon.
            </p>

            <a href={`mailto:${profile.email}`} className="link link-hover font-display text-2xl tracking-tight md:text-3xl">
              {profile.email}
            </a>

            <div className="flex flex-wrap gap-2">
              {socials
                .filter((social) => social.icon !== "mail")
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm border-base-300 px-4"
                  >
                    <Icon name={social.icon} className="size-4" />
                    {social.label}
                  </a>
                ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card border border-base-300 bg-base-100">
              <div className="card-body gap-2 p-6 md:p-10">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-eyebrow text-base-content/50">Name</legend>
                  <input name="name" type="text" required autoComplete="name" className="input input-lg w-full" placeholder="Your name" />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-eyebrow text-base-content/50">Email</legend>
                  <input name="email" type="email" required autoComplete="email" className="input input-lg w-full" placeholder="you@example.com" />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-eyebrow text-base-content/50">Message</legend>
                  <textarea name="message" required rows={5} className="textarea textarea-lg w-full resize-none" placeholder="Tell me about your project" />
                </fieldset>

                <button type="submit" className="btn btn-primary btn-lg mt-4">
                  Send message
                  <Icon name="send" className="size-4" />
                </button>

                {sent && (
                  <div role="status" className="alert alert-soft mt-4 text-sm">
                    Your email app should open with the message ready to send. Thank you!
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
