import { useNavigate } from "react-router-dom";

export default function Contact() {

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    const navigate = useNavigate()
    event.preventDefault();

    // get form data sorted
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
    const formdata = new FormData();
    const contactdata = formdata.get("contact");
    console.log(contactdata);
    // goto home
    navigate("/home");
  };

  const styles = {
    label: "text-white w-full text-xs lg:text-sm",
    input: "bg-transparent p-2 placeholder:text-xs capitalize hover:bg-gray-900 placeholder:text-white placeholder:font-thin w-full border-1 border-grey-100 text-white outline-2 outline-white",
  }

  return (
    <section>
      <div className="contact bg-black min-h-dvh w-dvw">
      <h1 className="text-5xl text-white lg:p-10 lg:w-[80%]">Contact Form</h1>
            
            <div id="formSection" className="w-full">
              <form name="contact" method="post" action="home" onSubmit={handleForm} className="border-1 border-black p-5 grid gap-1 lg:w-[500px] rounded-sm bg-black">
                      <label className={styles.label}>User name</label>
                      <input className={styles.input} type="text" placeholder="enter your username"></input>
                      <label className={styles.label}>Email address</label>
                      <input className={`${styles.input} lowercase text-white`} type="text" role="email" placeholder="email address"></input>
                     <div className="w-full">
                     <textarea className="w-full h-[100px] resize-none border-gray-600 border-1 text-white font-light text-sm outline-2 outline-white"></textarea>
                     </div>
                      <button type="submit" className="text- bg-white w-full hover:bg-transparent hover:text-white hover:pb-3 transition-all duration-200 border-1 pl-10 pr-10 p-1 rounded-sm text-sm cursor-pointer uppercase">submit</button>
              </form>
            </div>
            
            <aside>
              {/* dont know yet */}
            </aside>
          </div>
         
    </section>
  )
}
