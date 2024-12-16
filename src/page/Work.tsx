import '../style/work.css'
export default function Work() {
  return (
    <div className="work">
          <section>
            <svg className='title' height={"60dvh"} width={"100dvw"}> 
                <text y={250} x={110} stroke="var(--secondary-bg)" fill="none" strokeOpacity={0.5} style={{fontSize: "300px", fontFamily: "Poppins"}}>Projects</text>
            </svg>
            <div className='project_container'>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
              <ProjectTab/>
            </div>
          </section>
    </div>
  )
}


// const Modal = ({children} :any) => {
//   return(
//     <div className="large_modal">
//     {children}
//     </div>
//   )
// }

const ProjectTab = () => {
  return(
    <div className='project_item'>
    <img src='src\assets\svg\github-icon-1.svg'></img>
    <h5>title</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis quos quibusdam voluptate saepe provident officia autem cum necessitatibus mollitia, repudiandae in aperiam ad molestiae dignissimos alias. Ipsam, sequi ut!</p>
  </div>
  )
}