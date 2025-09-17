import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "TOMATO",
        desc: "TOMATO — A MERN stack food delivery app with ordering, tracking, and management features.",
        image:"/projects/TOMATO-a-food-delivery-app.png",
        tags:["ReactJs", "JavaScript", "NodeJs","MongoDB" , "ExpressJs"],
        demoUrl:"https://food-delivery-app-front-end.onrender.com/",
        githubUrl:"https://github.com/JalajB/Food-Delivery-App",
    },
    {
        id: 2,
        title: "SnakeMania",
        desc: "A classic Snake game recreated using HTML, CSS, and JavaScript for interactive play in the browser.",
        image:"/projects/SnakeMania-a-snake-game.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"https://github.com/JalajB/snakeGame",
    },
    {
        id: 3,
        title: "Time tracking dashboard preview",
        desc: "A minimalist time-tracking dashboard UI built with pure HTML and CSS (no JavaScript).",
        image:"/projects/time-tracking-dashboard.png",
        tags:["HTML", "CSS"],
        demoUrl:"#",
        githubUrl:"https://github.com/JalajB/time-tracking-dashboard-preview",
    },
    {
        id: 4,
        title: "Notification Preview (Frontend Mentor)",
        desc: "A compact HTML/CSS/JavaScript component that simulates and previews in-app or push notifications.",
        image:"/projects/notification-preview.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"https://github.com/JalajB/notification-page-preview",
    },
    {
        id: 5,
        title: "Age Calculator",
        desc: "A simple web app that calculates a person’s age from their birthdate using HTML, CSS, and JavaScript.",
        image:"/projects/age-calculator.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"https://github.com/JalajB/age-calculator",
    },
    
]

export const ProjectsSection = () =>{

    return <section id='projects' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">

                           <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> 
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{project.desc}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>

                                </a>
                                <a href={project.githubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                                    
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://dev.to/jalajb">
                    Welcome to my Dev.to<ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}