"use client";

import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  name: string;
  level: number;
  description?: string;
}

export function SkillBar({ name, level, description }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <div>
          <span className="font-medium">{name}</span>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <span className="text-gray-500">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
}