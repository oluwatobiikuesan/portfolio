interface projectInterface {
  title: string
  image: any | React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  desc: string
  link?: string
  root?: any
}

const projectData: projectInterface []= [
  {title: "Swiftbot",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales mauris quam, ac ornare lacus bibendum in. Suspendisse volutpat augue in mauris pellentesque, non suscipit tellus malesuada. Aliquam erat volutpat. Nulla scelerisque sollicitudin porttitor. Ut ac mi id lacus tempus vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquet turpis a erat dignissim, vel mollis enim ultrices. Curabitur nec quam vel nibh tristique semper eget at dui. Vestibulum vel hendrerit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ante neque, scelerisque ac hendrerit et, tincidunt vitae sapien. Nulla eget egestas tellus, sit amet interdum eros. Donec consectetur libero sed mi vestibulum, id volutpat enim molestie. Aliquam non vehicula sapien. Donec nec dictum ipsum. Suspendisse potenti. ",
    link: "https://google.com"
  },
  {title: "Swiftbot: Mastermind",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum is a desigin ee"
  },
  {title: "Hashtag Extractor",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum is a desigin ee"
  },
  {title: "Local Email Sorter",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum is a desigin ee"
  },
  {title: "Banking system application",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum is a desigin ee"
  },
]

export default function Work() {
  return (
    <div className="w-dvw h-dvh">
      <div className="bg-black h-dvh">
        <h3 className="text-white text-8xl p-10">Project Space</h3>
        <div className="w-full grid grid-cols-3 gap-y-5">
          { 
            projectData.map((items, index) => (
              <ProjectTab link={items.link} root={index % 2 == 0 ? "hover:rotate-1" : "hover:-rotate-1"} title={items.title} image={items.image} desc={items.desc} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


const ProjectTab = ({title, image, link, desc, root}: projectInterface) => {
  return(
    <div className={` project_item w-[300px] p-2 bg-white rounded-sm cursor-pointer ${root}`}>
    <img src={image} className="w-full h-[100px] object-cover object-center"></img>
    <h5 className="text-black font-bold text-sm pt-1.5 uppercase">{title}</h5>
    <a href={link} className="text-purple-600">visit link &gt;</a>
    <p className="text-black-100 max-h-[150px] overflow-hidden">{desc}</p>
  </div>
  )
}