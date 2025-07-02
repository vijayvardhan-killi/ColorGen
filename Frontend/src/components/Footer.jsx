import React from "react"
import { Button } from "./ui/button"
import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-6 mt-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} <span className="font-medium text-white">ColorGen</span>. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/vijayvardhan-killi/ColorGen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-teal-400 transition"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vijaya-vardhan-killi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-teal-400 transition"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
