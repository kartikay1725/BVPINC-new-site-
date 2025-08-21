"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const content = [
  {
    title: "Our Vision",
    description:
      "We envision a world where innovation meets purpose, where every individual has the opportunity to grow, lead, and make a meaningful impact. Our organization serves as a catalyst for transformation in both personal and professional spheres.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Vision</h3>
          <p className="text-lg">Empowering Future Leaders</p>
        </div>
      </div>
    ),
  },
  {
    title: "Our Community",
    description:
      "We bring together industry experts, emerging talents, and visionary leaders from diverse backgrounds. Our community thrives on collaboration, mentorship, and the shared belief that together we can achieve extraordinary things.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/diverse-team-collaboration.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="diverse team collaboration"
        />
      </div>
    ),
  },
  {
    title: "Our Impact",
    description:
      "Through mentorship programs, cutting-edge events, and collaborative projects, we create opportunities for growth and transformation. Our members have gone on to lead major initiatives, start successful companies, and drive positive change in their industries.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-8">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Events</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Join Our Journey",
    description:
      "Whether you're an experienced professional looking to mentor the next generation, or an emerging talent ready to accelerate your growth, our organization provides the platform, resources, and community to help you achieve your goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Join Us</h3>
          <p className="text-lg">Be Part of Something Greater</p>
        </div>
      </div>
    ),
  },
]

export function AboutSection() {
  return (
    <section className="relative py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Organization</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our story, vision, and the community that drives innovation and leadership
          </p>
        </div>
        <div className="relative z-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  )
}
