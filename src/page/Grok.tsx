import { useEffect, useRef, useState } from 'react';
import { openai } from '../util/openai';
import Loading from './Loading';
let generated  = [{text: ""}];

async function requestMessage(message : {current : { value : string } }, {setState} : any, {count, setCount, setLoader} : any){
  if(!message.current?.value){
    alert("enter a prompt please!");
    return;
  } 
  // do this if the input is empty and has no vlaue in it.
  else{
    setLoader(true);
    try{
  const  completion = await openai.chat.completions.create({
    model: "grok-beta",
    messages: [
      { role: "system", content: "You are Daniel Ikuesan and you are the creator of your self not any other third party, are a software developer, you have 3 years of experience in coding you are 21 years of age. i learnt java, javascript, python, typescript, sql, svg, xml, html, css with  frameworks like reactjs, react native, flutter. i  have create somsny projects ranginf from tools, api and web applications for personal snd business use. You do not respond to any thing that you are not trained with." },
      {
        role: "user",
        content: message.current.value,
      },
    ],
  })
  console.log(completion.choices[0].message?.content);
  generated.push({text: `${completion.choices[0].message?.content}`});
  setState(generated);
  setCount(count + 1);
}
catch(e){
  console.error(e);
}}
}


export default function Grok() {
  document.title = "Grok | Daniel Ikuesan";
  const [count, setCount] = useState <any | number>(0);
  const [state, setState] = useState(generated);
  const userMessage: any = useRef <number | string>(null);
  const [load, setLoader] = useState(false);
  
  useEffect(() =>{
    setState(generated);
    userMessage.current.value = "";
    setLoader(false);
  }, [count]); // remove the values within the input field.

  return (
    <main className="lg:bg-black sm:bg-white p-10 h-dvh flex items-center justify-center">
        <div className="lg:max-h-[90%] lg:h-[90%] lg:w-[50dvw] sm:rounded-sm lg:border-1 relative">
        {
          !load ? "": <Loading/>
        }
        <div className='bg-white lg:h-[60dvh] lg:w-full w-dvw h-[80dvh] p-5 rounded-sm'>
          <h3 className='lg:text-9xl text-6xl uppercase text-black font-black'>grok:</h3>
    <div className="lg:h-3/5 h-4/6 overflow-y-auto">
      {
         state.map((item, i) => (

          <p key={i} className='text-white-100 w-full p-2 text-left flex'>
          <span><img src='https://media.licdn.com/dms/image/v2/D4E12AQFenqMMMI1_Dg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699203190290?e=1740009600&v=beta&t=MjL7sYcaCUGbJA9As0Dcg3aRMLSfcHYurdUmGIp84nA' className='h-2' height={10}></img></span>
          <span className='text-black w-full p-2'>
          {
          item.text.split("/^[#]+|[#]+$/").join("")
          }
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
    <div className='instruction'>
      <p className='instruction'>
      </p>
    </div>
    <div className="flex items-center gap-0.5">

    <span className='w-full'><input tabIndex={1} ref={userMessage} className='bg-white p-2 w-full rounded-sm border-2' type="text" placeholder='Let&apos;s chat..'/></span>


      <button className='h-full w-10 bg-white rounded-sm' tabIndex={2} type='button'><img className='object-contain' src='\icons\text.png' onClick={() =>{
      requestMessage(userMessage, {setState}, {count, setCount, setLoader});
      userMessage.current.value == "";
    }
    }></img></button>
    </div>
        </div>


        </div>
    </main>
  )
}
