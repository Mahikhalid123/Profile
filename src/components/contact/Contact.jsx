import React from "react";
import { Mail, MapPin, Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me!");
  };

  return (
    <section
      id="contact"
      className="w-screen py-24 bg-linear-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 mt-6">
            Get in <span className="text-indigo-700 dark:text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Message Form */}
          <div className="flex flex-col justify-between bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 md:p-10 hover:shadow-indigo-300/20 transition-all duration-500 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Send a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3 rounded-xl bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-400/40 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-purple-300/20">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Prefer to reach out directly? Here’s how you can contact me or connect on social platforms.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                  <p className="text-gray-800 dark:text-gray-200">mahikhalidbwp123@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <p className="text-gray-800 dark:text-gray-200">Bahawalpur, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Connect
              </h4>
              <div className="flex gap-5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-blue-400/30"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-sky-400 to-blue-500 rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-sky-400/30"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-pink-400 to-purple-500 rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-pink-400/30"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-700 to-black rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-gray-500/30"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
            
                className="inline-flex items-center gap-2 text-white bg-indigo-600 dark:bg-indigo-500 px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all"
              >
                Thank You.... 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
