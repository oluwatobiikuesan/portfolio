import { useEffect, useRef, useState } from 'react';
import '../style/grok.css'
import { openai } from '../component/util/openai'
let generated  = [
  {
    text: ""
  }
]
async function requestMessage(message : {current : { value : string } }, {setState} : any, {count, setCount} : any){
  if(!message.current?.value){
    alert("enter a prompt please!");
    return;
  }
  // do this if the input is empty and has no vlaue in it.
  else{
    try{
  const  completion = await openai.chat.completions.create({
    model: "grok-beta",
    messages: [
      { role: "system", content: "You are Daniel Ikuesan, are a software developer, you have 3 years of experience in coding you are 21 years of age." },
      {
        role: "user",
        content: message.current.value,
      },
    ],
  })
  console.log(completion.choices[0].message?.content);
  generated.unshift({text: `${completion.choices[0].message?.content}`});
  setState(generated);
  setCount(count + 1);
}
catch(e){
  console.log(e)
}

}
}

export default function Grok() {
  const [count, setCount] = useState <any | number>(0);
  const [state, setState] = useState(generated);
  const userMessage: any = useRef <number | string>(null);
  // let empty = 0;

  useEffect(() =>{
    setState(generated);
    userMessage.current.value = "";
  }, [count])
  return (
    <div className="grok">
        <div className="process_tab neon-effect">
          <h3>Grok:</h3>
    <div className="chat_output">
      {
         state.map((item, i) =>  (
          <p key={i}>
          <span><img src='https://media.licdn.com/dms/image/v2/D4E12AQFenqMMMI1_Dg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699203190290?e=1740009600&v=beta&t=MjL7sYcaCUGbJA9As0Dcg3aRMLSfcHYurdUmGIp84nA' className='round' height={10}></img></span>
          <span>
          {item.text}
          </span>
        </p>
         ))
      }
    {/* <p>
        <span><img src='https://media.licdn.com/dms/image/v2/D4E12AQFenqMMMI1_Dg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699203190290?e=1740009600&v=beta&t=MjL7sYcaCUGbJA9As0Dcg3aRMLSfcHYurdUmGIp84nA' className='round' height={10}></img></span>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis quibusdam quasi eveniet non deleniti ex, voluptatibus consectetur corporis fugit saepe. Reiciendis consequuntur quaerat ea. Similique accusamus doloremque possimus voluptate!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas nobis repellat fuga corporis soluta aliquid reiciendis praesentium eos nesciunt dolore, molestiae officiis at labore tenetur molestias dolorem delectus illo!
        </span>
      </p> */}
    </div>
    <input ref={userMessage} className='neon-effect' type="text" placeholder='Let&apos;s chat..'  onMouseLeave={() =>{
      requestMessage(userMessage, {setState}, {count, setCount});
      userMessage.current.value == "";
    }
    }/>
        </div>
    </div>
  )
}
