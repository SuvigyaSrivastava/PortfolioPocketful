"use client";

import Image from "next/image";
import { profile } from "@/app/data/profile";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experiences</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profile.experience.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-16 w-full relative mb-4">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">{exp.role}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}