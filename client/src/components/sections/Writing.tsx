import { Section, FadeIn } from "../ui/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";

const featuredArticles = [
  {
    title: "How I Learned Recursion by Breaking It Repeatedly",
    description: "A deep dive into understanding recursion through failures and iterative improvements.",
    readTime: "6 min read",
    tag: "DSA",
    isRecommended: false,
    link: "https://medium.com/@rupeshkatariya1787"
  },
  {
    title: "What Building My Portfolio Taught Me About Product Thinking",
    description: "Lessons in user experience, design decisions, and technical communication from creating a personal brand.",
    readTime: "8 min read",
    tag: "Product",
    isRecommended: false,
    link: "https://medium.com/@rupeshkatariya1787"
  },
  {
    title: "DSA Is Not About Problems, It's About Patterns",
    description: "Shifting mindset from solving individual problems to recognizing and applying algorithmic patterns.",
    readTime: "5 min read",
    tag: "Learning",
    isRecommended: false,
    link: "https://medium.com/@rupeshkatariya1787"
  }
];

export function Writing() {
  return (
    <Section id="writing">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <BookOpen size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Writing & Learning
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            I regularly write technical blogs to document my learning journey, simplify complex topics, and improve my communication skills.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
            <a href="https://medium.com/@rupeshkatariya1787" target="_blank" rel="noopener noreferrer">
              Read on Medium
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="bg-card/50 border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {article.tag}
                        </span>
                        {article.isRecommended && (
                          <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded-full flex items-center gap-1">
                            ⭐ Recommended
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-normal" asChild>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read Article <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
