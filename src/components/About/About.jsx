export default function About() {
  return (
    <div className="w-screen h-[740px] bg-gray-200 dark:bg-gray-800  cursor-pointer">
      <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-900 flex justify-center"
      >
      
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
            About{" "}
            <span className="font-extrabold text-3xl text-blue-900"> Me</span>
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-12 gap-10">
            <div className="flex-1 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  College
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mudrasa-Tul-Binat College, Sadiqabad
                </p>
                <p className="text-gray-500 dark:text-gray-400">2020 - 2022</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  University
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  IUB, Bahawalpur
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Bs Software Engineering, 2023 - 2027
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  CGPA: 3.98/4.00
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Frontend Development Course
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed a hands-on course covering React.js, Tailwind CSS,
                  JavaScript ES6+,TypeScript,Modern Libraries and modern web
                  development tools.
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Software House Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Study at Codiea.io as a Frontend Developer .
                </p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2">
                  <li>
                    Developed responsive UI components using React and Tailwind
                    CSS,Shadcn UI.
                  </li>
                  <li>
                    Collaborated with backend team to integrate APIs
                    efficiently.
                  </li>
                  <li>
                    Implemented interactive features and optimized performance.
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Personal Projects
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Built multiple projects demonstrating React, Tailwind CSS, and
                  integration with APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
