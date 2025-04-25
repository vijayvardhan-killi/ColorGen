import React from 'react';
import { useState } from 'react';
import  getData  from '../services/api';
import { toast } from 'react-toastify';


const InputBox = ({setImage , setColorPalette}) => {

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.Image.files[0];

    if (!file) {
      console.error("No file selected");
      toast.error("No file selected!");
      // alert("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setImage(file);
    try{
      const result = await getData(file);
      if (result) {
        setColorPalette(result);
        console.log(result);
      }
    }catch(error){
      console.error("Error uploading file:", error);
      toast.error("Error uploading file!");
    }finally{
      setLoading(false);
      toast.success("Image uploaded successfully!");
      
    }
    
    
  };

  return (
    <div className='flex flex-col items-center justify-center w-full sm:h-full sm:p-10 p-2 bg-gray-100'>
      <div className='sm:w-[70%] h-[60%] py-20 mt-6 text-center rounded-lg shadow-lg border border-dashed border-black flex flex-col items-center justify-center'>
        <h1 className='text-3xl break-words mb-4'>Upload a Picture to Generate a Color Picture</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <label htmlFor="Image" className="sr-only">Upload Image</label>
          <input
            type="file"
            name="Image"
            id="Image"
            accept="image/*"
            className='block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100'
          />
          <button
            type="submit"
            className='mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition'
          >
            Upload
          </button>
          {loading && (
            <div className="m-4 animate-spin p-5 rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InputBox;
