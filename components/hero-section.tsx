import { Button } from "@/components/ui/button"
import { GraduationCap, TrendingUp, Users, Award } from "lucide-react"
import { motion } from "motion/react"
import { LampContainer } from "@/components/ui/lamp"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-transparent">
      {/* Content above lamp */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center z-10 mb-8"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-br from-violet-300 to-purple-500 py-4 bg-clip-text text-transparent">
            BVPINC
          </span>
        </h1>
        <span className="block text-2xl md:text-3xl font-semibold text-white/90">
          Guiding Your Way to Dream Placements
        </span>
      </motion.div>

      {/* Centered Lamp Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <LampContainer>
          <div className="w-full h-full" />
        </LampContainer>
      </div>

      {/* Content below lamp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center max-w-5xl mx-auto px-6 z-30 mt-8"
      >
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          A non-tech society dedicated to empowering students with career guidance, placement support, and financial
          assistance to achieve their professional dreams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <GraduationCap className="h-6 w-6 text-violet-400 mb-2" />
            <span className="text-xs font-medium text-white">Career Guidance</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Award className="h-6 w-6 text-violet-400 mb-2" />
            <span className="text-xs font-medium text-white">Dream Placements</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <TrendingUp className="h-6 w-6 text-violet-400 mb-2" />
            <span className="text-xs font-medium text-white">Finance Help</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Users className="h-6 w-6 text-violet-400 mb-2" />
            <span className="text-xs font-medium text-white">Community Support</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
          >
            Join BVPINC
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-6 py-4 bg-transparent border-white/30 text-white hover:bg-white/10"
          >
            Explore Services
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
