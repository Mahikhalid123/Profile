export default function Hero() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 cursor-pointer">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-lg text-blue-800 dark:text-blue-300">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Khalid Mehmood
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 dark:text-indigo-400">
            Frontend-Developer | Software Engineer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl">
            Building scalable web applications with modern JavaScript frameworks
            .Turning complex problems into elegant, efficient web solutions. I
            specialize in React, modern frontend tooling, and building software
            that delights users while maintaining clean, maintainable code..
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white hover:scale-105 transform transition-all duration-300 text-center"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white hover:scale-105 transform transition-all duration-300 text-center"
            >
              View Projects
            </a>
          </div>

          <div className="relative inline-block mt-4 group">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900 dark:text-indigo-200 cursor-pointer">
              | Bs Software Engineering @ IUB
            </span>

            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-gray dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm rounded-lg p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <p className="font-semibold">IUB, BahawalPur</p>
              <p>Bs Software Engineering</p>
              <p>2023 - 2027</p>
              <p>CGPA: 3.98/4.00</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end cursor-pointer">
          <img
            src="/images/Logo.jpg"
            alt="Khalid Mehmood"
            className="w-94 h-94 rounded-full shadow-xl border-8 border-gray-500 object-cover"
          />
        </div>
      </div>
    

    </section>
    
    
  );
}
