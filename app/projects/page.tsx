"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Gamepad2, Cloud, Bot, Wallet, Palette, Activity } from "lucide-react"
import Image from "next/image";
import logoBunglon from "@/assets/images/logo-bunglonv2.png";

const projects = [
  {
    title: "Pixel Quest",
    description: "A retro-style adventure game built with Unity and modern game design principles",
    icon: Gamepad2,
    status: "Completed",
    year: "2024",
  },
  {
    title: "Cloud Hub",
    description: "Scalable cloud infrastructure platform for startups and enterprises",
    icon: Cloud,
    status: "In Progress",
    year: "2025",
  },
  {
    title: "AI Chat Bot",
    description: "Intelligent conversational AI assistant with natural language processing",
    icon: Bot,
    status: "Completed",
    year: "2024",
  },
  {
    title: "Mobile Wallet",
    description: "Secure digital payment application with multi-currency support",
    icon: Wallet,
    status: "In Progress",
    year: "2025",
  },
  {
    title: "Design System",
    description: "Comprehensive UI component library with accessibility focus",
    icon: Palette,
    status: "Completed",
    year: "2024",
  },
  {
    title: "Network Monitor",
    description: "Real-time infrastructure monitoring and analytics dashboard",
    icon: Activity,
    status: "Planning",
    year: "2025",
  },
]

const statusColors = {
  Completed: "bg-primary/10 text-primary border-primary",
  "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/50",
  Planning: "bg-muted text-muted-foreground border-border",
}

export default function ProjectsPage() {
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
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Featured Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovative solutions built by our talented community
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary transition-all"
              >
                <div className="w-16 h-16 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      statusColors[project.status as keyof typeof statusColors]
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate and bring your ideas to life with our expertise
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Start a Conversation
          </a>
        </motion.div>
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
                <span className="text-foreground">Bunglon</span>
                <span className="text-primary ml-1">Community</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Bunglon Community. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
