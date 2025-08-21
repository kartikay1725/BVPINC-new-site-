import { Button } from "@/components/ui/button"
import { Linkedin, Instagram } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"

const teamData = [
  {
    title: "President",
    content: (
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
          <p className="text-primary font-medium mb-4">President & Founder</p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Visionary leader with 8+ years of experience in organizational development. Passionate about creating
            inclusive communities that foster growth and innovation.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 md:order-last">
          <img
            src="/confident-executive.png"
            alt="Sarah Johnson"
            className="w-32 h-32 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Vice President",
    content: (
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">Michael Chen</h3>
          <p className="text-primary font-medium mb-4">Vice President</p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Strategic thinker with expertise in operations and team management. Dedicated to ensuring organizational
            excellence and sustainable growth.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 md:order-last">
          <img
            src="/professional-asian-person.png"
            alt="Michael Chen"
            className="w-32 h-32 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Core Team Leads",
    content: (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Emma Rodriguez</h3>
            <p className="text-primary font-medium mb-3">Program Lead</p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Expert in program development and implementation with focus on member engagement.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 md:order-last">
            <img
              src="/professional-person-office.png"
              alt="Emma Rodriguez"
              className="w-28 h-28 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">David Park</h3>
            <p className="text-primary font-medium mb-3">Technology Lead</p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full-stack developer passionate about creating digital solutions for community building.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 md:order-last">
            <img
              src="/event-planner-workspace.png"
              alt="David Park"
              className="w-28 h-28 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Executives",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <img
              src="/confident-executive.png"
              alt="Lisa Wang"
              className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Lisa Wang</h4>
              <p className="text-primary text-sm font-medium">Marketing Executive</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Linkedin className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Instagram className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <img
              src="/professional-asian-person.png"
              alt="James Thompson"
              className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">James Thompson</h4>
              <p className="text-primary text-sm font-medium">Events Executive</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Linkedin className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Instagram className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <img
              src="/professional-person-office.png"
              alt="Maria Garcia"
              className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Maria Garcia</h4>
              <p className="text-primary text-sm font-medium">Community Executive</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Linkedin className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Instagram className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <img
              src="/event-planner-workspace.png"
              alt="Alex Kumar"
              className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Alex Kumar</h4>
              <p className="text-primary text-sm font-medium">Finance Executive</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Linkedin className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 bg-transparent hover:bg-primary/10">
                  <Instagram className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated professionals who make our mission possible through their expertise and commitment
          </p>
        </div>

        <div className="relative w-full overflow-clip">
          <Timeline data={teamData} />
        </div>
      </div>
    </section>
  )
}
