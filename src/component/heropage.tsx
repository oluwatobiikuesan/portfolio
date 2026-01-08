import { Link } from "react-router-dom";
import Aurora from "./ui/aurora/Aurora";

export default function HeroPage() {
    return(
      <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
           <Aurora />
           {/* Overlay to ensure text readability */}
           <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h5 className="text-purple-400 font-medium tracking-widest text-sm mb-4 animate-fade-in-up">
                HELLO THERE, I AM
            </h5>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in-up delay-100">
                Oluwatobi Ikuesan
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
                Software Engineer passionate about crafting digital tools that simplify business processes and enhance quality of life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                <Link
                    to='/project'
                    className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-colors duration-200 w-full sm:w-auto text-sm uppercase tracking-wide"
                >
                    View Projects
                </Link>

                <Link
                    to='/contact'
                    className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white transition-all duration-200 w-full sm:w-auto text-sm uppercase tracking-wide"
                >
                    Contact Me
                </Link>
            </div>
        </div>
      </main>
    )
}
