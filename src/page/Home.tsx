import '../style/home.css'
import {motion} from 'motion/react';
import {author as information} from '../assets/infomation.json';
import {socialHandle} from '../assets/infomation.json'
import { PrimaryButton } from '../component/PrimaryButton';
import {  useNavigate } from 'react-router-dom';


export default function Home() {
  let text = [{item: "i am a software engineer.", color: "yellow"}, {item:"i am a computer science student.", color: "red"}, {item: "i am a graphics designer."}];
  text = text.map(items => {return items});
  const navigate = useNavigate();

  // The text annimation of the things i am doing
  text.map(items => {return items.item});
  return (
    <main className='home'>
        <section className='user-container homepage'>
          <div className='content'>
          <svg id='blinknl' height={"100%"} width={"100%"}>
            <circle cx={20} cy={20} r={10} fillOpacity={0.5} fill='yellow'>
              <animate
              begin={"0s"}
              dur={"0.5s"}
              attributeName='r'
              from={5}
              to={10}
              repeatCount={"indefinite"}>
              </animate>
            </circle>
          </svg>
          <aside>
            <div className='svg-follow'>
              {/* svg graphics to follow the text as been structured */}
                <svg height={"100%"}>
                  <circle cy={10} cx={10} r={10} fill='white'>
                  </circle>
                  <circle cy={180} cx={10} r={10} fill='white'>
                  </circle>
                  <circle cy={225} cx={10} r={5} fill='white'>
                  </circle>
                  <line x1={10} y1={0} x2={10} y2={300} stroke='white'></line>
                </svg>
            </div>
         <div className='in'>
         {/* The text information. */}
         <h4>Hi! My name is,</h4>
          <h1>Oluwatobi Ikuesan</h1>
          <p>I am very passionate about technological advancement, obsession with developing tools and innovation to make business process easier and enhance individual quality of life. <mark>This is my mission.</mark></p>
          <h4>Social Media and  Project:</h4>
          <div className='socialHandles'>
            {
              socialHandle.map((items, i) => (
                <span>
                  <a key={i} href={items.link}><img src={items.image} height={20}></img></a>
                </span>
              ))
            }
          </div>
          <div className='inf'>
          {
            text.map((items, index) => (
              <motion.span
              initial={{opacity: 0, color: items.color}}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: "2"
              }} key={index}>
                {items.item}{" "}
              </motion.span>
            ))
          }
          </div>

          <div id='plang'>
            {/* author programming language area */}
            {
              information.language.map((items, i) => (
                <img src={items} height={20} key={i} className='in-img'></img>
              ))
            }
          </div>
         </div>
          </aside>
            </div>
            
            {/* Grok ai model section */}
            <div className='ai-model'>
              <div>
                <small>Try out my ai chat</small>
                <h2>LLM Integration</h2>
                              <p>LLM was intergrated in this website, xAi specifically, I chose this ai and model because the mode at which the model was been trained and was properly supervised and does not contain any inadequate data, therefore for the output are nature and precise; not 100%, but atleast 99.9%: says <b>"Elon Musk"</b></p>
                  <PrimaryButton to={"/ai"} onClick={()=> navigate("/ai")}>Start Chatting!</PrimaryButton>
              </div>
            </div>
            </section>
    </main>
  )
}