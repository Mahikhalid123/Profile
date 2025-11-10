import TechBadge from "./TechBadge";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col w-[300px] md:w-full">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-indigo-600 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          {project.tech.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
