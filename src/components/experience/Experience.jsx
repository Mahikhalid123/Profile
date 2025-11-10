const experiences = [
  {
    title: "Frontend Developer (Trainee)",
    company: "Codiea.io",
    period: "May 2025 - Present",
    description:
      "Currently training as a Frontend Developer at Codiea.io, focusing on building responsive and scalable React applications. Gaining strong expertise in Tailwind CSS, Redux Toolkit, and TanStack Query for real-time API integration and state management. Collaborating with mentors and developers to create high-performance, modern user interfaces and refine best coding practices.",
  },
  {
    title: "Geofencing ",
    company: "Tech Growth Solutions",
    period: "Feb 2025 - Sep 2025",
    description:
      "Successfully developed and deployed location-based web applications using geofencing technology. Implemented precise area tracking, map-based data visualization, and smart notifications using React, Leaflet, and custom APIs. This project strengthened my understanding of real-time data handling, event-driven systems, and advanced frontend logic.",
  },
  {
    title: "Lead Generation ",
    company: "Tech Growth Solutions",
    period: "Sep 2025 - Nov 2025",
    description:
      "Specialized in building automated lead generation working and expertise. Collaborated with marketing teams to integrate lead analytics and optimize . This experience sharpened my analytical and frontend optimization skills.",
  }, 
  {
    title: "Software Engineering  Student",
    company: "Islamia University of Bahawalpur (IUB)",
    period: "Sep 2023 - Jul 2027 (Expected)",
    description:
      "Pursuing a Bachelor's degree in Software Engineering. Gained strong foundations in JavaScript, React, and modern web technologies. Worked on academic projects involving geofencing systems, lead generation tools, and full-stack applications using Node.js and MongoDB. Learned teamwork, agile methodologies, and software lifecycle management.",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="w-screen relative bg-gray-50 dark:bg-gray-900 py-20"
    >
       <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 mt-6">
          
        My <span className="text-blue-900">Experience</span>
      </h2>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-500 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-full md:w-5/12 hover:shadow-2xl transition">
                  <h3 className="text-xl font-bold text-indigo-600 mb-2">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    {exp.company} | {exp.period}
                  </span>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>

                <div className="hidden md:block absolute left-1/2 md:static transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 mt-6 md:mt-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
