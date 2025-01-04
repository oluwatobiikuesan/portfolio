import '../style/home.css'
import {motion} from 'motion/react';
import {author as information} from '../assets/infomation.json';
import {socialHandle} from '../assets/infomation.json'
import { PrimaryButton } from '../component/PrimaryButton';
import {  useNavigate } from 'react-router-dom';


export default function Home() {
  let item = "i am a software engineer. i am a computer science student. i am a graphics designer."
  const navigate = useNavigate();

  return (
    <main className='home'>
        <section className='user-container homepage'>
          <div className='content'>
         <div className='in'>
         {/* The text information. */}
         <h5 className='subheading'>Hello there, my name is</h5>
          <h1 className='bigtitle'>Oluwatobi Ikuesan</h1>
          <p>I am very passionate about technological advancement, obsession with developing tools and innovation to make business process easier and enhance individual quality of life. <mark>This is my mission.</mark></p>
        </div>
        
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
            </div>
            
          <div className='socialContainer'>
          <h4 className='subheading'>Social Media and  Project:</h4>
          <div className='socialHandles'>
            {
              socialHandle.map((items, i) => (
                <span>
                  <a key={i} href={items.link}><img key={i} src={items.image} height={20}></img></a>
                </span>
              ))
            }
          </div>
          {/* animation for my details and currrent doings. */}
          <div className='details'>
          {
           item.split(" ").map((itemSplit, i) => (
                <motion.span initial={{opacity: 0}}
                animate={{opacity: 1, color: (itemSplit.includes("software") || itemSplit.includes("engineer") || itemSplit.includes("designer.")  ? "orange" : "white"), fontWeight: itemSplit === "software" ? "bolder" : "normal"}}
                transition={{duration: 1, delay: i/ 3}}>
                  {itemSplit} {" "}
                </motion.span>
              ))
          }
          </div>

          <div className='plang'>
            {/* author programming language area */}
            {
              information.language.map((items, i) => (
                <img src={items} height={20} key={i} className='in-img'></img>
              ))
            }
          </div>
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