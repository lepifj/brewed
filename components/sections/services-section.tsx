"use client";

import { motion } from "framer-motion";
import { Camera, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">Exceptional automotive content creation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Camera className="h-12 w-12 mb-6 text-white" />}
            title="Photography"
            description="High-end automotive photography for private collectors, dealerships, and manufacturers."
            href="/photography"
            initial={{ opacity: 0, x: -20 }}
            delay={0.2}
          />
          <ServiceCard
            icon={<Play className="h-12 w-12 mb-6 text-white" />}
            title="Videography"
            description="Cinematic automotive content that captures the essence and performance of your vehicle."
            href="/videography"
            initial={{ opacity: 0, x: 20 }}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  initial: { opacity: number; x: number };
  delay: number;
}

function ServiceCard({ icon, title, description, href, initial, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-neutral-800 rounded-lg p-8"
    >
      {icon}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Button asChild variant="ghost" className="p-0">
        <Link href={href} className="inline-flex items-center">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
}