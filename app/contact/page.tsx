"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'diegosm25@outlook.com',
          subject: `New message from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          replyTo: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container p-8 md:p-12">
      <AnimatedTitle className="text-4xl font-bold mb-8" typing>{t("title")}</AnimatedTitle>
      
      <div className="flex flex-col-reverse gap-6">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("name")}
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
                {t("email")}
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
                {t("message")}
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="max-h-36 resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-accent">{t("subtitle")}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p>diegosm25@outlook.com</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <p>+52 (33) 31 77 82 75</p>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <p>Guadalajara, Jal. México</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}