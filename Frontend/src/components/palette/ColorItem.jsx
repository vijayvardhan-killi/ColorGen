import React from "react";
import useClipboard from "@/hooks/useClipBoard";
import useFormattedColor from "@/hooks/useFormattedColor";

const ColorItem = ({ color, format }) => {
  const copy = useClipboard();
  const code = useFormattedColor(format, color);

  return (
    <div
      className="relative w-16 h-14 cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg"
      title="Click to copy color code"
      onClick={() => copy(color)}
    >
      <div
        className="w-full h-full border"
        style={{ backgroundColor: color.hex }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xs font-mono px-1 tracking-tighter">{code}</p>
      </div>
    </div>
  );
};

export default ColorItem;
