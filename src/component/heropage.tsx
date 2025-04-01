import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aurora from "./ui/aurora/Aurora";
import FallingText from "./ui/fallingtext/FallingText";

export default function HeroPage() {
    let windomHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let randomindex = Math.floor(Math.random() * (windowWidth * 80 / 100));
    const [randIndex, setRandIndex] = useState<number>(randomindex);
    const [bounceCount, setBounceCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setBounceCount(bounceCount + 1);
      }, 950)
    }, [bounceCount]);
  
    useEffect(() => {
      setTimeout(()=>{
       setRandIndex(randomindex); 
      },2000)
    }, [randomindex])
  
    return(
      <main className="">
        <Aurora></Aurora>
      <div className='lg:grid lg:grid-cols-8 flex-col h-dvh align-middle justify-center items-center'>

      <div className='lg:col-start-3 lg:col-end-7 place-items-center'>

      <div>
      <h5 className={`text-yellow-200 p-2 lg:text-sm lg:text-center animate-pulse transition-all text-center text-sm`}>Hello there, my name is</h5>
      <h1 className='lg:text-8xl text-5xl text-center font-black'>Oluwatobi Ikuesan</h1>
       <p className='lg:text-center w-full lg:text-sm text-center text-xs'>
       I am very passionate about technological advancement, obsession with developing tools and innovation to make business process easier and enhance individual quality of life.
       </p>

       <div className='text-center align-middle flex justify-center items-center'>
        <Link to='/project' title="view project" className='text-black flex gap-1 justify-center items-center text-xs'><span className='text-white'>View Project</span>
        <span
        className='lg:h-[20px] lg:w-[20px] bg-amber-50 p-1 rounded-[50%] font-bold items-center justify-center relative'><span className='absolute top-0 left-0 right-0'>&gt;</span></span></Link>
        </div>
        </div>

        </div>

        <div className="leftwing lg:col-start-1 lg:col-end-2 lg:row-start-1 font-thin text-sm relative lg:p-0 p-10">

            <div className="little-scanner w-[20px] h-[20px] absolute bg-green-950 animate-moveslider opacity-10 flex-none"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex quia distinctio ea exercitationem corporis praesentium excepturi nemo minima. Nihil vitae tempore delectus quos alias. Blanditiis, incidunt mollitia! Iusto, deleniti.</p>
        </div>

        <div className="rightwing">
            <div className="lg:h-[50px] lg:w-[200px] rounded-sm bg-green-950 opacity-10 pl-2 pr-5">
                <h5 className="text-white text-sm font-poppins">Title</h5>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis nulla repellat, rerum magni pariatur voluptates aperiam id sapiente ea autem, laudantium placeat est sunt tenetur debitis? Blanditiis, fugiat quam!</p>
            </div>
        </div>

        </div>
        </main>
    )
}
