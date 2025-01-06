"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/app/data/profile";
import { ParticleBackground } from "./background/ParticleBackground";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{profile.name}</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">{profile.tagline}</p>
        <div className="flex justify-center space-x-6 mb-8">
          {/* GitHub Icon */}
          {profile.social.github && (
            <a
              href={profile.social.github}
              aria-label="GitHub Profile"
              className="hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {/* LinkedIn Icon */}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              aria-label="LinkedIn Profile"
              className="hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
        </div>
        <Button
          variant="secondary"
          size="lg"
          className="rounded-full px-8"
          onClick={scrollToAbout}
        >
          More about me
        </Button>
      </div>
    </section>
  );
}
