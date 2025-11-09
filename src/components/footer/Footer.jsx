import React from "react";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-500 via-gray-500 to-gray-500 text-white py-8 md:py-10 cursor-pointer">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl font-extrabold italic tracking-wide">
            <span className="text-blue-200">&lt;</span>
            <span className="text-white drop-shadow-lg">Khalid</span>
            <span className="text-blue-200">/&gt;</span>
          </h1>
          <p className="text-sm text-blue-100">
            © 2025 Khalid Mehmood. All rights reserved.
          </p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
