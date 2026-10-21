import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-32 sm:px-6">
      <p className="text-eyebrow text-base-content/50">Error 404</p>
      <h1 className="text-display mt-6">Lost in the grey.</h1>
      <p className="text-lead mt-6 max-w-lg text-base-content/65">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn btn-primary mt-10 px-7">
        Back home
      </Link>
    </section>
  );
}
