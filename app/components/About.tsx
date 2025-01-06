"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { profile } from "@/app/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 animate-pulse"></div>
            <Image
              src="/images/passportSizedPhoto.jpg" // Updated path
              alt={profile.name}
              width={256}
              height={256}
              className="rounded-full relative z-10 p-1 bg-white"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{profile.about}</p>
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-8"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?id=1A7XzzatQL5CA2EeOpV6r7agpT__P5rLq&export=download",
                  "_blank"
                )
              }
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
