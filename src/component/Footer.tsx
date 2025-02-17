export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
        <footer className="w-dvw text-center">
            <p>xdoodle © {year}</p>
        </footer>
  )
}
