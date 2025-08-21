import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Purpose & Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by purpose, guided by vision, and committed to making a lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and organizations through innovative leadership development, mentorship programs,
                and collaborative initiatives that drive meaningful change in our communities and industries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                To be the leading catalyst for transformative leadership and innovation, creating a global network of
                changemakers who shape a better future for all through collaboration, wisdom, and purposeful action.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
