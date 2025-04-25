import React from "react";
import ColorItem from "./ColorItem";

const ColorPalette = ({ dominant, palette , image ,setCopiedText }) => {
  
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-5">
      <h1 className="p-4 text-4xl text-center font-light">
        Color{" "}
        <span className="bg-purple-700 text-white font-semibold">Palette</span>
      </h1>
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className='sm:w-1/2 sm:h-1/2 mx-auto' />}
      <div className="flex sm:flex sm:flex-col">
        <div className="sm:flex  justify-center w-fit  bg-gray-100 m-2 rounded-md overflow-hidden">
          {palette.map((color) => (
            <ColorItem key={color.hex} color={color.hex} />
          ))}
        </div>
        <div className="flex gap-3 sm:flex-row flex-col sm:justify-center items-center  px-3">
          <p className="text-xl  font-semibold  ">Dominent</p>
          <div className="rounded-md overflow-hidden">
            <ColorItem key={dominant.hex} color={dominant.hex} onCopy={setCopiedText}></ColorItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
