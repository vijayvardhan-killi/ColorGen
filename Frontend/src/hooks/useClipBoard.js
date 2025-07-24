import { toast } from "react-toastify";

const useClipboard = () => {
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy!");
    }
  };
  return copy;
}

export default useClipboard
