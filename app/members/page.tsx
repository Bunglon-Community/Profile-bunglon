"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

const members = [
  { name: "Alex Chen", role: "Full Stack Developer", avatar: "👨‍💻" },
  { name: "Sarah Johnson", role: "UI/UX Designer", avatar: "👩‍🎨" },
  { name: "Mike Rodriguez", role: "Cloud Engineer", avatar: "👨‍🔧" },
  { name: "Emma Wilson", role: "Mobile Developer", avatar: "👩‍💼" },
  { name: "David Kim", role: "AI Specialist", avatar: "👨‍🔬" },
  { name: "Lisa Anderson", role: "Network Admin", avatar: "👩‍🚀" },
]

const advisory = {
  name: "Dr. James Martinez",
  role: "Advisory Board",
  avatar: "🧙",
}

export default function MembersPage() {
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
            Meet the Team
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Our Members</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The talented individuals driving innovation at Bunglon Community
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Advisory Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-primary">Advisory</span> Board
            </h2>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-10 text-center">
              <div className="w-28 h-28 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center text-6xl">
                {advisory.avatar}
              </div>
              <h3 className="text-2xl font-bold mb-2">{advisory.name}</h3>
              <p className="text-muted-foreground text-lg">{advisory.role}</p>
            </div>
          </motion.div>
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
