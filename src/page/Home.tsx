import { PrimaryButton } from '../component/ui/PrimaryButton';
import {  Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from '../component/ui/Container';

export default function Home() {
  // let item = "i am a software engineer. i am a computer science student. i am a graphics designer."
  return (
    <main className='home'>
    <section className='text-white w-full 
        bg-black backdrop-blur-2xl lg:p-10 pb-10 pt-10'>
    <div className='flex items-center justify-center flex-col'>
    <WelcomePage/>
    <LanuageSection/>
    <AIBoardSection/>
    <VisionBoard/>
    </div>
</section>
    </main>
  )
}



function WelcomePage(){

  const [bounceCount, setBounceCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setBounceCount(bounceCount + 1);
    }, 950)
  }, [bounceCount]);

  return(
    <div className='content flex lg:flex-row w-full bg-black lg:h-[70dvh] rounded-2xl justify-center items-center p-10 flex-col'>
            
    <div className='flex flex-col w-full items-start'>

    {/* The text information. */}

    <h5 className={`text-yellow-200 p-2 lg:text-sm lg:text-left lg:w-full animate-pulse transition-all text-center text-sm`}>Hello there, my name is</h5>
     <h1 className='lg:text-8xl text-5xl w-full text-left font-bold'>Oluwatobi Ikuesan</h1>

     <p className='text-pretty lg:w-[80%] text-left lg:pl-0 lg:pr-0'>I am very passionate about technological advancement, obsession with developing tools and innovation to make business process easier and enhance individual quality of life. <mark>This is my mission.</mark></p>
    <p className='p-10 w-full'>
      <Link to='project' className='text-purple-700'>View Project &gt;</Link>
    </p>
   </div>



   <div className='bg-gradient-to-b from-black to-transparent h-full w-full p-10 rounded-2xl lg:border-1 border-white hover:brightness-75 cursor-pointer transition-all duration-500'>
    <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='lg:h-[100%] h-[200px] w-full lg:object-cover lg:object-center object-contain'></img>
    </div>
</div>
  )
}

const skillsImages = {
  styles: "lg:h-[100px] lg:w-[100px] w-[30px] h-[30px] hover:animate-pulse cursor-pointer"

}
function LanuageSection(){
  return(
    <Container>
      <h2 className='lg:text-5xl text-3xl w-[100%] font-black text-left'>Language & Skills</h2>
      <div className='p-1 flex-row flex'>
        {/* java image */}
        <img src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-1024.png"} height="20px" className={skillsImages.styles}/>
        {/* python image*/}
        <img src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png"} height="20px" className={skillsImages.styles}/>
        {/* javascript image */}
        <img src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-1024.png"} height="20px" className={skillsImages.styles}/>
        {/* SQL */}
        <img src={"https://cdn3.iconfinder.com/data/icons/file-extension-11/512/sql-file-extension-format-digital-1024.png"} height="20px" className={skillsImages.styles}/>
      </div>
    </Container>
  )
}

function AIBoardSection(){
  const navigate = useNavigate();

  return(
  <Container className='ai-model mb-10'>
                <small className='text-gray-500 uppercase font-bold'>Try out my ai chat</small>
                <h2 className='lg:text-5xl text-3xl font-black'>AI Integration</h2>
                              <p className='text-sm pb-5 lg:text-lg'>LLM was intergrated in this website, xAi specifically, I chose this ai and model because the mode at which the model was been trained and was properly supervised and does not contain any inadequate data, therefore for the output are nature and precise; not 100%, but atleast 99.9%, <b>"Elon Musk"</b></p>
                  <PrimaryButton className={"bg-amber-50 text-black rounded-sm font-normal text-sm p-1"} to={"/ai"} onClick={()=> navigate("/ai")}>Start Chatting!</PrimaryButton>
              
              <div className='pt-5 relative after:hidden before:hidden overflow-hidden
              
              after:content-[""] after:lg:block after:opacity-0 after:lg:opacity-100 after:w-[300px] after:h-[300px] after:bg-black after:absolute after:rounded-full after:z-10 after:top-2 after:bottom-0 after:-left-65

               before:content-[""] before:lg:block before:opacity-0 before:lg:opacity-100 before:w-[300px] before:h-[300px] before:bg-black before:absolute before:rounded-full before:z-10 before:top-2 before:bottom-0 before:-right-65
              
            
              '>
              <img src='https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl object-cover h-[300px] w-full'>
              </img>
              </div>
            </Container>
 
  )
}


function VisionBoard() {
  return(
    <Container className='vision bg-black rounded-md'>
    <div>
      <h2 className='text-5xl font-black'>Vision</h2>
      <small className='mini-subhead'>Information about the vision yet to be made.</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab error animi nam exercitationem nihil veniam neque accusamus doloremque, quidem reprehenderit voluptatibus, suscipit repellendus, reiciendis eos delectus officia dolore consectetur?</p>
    </div>
  </Container>
  )
}