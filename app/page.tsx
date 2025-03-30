"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, Linkedin, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import ParticleBackground from "@/components/particle-background"
import Slideshow from "@/components/slideshow"
import CountUp from "@/components/count-up"

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHovered, setCursorHovered] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const games = [
    { name: "BGMI", image: "https://sm.ign.com/t/ign_in/screenshot/default/deepika-padukone-skin-bgmi_d34b.1280.jpg" },
    { name: "TEKKEN", image: "https://static.bandainamcoent.eu/high/tekken/tekken-8/00-page-setup/TEKKEN8_Header_mobile_2.jpg" },

    { name: "CLASH ROYALE", image: "https://etgeekera.com/wp-content/uploads/2016/05/clash-royale-banner.jpg" },
    { name: "MINECRAFT BED WARS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJay-uyizn2B6rETya198xRWnpMIvnPRqP8w&s" },
    { name: "VALORANT", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c6c50b680c5e1846a9c77f86d5aa357d46584ffe-1920x1080.png" },
    { name: "FIFA", image: "https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg" },
    { name: "F1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwyE9Vg5v8irdaSOcwQUQ6Y_IBXhhcp-dnLnvUakr_idLCVdKBNsapSVyluOZZ736kYE&usqp=CAU" },
  ]

  const stats = [
    { label: "Players", value: 500 },
    { label: "Games", value: 7 },
    { label: "Prize Pool", value: 50000, prefix: "₹" },
    { label: "Teams", value: 120 },
  ]

  // Slideshow images
  const slideshowImages = [
    "https://media.discordapp.net/attachments/1090226053307445348/1355946095221670091/IMG_6482.jpg?ex=67eac6b5&is=67e97535&hm=16e717bf196dcee73f683d7b7df6f8e40a7635c14326a5a88cd24d7c989462ef&=&format=webp&width=1156&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355946092558290984/IMG_6696-Enhanced-NR.jpg?ex=67eac6b4&is=67e97534&hm=097b45977beaae3017779bde33050057efc6ec010ba844357a45390bac5ac929&=&format=webp&width=1156&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355946100212891719/IMG_2702.JPG?ex=67eac6b6&is=67e97536&hm=34259f9cc8477d97bd0696bd4ff02436db1dff0725754d3fa3e834c2e75fe900&=&format=webp&width=975&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355946097423417394/IMG_2725.JPG?ex=67eac6b5&is=67e97535&hm=f2d7d472d88cea12b7318cd2085b69842aaf9998498ed0bfc9b5e280bf4c8fb0&=&format=webp&width=975&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355946096148480232/IMG_5609.jpg?ex=67eac6b5&is=67e97535&hm=00c470cfa22eb46ca5264c19eaf6bd59cdd071b106f8211de10597b141a3c475&=&format=webp&width=867&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355946101730967763/IMG-20240529-WA0035.jpg?ex=67eac6b6&is=67e97536&hm=2045eb6df09289a93fd2b2a82ef9a9c4724d45ac7df30fb2a3e6dedb6e5ec118&=&format=webp&width=867&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355948856495313056/dhakasir.jpg?ex=67eac947&is=67e977c7&hm=2a8bd7d1cce5fe5e02778c7a8a20ec112de57266487c1bb8ef7ff8ef9ec8dd4b&=&format=webp&width=1285&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355948855790800966/DSC2764.jpg?ex=67eac947&is=67e977c7&hm=1d3965bf3c5fee0df644b572b1377302e1a8148fecaa86ddcfef1dcb6e307406&=&format=webp&width=1156&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355951970581479585/DSC4756-Enhanced-SR.jpg?ex=67eacc2e&is=67e97aae&hm=98dd57b3c7c655f0e286fffbda6684a09632398b1f19fb2e80674f5839e14c04&=&format=webp&width=1156&height=650",
    "https://media.discordapp.net/attachments/1090226053307445348/1355951973446193272/DSC4776-Enhanced-SR.jpg?ex=67eacc2e&is=67e97aae&hm=c61762b5f0f2324437a76320ba5397cdac996595be5f3eb06a04932107449ad3&=&format=webp&width=1002&height=650"
]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleMouseEnter = () => setCursorHovered(true)
  const handleMouseLeave = () => setCursorHovered(false)

  const playSound = () => {
    const audio = new Audio("/click.mp3")
    audio.volume = 0.2
    audio.play().catch((e) => console.log("Audio play failed:", e))
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 rounded-full bg-purple-500/50 pointer-events-none z-50 hidden md:block transition-transform duration-150"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorHovered ? 1.5 : 1})`,
          mixBlendMode: "difference",
        }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black"></div>
          <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1092778908782436404/1355878600284569780/MUJ.jpg?ex=67ea87d9&is=67e93659&hm=26c841f8bd0f09de5387e1b89e7f40aaad7904e2be7a9075a370da5778354888&=&format=webp&width=550&height=309')]  bg-cover bg-center opacity-30"></div>
          
        </motion.div>

        <div className="container relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Glitch! eSports Society Presents
              </motion.h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src="/glitch-logo.png"
                  alt="Glitch! eSports Society"
                  width={200}
                  height={145}
                  className="object-contain"
                />
              </motion.div>
              <motion.div whileHover={{ rotate: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image src="/rezume-logo.png" alt="REZUME 4.0" width={200} height={200} className="object-contain" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient">
              REZUME 4.0 - The Ultimate Gaming Battleground
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl text-lg md:text-xl text-gray-300"
          >
            Bringing together the best collegiate gamers, this tournament is set to deliver high-stakes competition,
            intense action, and electrifying moments across a variety of gaming titles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={playSound}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white relative overflow-hidden group"
              >
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={playSound}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-purple-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Slideshow Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              PAST SUCCESS
            </span>
          </motion.h2>

          <Slideshow images={slideshowImages} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-4xl font-bold text-purple-500 mb-2">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.label === "Prize Pool" ? "+" : ""}
                  />
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              REZUME 4.0 - Choose Your Battlefield
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-purple-500 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <h3 className="text-xl font-bold">{game.name}</h3>
                    </motion.div>
                  </div>
                  <CardContent className="p-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={playSound}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden group">
                        <span className="relative z-10">Register for {game.name}</span>
                        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                About REZUME 4.0
              </span>
            </motion.h2>

            <div className="space-y-6 text-lg text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                REZUME 4.0, the flagship eSports event of Glitch! eSports Society, is back and bigger than ever!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                With a diverse lineup of games, including BGMI, TEKKEN, CLASH ROYALE, MINECRAFT BED WARS, VALORANT,
                FIFA, F1, and many more, REZUME 4.0 is the ultimate test of skill, strategy, and dominance.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white"
              >
                🏆 Compete for Glory. Fight for Victory. Rise as a Champion. Are you ready to take on the challenge? 🚀
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Connect With Us
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "https://www.instagram.com/glitchmuj/", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
              { href: "mailto:glitchesportsmuj@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
              { href: "https://www.linkedin.com/in/glitch-esports-society-124aa1212/", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              { href: "https://chat.whatsapp.com/KznZjy2Nshq9F8azg4JyfH", icon: <Phone className="h-5 w-5" />, label: "WhatsApp" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={playSound}
              >
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10 gap-2 relative overflow-hidden group"
                  >
                    {item.icon}
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-purple-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/glitch-logo.png"
                alt="Glitch! eSports Society"
                width={80}
                height={58}
                className="object-contain"
              />
              <Image src="/rezume-logo.png" alt="REZUME 4.0" width={80} height={80} className="object-contain" />
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Glitch! eSports Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

