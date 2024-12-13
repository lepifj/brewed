"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Professional photographer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-300 mb-4">
                With over a decade of experience in automotive photography, I have developed a keen eye for capturing the essence and beauty of luxury vehicles. My passion for cars and photography combines to create stunning visuals that tell compelling stories.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in both studio and location shoots, working with private collectors, dealerships, and automotive events to showcase vehicles in their best light. My work has been featured in leading automotive publications and exhibitions.
              </p>
              <p className="text-gray-300">
                Whether you are looking to showcase your prized possession or need professional content for your automotive business, I bring technical expertise and creative vision to every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
