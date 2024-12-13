"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-gray-400 mb-8">
            Whether you're a private collector, dealership, or manufacturer, I'm here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:contact@brewedphotography.com">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://instagram.com/brewedphotography" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}