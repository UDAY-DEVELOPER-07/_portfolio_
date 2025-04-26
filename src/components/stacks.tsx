import { style } from "motion/react-client";
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
  { name: "Gsap", title: "Gsap" },
];
const styles = {
  height: "2rem",
  width: "2em",
  pointerEvents: "none" as const
};
export default function Stacks() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 mb-10">
  {stacks.map((stack, index) => {
    const iconName = `${stack.name}`.toLowerCase()
      .replace(/\s+/g, '')
      .replace(/\./g, '');

    return (
      <div
        key={index}
        className="flex flex-col items-center justify-center bg-amber-400 text-amber-950
                   h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full shadow-2xl
                   border border-amber-300 backdrop-blur-2xl mx-2 
                   cursor-zoom-in hover:scale-110 transition-transform
                   duration-300 ease-in-out"
      >
        <StackIcon name={iconName} style={styles} />
        <span className="font-michroma-rise text-shadow-2xs text-[10px] sm:text-xs font-bold mt-2 text-center">
          {stack.title}
        </span>
      </div>
    );
  })}
</div>
  );
}
