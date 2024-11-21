import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ColorPickerProps {
  id: string;
  pickColor: string;
  onChange: (newColor: string) => void;
}

const ColorPickerComponent = ({
  onChange,
  id,

  pickColor,
}: ColorPickerProps) => {
  const [color, setColor] = useColor(pickColor);

  // Notify parent component of color change
  const handleColorChange = (newColor: any) => {
    setColor(newColor);
    onChange(newColor.hex); // Pass the hex value to the parent
  };
  return (
    <div className="flex justify-center  items-center">
      <Popover>
        <PopoverTrigger asChild>
          <div
            id={id}
            className={`flex justify-center items-center cursor-pointer h-9 w-9 rounded-2xl`}
            style={{
              background: color.hex,
            }}></div>
        </PopoverTrigger>
        <PopoverContent className="flex w-fit ml-10 justify-center p-0 shadow-none border-none items-center">
          <ColorPicker
            hideInput={["rgb", "hsv"]}
            color={color}
            onChange={handleColorChange} // Handle the color change and pass it to the parent
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPickerComponent;
