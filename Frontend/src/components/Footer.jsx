import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ColorGen. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://github.com/vijayvardhan-killi/ColorGen" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vijaya-vardhan-killi/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
