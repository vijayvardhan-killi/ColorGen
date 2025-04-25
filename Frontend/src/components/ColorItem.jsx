import React from 'react';
import { toast } from 'react-toastify';
const ColorItem = ({ color , onCopy }) => {

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(color);
      onCopy?.(color);
      toast('Copied to clipboard!' )
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="relative group cursor-pointer"
      title="Click to copy"
      onClick={() => copyToClipboard(color)}
    >
      <div
        className="w-16 h-14 border rounded shadow"
        style={{ backgroundColor: color }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-sm font-mono">{color}</p>

      </div>
    </div>
  );
};

export default ColorItem;
