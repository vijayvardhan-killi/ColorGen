import React from "react";
import ColorItem from "./ColorItem";
import { useState } from "react";
import ColorCodeDropDown from "../ColorCodeDropDown";

const ColorPalette = ({ dominant, palette, image, setCopiedText }) => {
  const [format, setFormat] = useState("hex");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-8 bg-white rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
        Color
        <span className="bg-primary  text-white px-3 py-1 rounded-full">
          Palette
        </span>
      </h1>

      {/* Image Preview */}
      {image && (
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-md">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="w-full h-auto object-cover transition-transform hover:scale-105"
          />
        </div>
      )}

      {/* Format Dropdown + Dominant Color */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Dropdown + Label */}
        <div className="flex items-center gap-3">
          <ColorCodeDropDown format={format} setFormat={setFormat} />
        </div>

        {/* Dominant Color */}
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium text-gray-700">Dominant Color</p>
          <div className="rounded-md overflow-hidden shadow-sm">
            <ColorItem
              key={dominant.hex}
              color={dominant}
              format={format}
              onCopy={setCopiedText}
            />
          </div>
        </div>
      </div>

      {/* Palette Grid */}
      <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 justify-center bg-gray-50  p-6 rounded-lg shadow-inner">
        {palette.map((color) => (
          <ColorItem key={color.hex} color={color} format={format} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
