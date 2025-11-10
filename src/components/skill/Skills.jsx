import {
  Code2,
  Globe,
  Database,
  Cpu,
  Boxes,
} from "lucide-react"; 

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-indigo-600" />,
    items: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6 text-pink-600" />,
    items: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind", "Bootstrap","TypeScript","DOM"],
  },
 
  {
    category: "Databases",
    icon: <Database className="w-6 h-6 text-yellow-600" />,
    items: ["Supabase","MongoDB"],
  },
  {
    category: "Libraries & Tools",
    icon: <Boxes className="w-6 h-6 text-blue-600" />,
    items: [
     
      "Git",
      "Vercel",
      "React Query / TanStack Query",
      "Redux",
      "React Router Dom"

      
    ],
  },
  {
    category: "Other",
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    items: ["REST APIs",  "Cloud Deployment", ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-screen py-20 bg-gray-50 dark:bg-gray-900 flex justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 mt-6">
          My <span className="text-indigo-700">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
