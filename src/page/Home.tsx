import '../style/home.css'
import {motion} from 'motion/react';
import {author as information} from '../assets/infomation.json';
import { PrimaryButton } from '../component/PrimaryButton';
import { useEffect, useRef, useState } from 'react';

let blogitems = [
  {item:{ note: "this is the first blog post", date_published: "20 Feb 2024"} }, 
  {item: {note: "this is the second blog post here, please make a post here", date_published: "12 Dec 2024"}}
]

export default function Home() {
  const [postcontent, setPostContent] = useState(blogitems);
  const postText = useRef <null | HTMLTextAreaElement>(null);
  const [count, setCount] = useState<number>(0);
  let text = [{item: "i am a software engineer.", color: "yellow"}, {item:"i am a computer science student.", color: "red"}, {item: "i am a graphics designer."}];
  text = text.map(items => {return items});


  useEffect(() => {
    setPostContent(blogitems);
  }, [count]);

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum quaerat eum harum voluptatum deleniti aperiam quod officia ipsa facilis excepturi ullam, eaque enim perspiciatis reiciendis inventore nostrum porro odit.</p>
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
                <h2>LLL Integration</h2>
                              <p>LLM was intergrated in this website, xAi specifically, I chose this ai and model because the mode at which the model was been trained and was properly supervised and does not contain any inadequate data, therefore for the output are nature and precise; not 100%, but atleast 99.9%: says <b>"Elon Musk"</b></p>
                  <PrimaryButton to={"/grok-i"} onClick={() => {
                }}>Start Chatting!</PrimaryButton>
              </div>
            </div>
            </section>
            <section id='s2' className='half-s ntp'>
                <div className='showcase'>
                  <img height={"100%"} src='src\assets\video\bg.gif'>
                  </img>
                </div>
                <div className='mini-blog'>
                  <div className='mnote'>
                    <img className='round-image' src='https://images.unsplash.com/photo-1567338783090-f9c90dddc63b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' height={20} width={20}></img>
                      <p>Recently updates will be made and previewed in this section. Ensuring that i touch different aspect of web content is very essential for this portfolio project.</p>
                      <div className='input_blog'>
                        <textarea ref={postText}></textarea>
                        <button type='button' onClick={() => createPost({count, setCount, postText})}>Post</button>
                      </div>
                    <div className='postBody'>
                        {
                          postcontent.map((items, index ) =>
                          (
                            <div key={index} className='postItem'>
                              <p>{items.item.note}</p>
                              <span className='date_p'>{items.item.date_published}</span>
                            </div>
                          ))
                        }
                    </div>
                  </div>
                </div>
            </section>
    </main>
  )
}

function createPost({count, setCount, postText}: any){
// alert(count + " " + postText.current?.value)
const date = new Date();
let created_time = date.getDate().toString();    
if(postText.current?.value == ""){
}else{
// updates the array of the post
setCount(count+1);
blogitems.unshift({item: {note: `${postText.current?.value}`, date_published: created_time}});
}
}