import {color, delay, motion, useScroll} from 'framer-motion'
import { Outlet } from 'react-router-dom'
import '../style/home.css'
export default function Home() {
  const date = new Date();
    let text = "x d o o d l e".split(" ");
    let word = ["Software engineer,", "Graphics designer,", "Web developer","Video Editor,","Technician", "..."].map((items) => { return items.split("") });
  return (
    <div className='home'>
        <main>
            <section className='sec-1'>
           
            <div className='intro-text'>
                <p>Hi, my name is <mark>Daniel Ikuesan</mark></p>
                <p>I am a {word.map((items, i) => (
                    <motion.span style={{}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                        duration: 5,
                        delay: i+10/10
                    }}
                    key={i}>
                        {items}{" "}
                    </motion.span>
                ))}</p>
            </div>
            <div>
                <h2 className='main-text'>
                    {
                        text.map((items, i) => (
                          <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                            duration: 0.25,
                            delay: i / 10
                          }}
                          key={i}>
                            {items}
                          </motion.span>  
                        ))
                    }
                </h2>
                </div>
            </section>
            <section className='sec-2'>
              <div className='grid-2'>
                <div>
                  {
                    "Who i am".split(" ")
                    .map((items, i) => (
                      <motion.sub initial={{opacity: 0}}
                      WhileInView={{opacity: 1}}
                      key={i}
                      >
                        {items}
                      </motion.sub>
                    ))
                  }
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet velit voluptatem vel nemo obcaecati accusantium vitae non provident! Minima iusto vero consectetur neque blanditiis praesentium explicabo nostrum rerum voluptas eaque.
                  </p>
                </div>
              </div>
            </section>
            <section className='miniture'>
              <h1>{date.getFullYear().toString()}</h1>
            </section>
                 </main>
        <div>
        <Outlet/>
        </div>
    </div>
  )
}