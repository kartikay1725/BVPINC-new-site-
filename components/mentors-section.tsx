import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const mentor = {
  name: "Dr. Sarah Chen",
  role: "Chief Technology Officer & Innovation Leader",
  expertise: ["AI/ML", "Product Strategy", "Team Building", "Digital Transformation", "Leadership"],
  image: "/property-owner-2.png",
  bio: "With over 15 years of experience in technology leadership, Dr. Chen has guided numerous startups and established companies through digital transformation. She specializes in AI/ML implementation and building high-performing teams.",
  achievements: ["Founded 3 successful tech startups", "Published 50+ research papers", "Mentored 200+ professionals"],
}

const words = [
  {
    text: "Meet",
  },
  {
    text: "Our",
  },
  {
    text: "Industry",
    className: "text-violet-500 dark:text-violet-400",
  },
  {
    text: "Expert",
    className: "text-violet-500 dark:text-violet-400",
  },
]

export function MentorsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <TypewriterEffectSmooth words={words} />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Learn from an industry leader who is passionate about sharing expertise and guiding the next generation
          </p>
        </div>

        <Card className="group hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 border-violet-500/20 bg-slate-800/50 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full border-3 border-violet-500/20 group-hover:border-violet-400/60 transition-colors duration-500" />
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{mentor.name}</h3>
                <p className="text-violet-400 font-semibold mb-4 text-lg">{mentor.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{mentor.bio}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {mentor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-violet-500/20 text-violet-300 hover:bg-violet-500/30 border-violet-500/30 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
