const FeatureItem = ({ icon, title, desc }) => {
  return (
    <li className="bg-muted/40 rounded-lg p-4 space-y-1 hover:shadow transition">
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        {icon} {title}
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </li>
  );
};

export default FeatureItem;
