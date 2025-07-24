import FeatureItem from "./FeatureItem";
import {
  UploadCloud,
  PaintBucket,
  Copy,
  Zap,
  Smartphone,
  AlertCircle,
} from "lucide-react";

const features = [
  { icon: <UploadCloud size={18} />, title: "Image Upload", desc: "Upload JPG, PNG, or any image to extract its color palette." },
  { icon: <PaintBucket size={18} />, title: "Dominant + Secondary Colors", desc: "Extract up to 8 dominant colors using k-means clustering." },
  { icon: <Copy size={18} />, title: "Click to Copy", desc: "Copy Color codes with a single tap." },
  { icon: <Zap size={18} />, title: "Real-Time Feedback", desc: "Toasts confirm copied colors instantly." },
  { icon: <Smartphone size={18} />, title: "Responsive Design", desc: "Looks great on phones and desktops." },
  { icon: <AlertCircle size={18} />, title: "Error Handling", desc: "Graceful alerts for upload issues." },
];

const FeatureList = () => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {features.map((feature) => (
      <FeatureItem key={feature.title} {...feature} />
    ))}
  </ul>
);

export default FeatureList;
