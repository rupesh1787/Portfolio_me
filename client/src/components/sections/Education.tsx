import { Section, FadeIn } from "../ui/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="bg-muted/30 pt-16 md:pt-24 pb-14 md:pb-20">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Education
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <Card className="bg-card/70 border-border/70 hover:border-primary/30 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                    B.Tech in Computer Science
                  </CardTitle>
                  <p className="text-sm text-primary/70 font-medium mt-2">
                    Specialization in Data Science
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Institution:</span> Shri
                  Ramdeobaba University, Nagpur
                </p>
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Duration:</span> 4 Years
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">CGPA:</span> 8.46
                </p>
              </div>
              <div className="pt-2">
                <Badge variant="secondary" className="text-xs">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
