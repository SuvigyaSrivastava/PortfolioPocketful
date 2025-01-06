import { Github } from "lucide-react";
import { profile } from "@/app/data/profile";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profile.projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((lang, i) => (
                    <Badge key={i} variant="secondary">{lang}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`${project.github}/clone`}>
                      Clone Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Repo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}