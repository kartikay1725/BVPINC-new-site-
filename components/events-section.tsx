"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, X } from "lucide-react"
import { useEffect, useState } from "react"

const upcomingEvents = [
  {
    title: "Innovation Workshop Series",
    date: "April 10, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual Event",
    attendees: 200,
    type: "Workshop",
    shortDescription: "Hands-on workshop focusing on design thinking and problem-solving.",
    fullDescription:
      "Join us for an intensive hands-on workshop focusing on design thinking, problem-solving, and innovative approaches to business challenges. This interactive session will guide you through proven methodologies used by leading companies to drive innovation and solve complex problems. You'll work in teams, tackle real-world scenarios, and leave with practical tools you can immediately apply in your organization.",
  },
  {
    title: "Tech Leadership Conference",
    date: "May 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Center, Downtown",
    attendees: 300,
    type: "Conference",
    shortDescription: "Annual conference bringing together tech leaders to discuss emerging trends.",
    fullDescription:
      "Our flagship annual conference brings together the brightest minds in technology leadership to discuss emerging trends, share insights, and explore future opportunities. Featuring keynote speakers from Fortune 500 companies, interactive panel discussions, and networking sessions designed to help you build meaningful professional relationships. This full-day event covers topics ranging from AI and machine learning to sustainable technology practices and digital transformation strategies.",
  },
  {
    title: "Startup Pitch Night",
    date: "June 8, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Tech Hub, Silicon Valley",
    attendees: 120,
    type: "Networking",
    shortDescription: "Watch promising startups pitch their ideas to investors and experts.",
    fullDescription:
      "Experience the excitement of entrepreneurship at our Startup Pitch Night! Watch as promising startups present their innovative ideas to a panel of seasoned investors and industry experts. This evening event features 8-10 carefully selected startups across various industries, followed by networking opportunities with founders, investors, and fellow entrepreneurs. Whether you're looking for investment opportunities, seeking inspiration for your own venture, or simply want to be part of the startup ecosystem, this event offers valuable insights into the world of entrepreneurship.",
  },
]

const pastEvents = [
  {
    title: "Leadership Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Center, Downtown",
    attendees: 150,
    type: "Conference",
    description:
      "Industry leaders shared insights on the future of leadership in a rapidly changing business landscape.",
    image: "/modern-conference-presentation.png",
  },
  {
    title: "Mentor-Mentee Networking",
    date: "February 28, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Tech Hub, Silicon Valley",
    attendees: 80,
    type: "Networking",
    description:
      "Successful networking event that connected mentors and mentees for meaningful professional relationships.",
    image: "/networking-event.png",
  },
  {
    title: "Digital Transformation Workshop",
    date: "January 20, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Business Center, Midtown",
    attendees: 95,
    type: "Workshop",
    description:
      "Comprehensive workshop on digital transformation strategies that helped businesses modernize their operations.",
    image: "/workshop-collaboration.png",
  },
]

function EventGrid({
  events,
  showRegisterButton = true,
}: { events: typeof upcomingEvents; showRegisterButton?: boolean }) {
  const [selectedEvent, setSelectedEvent] = useState<(typeof upcomingEvents)[0] | null>(null)

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card
            key={index}
            className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10 ${
              !showRegisterButton ? "opacity-90" : ""
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge
                  className={showRegisterButton ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}
                >
                  {event.type}
                </Badge>
              </div>
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {event.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {(event as any).shortDescription || event.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>
                    {event.attendees} {showRegisterButton ? "attendees expected" : "attendees"}
                  </span>
                </div>
              </div>

              {showRegisterButton ? (
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setSelectedEvent(event as any)}
                  >
                    Learn More
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full mt-6 bg-transparent" disabled>
                  Event Completed
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedEvent(null)}
          />
          <div className="relative bg-card border border-border rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100 animate-in fade-in-0 zoom-in-95">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
              <div>
                <Badge className="bg-accent text-accent-foreground mb-2">{selectedEvent.type}</Badge>
                <h3 className="text-2xl font-bold text-foreground">{selectedEvent.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedEvent(null)}
                className="hover:bg-muted transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {selectedEvent.date} • {selectedEvent.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{selectedEvent.attendees} attendees expected</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">About This Event</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedEvent.fullDescription}</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1" size="lg">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedEvent(null)}
                  className="transition-colors duration-200"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function AutoSlidingPastEvents({ events }: { events: typeof pastEvents }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    }, 4000) // Auto-slide every 4 seconds

    return () => clearInterval(interval)
  }, [events.length])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10 opacity-90 max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-muted text-muted-foreground">{event.type}</Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 bg-transparent" disabled>
                  Event Completed
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {events.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function EventsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for inspiring events designed to accelerate your growth and expand your network
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-foreground mb-3">Upcoming Events</h3>
            <p className="text-muted-foreground">Don't miss these exciting opportunities to learn and connect</p>
          </div>
          <EventGrid events={upcomingEvents} showRegisterButton={true} />
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-foreground mb-3">Past Events</h3>
            <p className="text-muted-foreground">
              Take a look at our successful events and what we've accomplished together
            </p>
          </div>
          <AutoSlidingPastEvents events={pastEvents} />
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
