import '../style/home.css'
import {motion} from 'motion/react';
import {author as information} from '../assets/infomation.json';
export default function Home() {
  let text = [{item: "i am a software engineer.", color: "yellow"}, {item:"i am a computer science student.", color: "red"}, {item: "i am a graphics designer."}];
  text = text.map(items => {return items});
  const indefinite = "indefinite";
  let svgattribute= {cx: "", cy: "", x: "", y: ""};

  text.map(items => {return items.item});
  return (
    <main className='home'>
        <section className='user-container homepage'>
          <div className='content'>
          <svg className='loadx'>
            <circle cx={50} cy={50} r={10} fill='yellow' style={{fillOpacity: "0.2"}}>
              <animate attributeName='r'
              from={10}
              to={2}
              begin={"0s"} dur={"0.2s"}
              repeatCount={"indefinite"}></animate>
            </circle>
          </svg>
          <h5>Hi! my name is...</h5>
            <h3>Oluwatobi Ikuesan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident ducimus in, quae omnis nam nihil asperiores doloremque, optio ratione modi, soluta ab architecto! Magni iusto libero sapiente maiores nisi?
              <br></br>
              <svg className='lx'>
          <circle cx={10} cy={20} r={2} fill='yellow'
          >
            <animate
            attributeName='r'
            from={2}
            to={10}
              begin={"2.8s"}
              dur={"0.2s"}
              repeatCount={3}
              repeatDur={"1s"}>

            </animate>
          </circle>
          <line x1={10} y1={20} x2={"100%"} y2={20} stroke='white' strokeWidth={1}>
            <animate
            attributeName='x2'
            begin={"0s"}
            from={0}
            to={500}
            dur={"5s"}
            fill='freeze'
            repeatCount={"1"}>
            </animate>
          </line>
        </svg>
        <p className='au highlight'>
          {text.map((item, i) => (
            <motion.span
            key={i}
            initial={{opacity: 0}}
            animate={{
              transition: {duration: 2, delay:i++},
              opacity: 1,
              color: item.color
            }}
            >
              {item.item}{" "}
            </motion.span>
          ))}
        </p>
            </p>
        
            <div className='programming-lang'>
            <h5>I understand the following language</h5>
              {
                information.language.map((items, i) => (
                  <img height={20} src={items} key={i} style={{margin: 10}}></img>
                ))
              }
              </div> 
            </div>


            <div className='mdxf'>
              <svg>
                <circle
                cx={100} cy={100} r={20} fill='white' fillOpacity={"0.2"}>
                </circle>
                <circle cx={100} cy={100} r={10} fill='white'>
                  <animate begin={"2s"}
                  dur={"1s"}
                  attributeName='cy'
                  from={100}
                  to={200}>
                  </animate>
                  <animate
                  from={10}
                  to={1}
                  attributeName='r'
                  begin={"2s"}
                  dur={"0.6s"}
                  repeatCount={indefinite}>
                  </animate>
                  </circle>
                  <line
                  x1={100} y1={100} x2={100} y2={200} stroke='white'>
                  </line>
              </svg>
            </div>
            </section>
    </main>
  )
}
