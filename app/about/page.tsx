"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Users, Target, Award, Heart } from "lucide-react"
import Image from "next/image";
import logoBunglon from "@/assets/images/logo-bunglonv2.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">About Bunglon</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A community built on passion, innovation, and collaboration
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-10 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary">Our</span> Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bunglon Community was born from a shared passion for technology, creativity, and the power of
                collaboration. Just like a chameleon adapts to its environment, our community members bring diverse
                skills and perspectives that blend together beautifully.
              </p>
              <p>
                We believe in creating a welcoming space where developers, designers, and tech enthusiasts can
                collaborate, learn, and build amazing projects together. Our approach combines serious technical
                expertise with a creative, innovative spirit.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-10 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="text-primary" size={32} />
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                To foster a vibrant community where technology meets creativity, where learning is an adventure, and
                where every member can grow their skills in a supportive environment.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Embrace diversity in skills and perspectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Create sustainable, impactful projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Transform ideas into reality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Inspire continuous learning and growth</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve amazing results through collective effort and shared vision",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Pushing boundaries with creative solutions and cutting-edge technology",
              },
              {
                icon: Heart,
                title: "Community",
                description: "Supporting and uplifting each other in a culture of respect and inclusion",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering quality in everything we do with attention to detail and pride",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                            <span className="text-3xl transition-transform group-hover:scale-110">
                              <Image 
                                src={logoBunglon}
                                alt="Bunglon Community Logo"
                                width={50}
                                height={50}
                                className="rounded-full transition-transform group-hover:scale-110"
                              />
                            </span>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Bunglon</span>
                <span className="text-foreground ml-1">Community</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Bunglon Community. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
