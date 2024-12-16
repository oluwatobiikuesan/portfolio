import { useEffect, useState, useRef } from "react";

let blogitems = [
    {item:{ note: "this is the first blog post", date_published: "20 Feb 2024"} }, 
    {item: {note: "this is the second blog post here, please make a post here", date_published: "12 Dec 2024"}}
  ]
export default function BlogSection() {
    const [postcontent, setPostContent] = useState(blogitems);
    const postText = useRef <null | HTMLTextAreaElement>(null);
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        setPostContent(blogitems);
      }, [count]);
  return (
    <section id='s2 blog' className='half-s ntp'>
    <div className='showcase'>
      <img height={"100%"} src='src\assets\video\bg.gif'>
      </img>
    </div>
    <div className='mini-blog'>
      <div className='mnote'>
        <img className='round-image' src='https://images.unsplash.com/photo-1567338783090-f9c90dddc63b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' height={20} width={20}></img>
          <p>Recent updates will be made and previewed in this section. Ensuring that i touch different aspect of web content is very essential for this portfolio project.</p>
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
  )
}


function createPost({count, setCount, postText}: any){
    // alert(count + " " + postText.current?.value)
    const date = new Date();
    let month : any = date.getUTCMonth() + 1;
    switch(month){
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;  
      case 5:
        month = "May";
        break;     
      case 6:
        month = "Jun";
        break; 
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sep";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
      default:
        return "Month does not exist";
    }
    
    let created_time = date.getDay() + " " +  month + " " + date.getUTCFullYear();    
    if(postText.current?.value == ""){
    }else{
    // updates the array of the post
    setCount(count+1);
    blogitems.unshift({item: {note: `${postText.current?.value}`, date_published: created_time}});
    }
    postText.current.value = "";
    }