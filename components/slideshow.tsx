"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideshowProps {
  images: string[]
  autoplaySpeed?: number
}

const Slideshow = ({ images, autoplaySpeed = 5000 }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [nextSlide, autoplaySpeed, isAutoplay])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const [direction, setDirection] = useState(1)

  const handleNext = () => {
    setDirection(1)
    nextSlide()
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const handlePrev = () => {
    setDirection(-1)
    prevSlide()
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
      <div className="aspect-[16/9] relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold">PAST SUCCESS - Highlight {currentIndex + 1}</h3>
              <p className="text-sm md:text-base opacity-80">
                Exciting moments from Glitch! eSports Society's past success
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-4 bg-purple-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow

