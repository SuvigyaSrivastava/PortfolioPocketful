"use client";

import { Linkedin } from "lucide-react";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
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
