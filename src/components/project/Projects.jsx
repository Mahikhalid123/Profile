import ProjectCard from "./ProjectCard";

const projects = [
   {
    title: "Vital Sync",
    description:
      "A responsive health and productivity app that syncs user data in real time. Built using React, Tailwind CSS, and TanStack Query for efficient state and API management.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "JavaScript"],
    image: "/images/vitalSync.png",
    liveLink: "https://digital-clock-ten-psi-89.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Digital-Clock/tree/main/src",
  },
  {
    title: "PopCorn",
    description:
      "A dynamic movie search and rating app using public APIs. It features watchlists, filtering, and smooth routing powered by React Router DOM and TanStack Query.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "React Router DOM"],
    image: "/images/Popcorn.png",
    liveLink: "https://the-wild-oasis-mjkp.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/The-Wild-Oasis",
  },
  {
    title: "MK Brand",
    description:
      "An elegant e-commerce brand website that displays products, categories, and details using React and Redux for state management, with Tailwind CSS styling.",
    tech: ["React", "Redux", "Tailwind CSS", "JavaScript"],
    image: "/images/Mk.png",
    liveLink: "https://vercel.com/mahikhalid123s-projects/digital-clock-p4u4",
    githubLink: "https://github.com/Mahikhalid123/Daraz",
  },
  {
    title: "Pizza",
    description:
      "An interactive pizza ordering app built with React and Tailwind CSS. It features real-time cart updates, order tracking, and smooth navigation using React Router DOM.",
    tech: ["React", "Tailwind CSS", "React Router DOM", "JavaScript"],
    image: "/images/pizza.png",
    liveLink: "https://pop-corn-seven.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Pizza",
  },
  {
    title: "Currency Converter",
    description:
      "A modern currency converter that fetches live exchange rates from APIs and updates instantly using React TanStack Query and Tailwind CSS for UI.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "JavaScript"],
    image: "/images/currency.png",
    liveLink: "https://converter-nine-nu.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Converter",
  },
  {
    title: "PopCorn",
    description:
      "A dynamic movie search and rating app using public APIs. It features watchlists, filtering, and smooth routing powered by React Router DOM and TanStack Query.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "React Router DOM"],
    image: "/images/Popcorn.png",
    liveLink: "https://the-wild-oasis-mjkp.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/The-Wild-Oasis",
  },
  {
    title: "MK Brand",
    description:
      "An elegant e-commerce brand website that displays products, categories, and details using React and Redux for state management, with Tailwind CSS styling.",
    tech: ["React", "Redux", "Tailwind CSS", "JavaScript"],
    image: "/images/Mk.png",
    liveLink: "https://vercel.com/mahikhalid123s-projects/digital-clock-p4u4",
    githubLink: "https://github.com/Mahikhalid123/Daraz",
  },
  {
    title: "Vital Sync",
    description:
      "A responsive health and productivity app that syncs user data in real time. Built using React, Tailwind CSS, and TanStack Query for efficient state and API management.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "JavaScript"],
    image: "/images/vitalSync.png",
    liveLink: "https://digital-clock-ten-psi-89.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Digital-Clock/tree/main/src",
  },
  
  {
    title: "Pizza",
    description:
      "An interactive pizza ordering app built with React and Tailwind CSS. It features real-time cart updates, order tracking, and smooth navigation using React Router DOM.",
    tech: ["React", "Tailwind CSS", "React Router DOM", "JavaScript"],
    image: "/images/pizza.png",
    liveLink: "https://pop-corn-seven.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Pizza",
  },
  {
    title: "Currency Converter",
    description:
      "A modern currency converter that fetches live exchange rates from APIs and updates instantly using React TanStack Query and Tailwind CSS for UI.",
    tech: ["React", "Tailwind CSS", "TanStack Query", "JavaScript"],
    image: "/images/currency.png",
    liveLink: "https://converter-nine-nu.vercel.app/",
    githubLink: "https://github.com/Mahikhalid123/Converter",
  },
];

export default function Projects() {
  return (
    
    <section
      id="projects"
      className="w-screen bg-gray-50 dark:bg-gray-900 flex justify-center mt-[575px] md:mt-0"
    >
      
      <div className="container mx-auto  md:px-12 max-w-7xl">
         <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 mt-6">
          My{" "}
          <span className="font-extrabold text-3xl text-blue-900">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 place-items-center">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}


        </div>
      </div>
    </section>
  );
}
