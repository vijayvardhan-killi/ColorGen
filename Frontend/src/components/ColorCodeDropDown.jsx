import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ColorCodeDropDown = ({ format, setFormat }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="capitalize w-40 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {format.toUpperCase()}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white shadow-lg">
        <DropdownMenuLabel className="text-sm font-semibold text-gray-800">
          Choose Color Format
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={format} onValueChange={setFormat} >
          <DropdownMenuRadioItem value="hex" className="capitalize">
            Hex
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rgb" className="capitalize">
            Rgb
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="hsl" className="capitalize">
            Hsl
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cmyk" className="capitalize">
            Cmyk
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorCodeDropDown;