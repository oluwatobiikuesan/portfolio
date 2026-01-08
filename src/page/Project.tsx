interface ProjectInterface {
  title: string;
  image: string;
  desc: string;
  link?: string;
}

const projectData: ProjectInterface[] = [
  {
    title: "Swiftbot",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop",
    desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    link: "https://google.com"
  },
  {
    title: "Swiftbot: Mastermind",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop",
    desc: "Lorem Ipsum is a design ee"
  },
  {
    title: "Hashtag Extractor",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop",
    desc: "Lorem Ipsum is a design ee"
  },
  {
    title: "Local Email Sorter",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop",
    desc: "Lorem Ipsum is a design ee"
  },
  {
    title: "Banking system",
    image: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1974&auto=format&fit=crop",
    desc: "Lorem Ipsum is a design ee"
  },
];

export default function Project() {
  return (
    <div className="min-h-screen w-full bg-slate-950 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center tracking-tight">
          Selected Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((item, index) => (
            <ProjectTab
              key={index}
              title={item.title}
              image={item.image}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectTab = ({ title, image, link, desc }: ProjectInterface) => {
  return (
    <div className="group bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-white font-bold text-xl mb-3 tracking-tight">{title}</h5>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {desc}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5">
            {link ? (
                 <a
                 href={link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
               >
                 View Project <span className="ml-1 text-xs">&rarr;</span>
               </a>
            ) : (
                <span className="text-slate-600 text-sm cursor-not-allowed">Coming Soon</span>
            )}

        </div>
      </div>
    </div>
  );
};
