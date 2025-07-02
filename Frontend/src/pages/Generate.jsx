import { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import ColorPalette from "../components/ColorPalette";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const Generate = () => {
  const [image, setImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    if (copiedText) {
      const timeout = setTimeout(() => setCopiedText(""), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copiedText]);

  return (
    <>
      <Navbar></Navbar>
      <div className="sm:min-h-[90%]  w-full bg-primary-foreground sm:px-4 px-2 py-[6rem] ">
        <h1 className="text-5xl  sm:text-6xl  text-center font-semibold  m-3">
          Color
          <span className="bg-primary text-white px-2 rounded">Gen</span>
        </h1>
        <div className="flex justify-center">
          <InputBox setImage={setImage} setColorPalette={setColorPalette} />
        </div>

        {colorPalette && (
          <div className="mt-10 flex justify-center">
            <ColorPalette
              dominant={colorPalette.dominant}
              palette={colorPalette.palette}
              image={image}
              setCopiedText={setCopiedText}
            />
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Generate;
