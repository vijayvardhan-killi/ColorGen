import React, { useState } from 'react';
import getData from '../services/api';
import { toast } from 'react-toastify';
import { Button } from './ui/button';

const InputBox = ({ setImage, setColorPalette }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("No file selected!");
      return;
    }

    setLoading(true);
    try {
      const result = await getData(selectedFile);
      if (result) {
        setColorPalette(result);
        toast.success("Image uploaded successfully!");
        console.log(result);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full sm:h-4/6 h-[60%]  sm:p-10 p-4 '>
      <div className='flex flex-col sm:w-[70%] h-[50%] sm:h-[60%] py-10 px-4 text-center rounded-lg shadow-lg border border-dashed border-black items-center justify-center'>
        <h1 className='text-3xl mb-6'>Upload a Picture to Generate a Color Palette</h1>
        <label className="flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 transition">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-gray-500">Click or drop an image here</span>
          <p className="mt-2 text-sm text-gray-600 italic">
            {selectedFile ? selectedFile.name : "No file selected"}
          </p>
        </label>
        <Button
          onClick={handleUpload}
          disabled={loading}
          className={`mt-6 px-4 py-2    ${
            loading ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Uploading..." : "Upload"}
        </Button>
        

        {loading && (
          <div className="mt-4 animate-spin p-5 rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
        )}
      </div>
    </div>
  );
};

export default InputBox;
