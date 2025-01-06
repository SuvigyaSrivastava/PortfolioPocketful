"use client";

import { useState } from "react";
import { profile } from "@/app/data/profile";
import { Button } from "@/components/ui/button";
import { SkillBar } from "./skills/SkillBar";

export function Skills() {
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant={activeTab === 'technical' ? 'default' : 'outline'}
            onClick={() => setActiveTab('technical')}
            className="min-w-[150px]"
          >
            Technical Skills
          </Button>
          <Button
            variant={activeTab === 'soft' ? 'default' : 'outline'}
            onClick={() => setActiveTab('soft')}
            className="min-w-[150px]"
          >
            Soft Skills
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          {activeTab === 'technical' ? (
            <div className="space-y-6">
              {profile.skills.technical.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {profile.skills.soft.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}