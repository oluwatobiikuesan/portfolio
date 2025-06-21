import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aurora from "./ui/aurora/Aurora";

export default function HeroPage() {
    // let windomHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let randomindex = Math.floor(Math.random() * (windowWidth * 80 / 100));
    // const [randIndex, setRandIndex] = useState<number>(randomindex);
    const [bounceCount, setBounceCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setBounceCount(bounceCount + 1);
      }, 950)
    }, [bounceCount]);
  
    useEffect(() => {
      setTimeout(()=>{
      //  setRandIndex(randomindex); 
      },2000)
    }, [randomindex])
  
    return(
      <main className="relative flex min-h-screen items-center justify-center bg-white text-gray-900">
        <Aurora />
        <div className="relative z-10 flex flex-col items-center space-y-4 px-4 text-center">
          <h5 className="text-sm text-gray-500">Hello there, my name is</h5>
          <h1 className="text-5xl font-black lg:text-8xl">Oluwatobi Ikuesan</h1>
          <p className="max-w-xl text-xs lg:text-sm">
            I am very passionate about technological advancement, developing tools and innovation to make business processes easier and improve quality of life.
          </p>
          <Link
            to='/project'
            title="view project"
            className='text-xs text-blue-600 hover:underline flex items-center gap-1'
          >
            View Project<span>&gt;</span>
          </Link>
        </div>
      </main>
    )
}
