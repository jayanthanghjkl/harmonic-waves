import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mic2, Music4, Award, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 space-y-24">
            {/* Intro Section */}
            <section className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    We Are <span className="text-gradient">HarmonicWave</span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                    Founded on the belief that music is the most powerful force in the world,
                    we have dedicated ourselves to nurturing talent and pushing the boundaries of sonic innovation.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                        To empower artists with the tools, platform, and guidance they need to reach their full potential.
                        We don't just produce music; we craft cultural moments.
                    </p>
                    <h2 className="text-3xl font-bold text-primary pt-4">Our Vision</h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                        A world where every unique voice has the chance to be heard, and where the barriers
                        between artist and audience are dissolved through technology and passion.
                    </p>
                </div>
                <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 to-accent/10 border border-white/5 flex items-center justify-center">
                    {/* Abstract visual placeholder */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1723293874654-6f419b042063?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100" />
                    <div className="relative z-10 p-8 glass rounded-2xl">
                        <span className="text-9xl font-bold text-foreground/10">HW</span>
                    </div>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold text-center">Creative Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <PhilosophyCard
                        icon={<Mic2 className="w-8 h-8 text-primary" />}
                        title="Authenticity First"
                        description="We believe in the raw, unfiltered truth of the artist. Your sound is your signature."
                    />
                    <PhilosophyCard
                        icon={<Music4 className="w-8 h-8 text-primary" />}
                        title="Sonic Innovation"
                        description="Embracing the latest technology to create sounds that haven't been heard before."
                    />
                    <PhilosophyCard
                        icon={<Award className="w-8 h-8 text-primary" />}
                        title="Excellence Always"
                        description="From the first demo to the final master, we accept nothing less than perfection."
                    />
                </div>
            </section>

            {/* Team CTA */}
            <section className="text-center py-16 border-t border-white/5">
                <h2 className="text-3xl font-bold mb-6">Want to join the movement?</h2>
                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/contact">Work With Us</Link>
                </Button>
            </section>
        </div>
    );
}

function PhilosophyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="glass p-8 rounded-2xl space-y-4 hover:bg-surface/20 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center border border-white/5">
                {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-foreground/60">{description}</p>
        </div>
    )
}
