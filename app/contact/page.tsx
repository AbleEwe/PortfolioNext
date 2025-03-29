"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p>john.doe@example.com</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <p>San Francisco, CA</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}