import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Oops! The page you’re looking for got lost in the color palette.
        </p>
        <p className="text-gray-500 mb-8">
          Don’t worry, let’s get you back to safety!
        </p>
        <Button>
          <Link
            to="/"
          >
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
