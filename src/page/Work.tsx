import { Link } from 'react-router-dom';
import '../style/work.css';
const customButton = {textDecoration: "none", backgroundColor: "orange", padding: "5px 20px", color: "white", borderRadius: 5};

export default function Work() {
  return (
    <div className='work'>
        <main>
            <div className='top-slide'>
              <h1 className='heading-1'>My Work</h1>
              <span><Link style={customButton} to={"/contact"}>Quick Hire</Link></span>
            </div>
            <section>
              <div className='sec-1'>
                <h3>Project</h3>
                <div className='tab-item-container'>
                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='#'>Visit the site</a>
                  </TabProps>
                </div>

                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='#'>Visit the site</a>
                  </TabProps>
                </div>  

                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='#'>Visit the site</a>
                  </TabProps>
                </div> 

              </div>
            </div>


            <div className='sec-1'>
                <h3>Application Programming Interface</h3>
                <div className='tab-item-container'>
                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='https://tiktag.com'>Visit the site</a>
                  </TabProps>
                </div>

                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='#'>Visit the site</a>
                  </TabProps>
                </div>  

                <div className='details-container'>
                  <TabProps src={"https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Eligendi natus laboriosam necessitatibus consequuntur quas aspernatur doloribus sequi cupiditate, deserunt expedita quos ab perspiciatis saepe, rerum molestias inventore?
                      <a href='#'>Visit the site</a>
                  </TabProps>
                </div> 

              </div>
            </div>
            </section>
        </main>
    </div>
  )
}

const TabProps = ({children, ...root} : any) => {
  return(
    <div className='work-tab-main'>
      <img {...root} height={200} width={"100%"}></img>
      <p>{children}</p>
    </div>
  )
}