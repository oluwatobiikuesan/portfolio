import '../style/footer.css'
export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
        <footer>
            <p>xdoodle © {year}</p>
        </footer>
  )
}
