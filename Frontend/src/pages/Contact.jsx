import React from "react";
import { LifeBuoy, Github } from "lucide-react";

const Contact = () => {
  return (
    <main className="flex-1 px-4 py-16 bg-background text-foreground">
      <div className="max-w-2xl mx-auto my-20 space-y-8 text-center">
        <div className="flex items-center justify-center gap-2 text-primary">
          <LifeBuoy size={24} />
          <span className="text-lg font-medium">Support</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">Need help with ColorGen?</h1>

        <p className="text-muted-foreground text-lg">
          We're here to assist you. If you have questions, feedback, or run into issues, feel free to reach out via email. We'll get back to you as soon as possible.
        </p>

        <a
          href="https://github.com/vijayvardhan-killi/ColorGen"
          target="__blank"
          className="inline-flex items-center gap-2 text-base font-medium text-primary underline hover:text-primary/80 transition"
        >
          <Github size={20} />
          Github Repo
        </a>
      </div>
    </main>
  );
};

export default Contact;
