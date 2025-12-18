"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { useState } from "react"
import { Smartphone, Globe, Cloud, Bot, Network, Server, Palette, TrendingUp } from "lucide-react"

const skills = [
  {
    name: "Mobile Developer",
    icon: Smartphone,
    description: "Building native and cross-platform mobile applications for iOS and Android",
  },
  {
    name: "Web Developer",
    icon: Globe,
    description: "Creating responsive full-stack web applications with modern frameworks",
  },
  {
    name: "Cloud Practitioner",
    icon: Cloud,
    description: "Architecting and managing infrastructure on AWS, Azure, and GCP",
  },
  {
    name: "AI Generative",
    icon: Bot,
    description: "Developing machine learning models and AI-powered solutions",
  },
  {
    name: "Network Engineer",
    icon: Network,
    description: "Designing and maintaining robust network infrastructure",
  },
  {
    name: "Linux Administrator",
    icon: Server,
    description: "Managing and optimizing Linux server environments",
  },
  {
    name: "UI/UX Designer",
    icon: Palette,
    description: "Crafting beautiful and intuitive user experiences",
  },
  {
    name: "Digital Marketing",
    icon: TrendingUp,
    description: "Driving growth through data-driven marketing strategies",
  },
]

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

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
            Our Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Community Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diverse talents working together to build exceptional solutions
          </p>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                className={`group bg-card border rounded-xl p-6 cursor-pointer transition-all ${
                  selectedSkill === index ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <skill.icon
                  className={`w-12 h-12 mb-4 transition-colors ${
                    selectedSkill === index ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
                <h3
                  className={`text-lg font-bold mb-2 transition-colors ${
                    selectedSkill === index ? "text-primary" : "group-hover:text-primary"
                  }`}
                >
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Selected Skill Details */}
          {selectedSkill !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const SkillIcon = skills[selectedSkill].icon
                  return <SkillIcon className="w-16 h-16 text-primary" />
                })()}
                <h2 className="text-3xl font-bold">{skills[selectedSkill].name}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team excels in {skills[selectedSkill].description.toLowerCase()}. We bring expertise, passion, and
                precision to every project, ensuring exceptional results that drive your success forward.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦎</span>
              <span className="text-lg font-bold">Bunglon Community</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Bunglon Community. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
