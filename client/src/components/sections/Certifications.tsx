import { Section, FadeIn } from "../ui/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Deloitte – Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: 2025,
    link: "https://drive.google.com/file/d/1l9C9dxTioZTBBCtxOPDWsP0sINwB2aON/view",
  },
  {
    title: "Oracle Cloud Infrastructure – AI Foundations Associate",
    issuer: "Oracle",
    year: 2025,
    link: "https://drive.google.com/file/d/1HkLGkUqGwpRQRlHRb8VK1xnW50nFokCw/view",
  },
  {
    title: "Eduskills Certification",
    issuer: "Eduskills / Shri Ramdeobaba University",
    year: 2025,
    link: "https://drive.google.com/file/d/1UecTNF3JKhzgPxg4k1-NcQk9ibM4f3nO/view",
  },
];

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="h-full bg-card/70 border-border/70 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none" />
          
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary/80 mb-3"
                >
                  {cert.year}
                </Badge>
                <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
              </div>
              <ExternalLink
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1"
              />
            </div>
          </CardHeader>
          
          <CardContent className="pt-0 relative z-10">
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </CardContent>
        </Card>
      </motion.a>
    </FadeIn>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" className="pt-16 md:pt-24 pb-14 md:pb-20">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Certifications & Learning
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </Section>
  );
}
