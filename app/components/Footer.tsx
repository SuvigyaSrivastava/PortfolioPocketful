import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="flex items-center justify-center gap-2">
          Made with ❤ by Suvigya Srivastava <Code className="w-4 h-4" />
        </p>
      </div>
    </footer>
  );
}