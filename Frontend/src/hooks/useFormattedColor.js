const useFormattedColor = (format, color) => {
  if (!color) return "";

  if (format === "hex") {
    return color.hex;
  }

  if (format === "rgb" && Array.isArray(color.rgb)) {
    return `(${color.rgb.join(",")})`;
  }

  if (format === "hsl" && Array.isArray(color.hsl)) {
    return `(${color.hsl.join(",")})`;
  }

  return color.hex; // fallback
}

export default useFormattedColor
