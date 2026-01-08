import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
    // In a real app, you'd send data here.
    // For now, redirect to home.
    navigate("/");
  };

  return (
    <section className="min-h-screen w-full bg-slate-950 flex items-center justify-center pt-20 pb-20 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400 font-light">
            Have a project in mind or just want to say hi? <br/>
            I'm always open to new opportunities.
          </p>
        </div>

        <form
          onSubmit={handleForm}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="username"
                type="text"
                required
                placeholder="What's your name?"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="hello@example.com"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message here..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 transform active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
