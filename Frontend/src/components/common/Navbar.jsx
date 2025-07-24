import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, PaletteIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet";

const Navbar = () => {
  // const navlinks = ["Home", "About", "Contact"];

  const navlinks = {
    Home: "/",
    About: "/about",
    Contact: "/contact",
  };
  return (
    <nav className="w-full flex justify-between items-center px-6 sm:px-12 py-4  z-40 dark:bg-zinc-900 shadow-sm border-b dark:border-zinc-800 backdrop-blur-2xl fixed">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <PaletteIcon className="stroke-primary" />
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          ColorGen
        </h2>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-3 ">
        {Object.keys(navlinks).map((key) => (
          <Button variant="ghost" key={key}>
            <NavLink to={navlinks[key]}>{key}</NavLink>
          </Button>
        ))}
      </div>

      {/* Right: Mobile Nav Trigger */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-zinc-900">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription> {/* just to avoid warning in terminal */}
            </SheetHeader>

            <div className="flex flex-col space-y-4 mt-4">
              {Object.keys(navlinks).map((key) => (
                <Button
                  key={key}
                  variant="ghost"
                  className="w-full justify-start text-base"
                >
                  <NavLink to={navlinks[key]}>{key}</NavLink>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
