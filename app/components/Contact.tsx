"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/app/data/profile";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false); // Track success state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate success feedback
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Reset success message after 3 seconds
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            I'm currently looking for full-time React Developer/Frontend Developer opportunities!
            If you know of any positions available, if you have any questions, or if you just
            want to say hi, please feel free to email me at{" "}
            <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
              {profile.email}
            </a>
            .
          </p>

          {/* Success Message */}
          {success && (
            <div
              className="text-center text-green-600 bg-green-100 p-4 rounded mb-6 transition-opacity duration-500 ease-in-out"
            >
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
