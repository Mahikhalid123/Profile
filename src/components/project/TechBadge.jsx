import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiReactquery, SiRedux, SiReactrouter } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-500 w-5 h-5" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-500 w-5 h-5" />,
  Node: <FaNodeJs className="text-green-600 w-5 h-5" />,
  NodeJS: <FaNodeJs className="text-green-600 w-5 h-5" />,
  MongoDB: <SiMongodb className="text-green-500 w-5 h-5" />,
  Express: <SiExpress className="text-gray-700 w-5 h-5" />,
  JavaScript: <FaJsSquare className="text-yellow-400 w-5 h-5" />,
  CSS: <FaCss3Alt className="text-blue-600 w-5 h-5" />,
  NextJS: <SiNextdotjs className="text-white w-5 h-5" />,
  MERN: <FaReact className="text-blue-500 w-5 h-5" />,

  "TanStack Query": <SiReactquery className="text-pink-500 w-5 h-5" />,
  Redux: <SiRedux className="text-purple-600 w-5 h-5" />,
  "React Router DOM": <SiReactrouter className="text-red-500 w-5 h-5" />,
};


export default function TechBadge({ tech }) {
  return (
    <div className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
      {techIcons[tech] || <span className="text-sm">{tech}</span>}
      <span className="text-sm font-medium">{tech}</span>
    </div>
  );
}
