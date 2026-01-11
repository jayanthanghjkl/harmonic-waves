import { AnimatedBeamBackground } from "@/components/ui/animated-beam-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Music, Mic2, Radio, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <AnimatedBeamBackground />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="z-10 max-w-4xl space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            The Future of <span className="text-gradient">Sound</span> is Here
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            HarmonicWave bridges the gap between raw talent and global success.
            We are a next-generation music company dedicated to sonic excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-lg h-12">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 text-lg h-12">
              <Link href="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4 md:px-8 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">What We Do</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Comprehensive solutions for the modern artist. From studio to stage, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Music className="w-10 h-10 text-accent" />}
              title="Music Production"
              description="State-of-the-art studios and world-class producers to refine your sound."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-accent" />}
              title="Artist Management"
              description="Strategic career planning, branding, and contract negotiation."
            />
            <FeatureCard
              icon={<Mic2 className="w-10 h-10 text-accent" />}
              title="Live Events"
              description="Booking, logistics, and production for tours and concerts worldwide."
            />
            <FeatureCard
              icon={<Radio className="w-10 h-10 text-accent" />}
              title="Streaming Solutions"
              description="Digital distribution and playlist pitching to maximize your reach."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 glass p-12 rounded-3xl border-primary/20">
          <h2 className="text-4xl font-bold text-foreground">Ready to Amplify Your Career?</h2>
          <p className="text-foreground/80 text-lg">
            Join the roster of legends. Let's create something extraordinary together.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-6 text-xl h-auto shadow-[0_0_20px_rgba(184,227,233,0.3)] hover:shadow-[0_0_30px_rgba(184,227,233,0.5)] transition-shadow duration-300">
            <Link href="/contact" className="flex items-center gap-2">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#0B2E33]/50 border-accent/20 hover:border-accent/60 transition-colors duration-300 group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader>
        <div className="mb-4 p-3 bg-surface/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/60">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
