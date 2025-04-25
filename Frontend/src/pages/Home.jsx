import React from 'react'
import { useState , useEffect } from 'react'
import InputBox from '../components/InputBox'
import ColorPalette from '../components/ColorPalette'
import Footer from '../components/Footer'

const Home = () => {

  const [image , setImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);
  const [copiedText, setCopiedText] = useState("");
  


  useEffect(() => {
    if (copiedText) {
      const timeout = setTimeout(() => setCopiedText(""), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copiedText]);
  

  
  return (
    <div className="sm:min-h-[90%]  w-full bg-gray-100 sm:px-4 sm:py-6 px-2 py-4">
  <h1 className="text-5xl sm:text-6xl text-center font-semibold sm:mb-8 m-3">
    Color<span className="bg-purple-500 text-white px-2 rounded">Gen</span>
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

  )
}

export default Home
