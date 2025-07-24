
import { Sparkles, Code } from "lucide-react";
import SectionHeader from "@/components/about/SectionHeader";
import FeatureList from "@/components/about/FeatureList";

const AboutPage = () => {
  return (
    <main className="flex-1 px-4 py-12 bg-background text-foreground">
      <div className="max-w-4xl mx-auto my-20 space-y-10">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            About <span className="text-primary">ColorGen</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            🎨 Transform images into beautiful color palettes instantly. Whether you're a designer, developer, or just a color nerd—ColorGen helps you explore and copy colors effortlessly.
          </p>
        </header>

        <section className="space-y-6">
          <SectionHeader icon={<Sparkles size={20} />} title="Key Features" />
          <FeatureList />
        </section>

        <section className="space-y-4">
          <SectionHeader icon="🚀" title="How to Use" />
          <ol className="list-decimal list-inside text-muted-foreground space-y-1">
            <li>Click the upload button and select an image.</li>
            <li>Wait for the color palette to be extracted using k-means magic.</li>
            <li>Browse the palette and pick your favorite hues.</li>
            <li>Copy any Color code by clicking on the color block.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <SectionHeader icon={<Code size={20} />} title="Tech Stack" />
          <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground text-sm">
            <p><strong>🔹 Frontend:</strong> React + Tailwind CSS, deployed on Render.</p>
            <p><strong>🔸 Backend:</strong> Flask + Pillow + Scikit-learn, deployed on Render Free Tier.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
