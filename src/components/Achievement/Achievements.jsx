import {  Star, Rocket, Award, Code2, Medal } from "lucide-react";

const achievements = [
 
  {
    title: "Built 10+ Frontend Projects",
    description:
      "Developed multiple real-world projects using React, Tailwind CSS and Supabase — all deployed on Vercel.",
    icon: <Rocket className="w-10 h-10 text-indigo-500" />,
    year: "Sep 2025",
  },
  {
    title: "Open Source Contributor",
    description:
      "Contributed to GitHub repositories and improved UI/UX for open-source React projects.",
    icon: <Code2 className="w-10 h-10 text-green-500" />,
    year: " Aug 2025",
  },
 {
  title: "Cricket Medalist",
  description:
    "Won a gold medal in the college cricket tournament for outstanding performance and teamwork on the field.",
  icon: <Medal className="w-10 h-10 text-green-500" />,
  year: "Jan 2022",
},

  {
    title: "Personal Portfolio Featured",
    description:
      "My React + Tailwind portfolio was showcased by a coding community for design and responsiveness.",
    icon: <Star className="w-10 h-10 text-purple-500" />,
    year: "Nov 2025",
  },
  {
    title: "Continuous Learner",
    description:
      "Completed multiple online React, JavaScript, and Tailwind courses through self-paced learning.",
    icon: <Award className="w-10 h-10 text-blue-500" />,
    year: "Ongoing",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-screen py-20 bg-gray-50 dark:bg-gray-900 flex justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
         <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 mt-5">
          My <span className="text-indigo-700">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center group hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {item.description}
              </p>
              <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
