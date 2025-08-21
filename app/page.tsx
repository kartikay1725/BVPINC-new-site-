import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { MentorsSection } from "@/components/mentors-section"
import { TeamSection } from "@/components/team-section"
import { EventsSection } from "@/components/events-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <MentorsSection />
      <TeamSection />
      <EventsSection />
      <FooterSection />
    </main>
  )
}
