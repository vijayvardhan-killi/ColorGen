import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { PaletteIcon } from "lucide-react"

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="min-h-[90svh] flex items-center justify-center text-center px-4 dark:from-zinc-900 dark:to-zinc-800">
      <div className="flex flex-col justify-center items-center w-3/4 gap-10 my-28 md:my-8 mx-auto ">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight  text-primary dark:text-white">
          <PaletteIcon className="inline  w-10 h-10 "></PaletteIcon> Discover Your Perfect Palette
        </h1>
        <div className="sm:w-3/5">
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">
          ColourGen helps you generate beautiful, accessible color palettes with ease. Save, export, and build your brand in seconds.
        </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="text-base px-6 py-3" variant="default" onClick={() =>{navigate("/generate")} }>
            Generate Palette
          </Button>
          <Button className="text-base px-6 py-3" variant="outline">
            Explore Palettes
          </Button>
        </div>
      </div>
      
    </section>
  )
}
