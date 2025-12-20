"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import Image from "next/image";
import logoBunglon from "@/assets/images/logo-bunglonv2.png";
import avatarImg from "@/assets/images/gw.jpeg";
import akmalImg from "@/assets/images/mas_akmal.jpeg";


const members = [
  { name: "Atha Nidianto", role: "Web & Mobile Developer", avatar: avatarImg },
  { name: "Bagas Nofa Pratama", role: "UI/UX Designer", avatar: avatarImg },
  { name: "Handika Restu Bagaskara", role: "UI/UX Designer", avatar: avatarImg },
  { name: "Muhammad Luthfi Lintang P", role: "Mobile Developer", avatar: avatarImg },
  { name: "Riski Indra Pratama", role: "Backend Dev", avatar: avatarImg },
  { name: "Muhammad Nuril Mubin", role: "Network Admin", avatar: avatarImg },
]

const advisory = {
  name: "Muha Akmal Ni'am",
  role: "Donatur Bunglon Nih Bosss",
  avatar: akmalImg,
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center top" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      <span>{member.name.split(" ").map(n => n[0]).slice(0,2).join("")}</span>
                    </div>
                  )}
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
                {advisory.avatar ? (
                  <Image 
                    src={advisory.avatar}
                    alt={advisory.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: "center top" }}
                  />
                ) : (
                  <span>{advisory.name.split(" ").map(n => n[0]).slice(0,2).join("")}</span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{advisory.name}</h3>
              <p className="text-muted-foreground text-lg">{advisory.role}</p>
            </div>
          </motion.div>
        </div>
      </section>




      {/* Kaki Web */}
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
