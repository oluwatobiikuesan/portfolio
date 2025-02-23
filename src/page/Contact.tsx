import { useNavigate } from "react-router-dom";
import { Container } from "../component/ui/Container";

export default function Contact() {

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    const navigate = useNavigate()
    event.preventDefault();

    // get form data sorted
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));

    // goto home
    navigate("/");
  }

  const styles = {
    label: "text-white w-full text-xs lg:text-sm",
    input: "bg-white p-2 placeholder:text-xs capitalize hover:bg-gray-100",
  }

  return (
    <section>
      <div className="contact bg-black min-h-dvh w-dvw">
      <h1 className="text-5xl text-white lg:p-10 lg:w-[80%]">Contact Form</h1>
          <Container className={"grid grid-cols-5"}> 
            
            <div id="formSection" className="w-full">
              <form name="contact" method="post" action="/home" onSubmit={handleForm} className="border-1 border-black p-5 grid gap-1 lg:w-[500px] rounded-sm bg-white">
                      <label className={styles.label}>User name</label>
                      <input className={styles.input} type="text" placeholder="enter your username"></input>
                      <label className={styles.label}>Email address</label>
                      <input className={styles.input} type="text" role="email" placeholder="email address"></input>
                     <div className="p-5 w-full">
                     <textarea className="w-full h-[100px] resize-none border-gray-600 border-1 text-black font-light text-sm p-1"></textarea>
                     </div>
                      <button type="submit" className="text-black border-1 pl-10 pr-10 p-1 rounded-sm text-xs hover:bg-orange-200 cursor-pointer">submit</button>
              </form>
            </div>
            
            <aside>
              {/* dont know yet */}
            </aside>
          </Container>
      </div>
         
    </section>
  )
}
