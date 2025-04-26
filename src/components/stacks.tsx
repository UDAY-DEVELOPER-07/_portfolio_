import { title } from "process";
import StackIcon from "tech-stack-icons";

const stacks = [
  { name: "HTML5",title: "HTML" },
  { name: "CSS3",title: "CSS" },
  { name: "Js",title: "JavaScript" },
  { name: "Java", title: "Java" },
  { name: "Reactjs",title: "React" },
  { name: "Nextjs2",title: "NextJS" },
  { name: "Node.js",title: "NodeJS" },
  { name: "Tailwind CSS",title: "TailwindCSS" },
  { name: "Bootstrap4",title: "Bootstrap" },
  { name: "Linux",title: "Linux" },
  { name: "Git",  title: "Git" },
  { name: "Github", title: "Github" },
  { name: "Python", title: "Python" },
  { name: "Shadcnui", title: "ShadcnUI" },
  { name: "Typescript", title: "Typescript" },
  { name: "Canva", title: "Canva" },
  { name: "NPM",  title: "NPM" },
  { name: "Gsap", title: "Gsap" },
  { name: "slack", title: "Slack" },
  { name: "ubuntu", title: "Ubuntu" },
];

export default function Stacks() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 mt-10 mb-10">
      {stacks.map((stack, index) => {
        const iconName = `${stack.name}`.toLowerCase()
          .replace(/\s+/g, '')
          .replace(/\./g, '');

        return (
          <div key={index} className="flex justify-center bg-amber-500 h-32 w-32 rounded-[50%] border-[1px] border-amber-300 backdrop-blur-2xl flex-col items-center mx-2 hover: cursor-zoom-in hover:scale-120 transition-transform duration-300 ease-in-out">
            <StackIcon name={iconName} style={{height: "2.8125rem",width: "2.815rem"}} />
            <span className="font-michroma-rise text-shadow-2xs text-[12px] font-bold mt-2">{stack.title}</span>
          </div>
        );
      })}
    </div>
  );
}
