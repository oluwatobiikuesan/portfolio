import { PrimaryButton } from '../component/ui/PrimaryButton';
import {  useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from '../component/ui/Container';
import axios from 'axios';

export default function Home() {
  // let item = "i am a software engineer. i am a computer science student. i am a graphics designer."
  return (
    <main className='home'>
    <section className='text-white w-full 
        bg-black backdrop-blur-2xl lg:p-10 pb-10 pt-10'>
    <div className='p-2 flex items-center justify-center flex-col gap-5'>
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
    <div className='content flex lg:flex-row w-[90dvw] bg-black lg:h-[70dvh] rounded-2xl justify-center items-center p-10 flex-col'>
            
    <div className=''>

    {/* The text information. */}

    <h5 className={`text-yellow-200 p-2 lg:text-sm lg:text-center lg:w-full animate-pulse transition-all text-center text-sm`}>Hello there, my name is</h5>
     <h1 className='lg:text-8xl text-3xl w-full text-center font-bold'>Oluwatobi Ikuesan</h1>

     <p className='text-pretty lg:w-[90%] text-center pl-5 pr-5'>I am very passionate about technological advancement, obsession with developing tools and innovation to make business process easier and enhance individual quality of life. <mark>This is my mission.</mark></p>
    <p className='text-center items-center justify-center flex pt-10'>
      <a href='project' className='text-purple-700'>View Project &gt;</a>
    </p>
   </div>


    <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[100%] w-full object-cover object-top'></img>
</div>
  )
}


function LanuageSection(){
  return(
    <Container>
      <h1 className='text-5xl font-black'>Language & Skills</h1>
    </Container>
  )
}

function AIBoardSection(){
  const navigate = useNavigate();

  return(
  <Container className='ai-model mb-10'>
                <small className='text-gray-500 uppercase font-bold'>Try out my ai chat</small>
                <h2 className='text-2xl'>LLM Integration</h2>
                              <p>LLM was intergrated in this website, xAi specifically, I chose this ai and model because the mode at which the model was been trained and was properly supervised and does not contain any inadequate data, therefore for the output are nature and precise; not 100%, but atleast 99.9%: says <b>"Elon Musk"</b></p>
                  <PrimaryButton className={"bg-amber-50 text-black rounded-sm font-normal text-sm p-1"} to={"/ai"} onClick={()=> navigate("/ai")}>Start Chatting!</PrimaryButton>
              
              <div className='p-5'>
              <img src='https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' height={"100%"} className='object-cover'>
              </img>
              </div>
            </Container>
 
  )
}


async function LinkendInProfilePost() {
  const option = {
    method: 'GET',
    url: 'https://linkedin-data-api.p.rapidapi.com/get-profile-posts',
    params: {
      username: 'adamselipsky'
    },
    headers: {
      'x-rapidapi-key': 'bcca577692msha919d06da911531p156025jsn7d60c23b0b2c',
      'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
    }
  };
  try{
    const response = await axios.request(option);
    console.log(response.data);
  }catch(e){
    console.log(e);
  }
}
LinkendInProfilePost();

function VisionBoard() {

  return(
    <Container className='vision bg-black rounded-md'>
    <div>
      <h2>Vision</h2>
      <small className='mini-subhead'>Information about the vision yet to be made.</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab error animi nam exercitationem nihil veniam neque accusamus doloremque, quidem reprehenderit voluptatibus, suscipit repellendus, reiciendis eos delectus officia dolore consectetur?</p>
    </div>
  </Container>
  )
}