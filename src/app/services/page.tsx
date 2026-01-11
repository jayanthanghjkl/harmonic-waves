import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Music Production",
            price: "Custom",
            description: "Full-scale production from demo to master.",
            features: ["Professional Studio Access", "Top-tier Producers", "Mixing & Mastering", "Dolby Atmos Support"]
        },
        {
            title: "Artist Management",
            price: "Commission Based",
            description: "Career guidance and strategic planning.",
            features: ["Brand Development", "Contract Negotiation", "Tour Planning", "PR & Marketing"]
        },
        {
            title: "Live Events",
            price: "Project Based",
            description: "Unforgettable experiences for your fans.",
            features: ["Venue Booking", "Production Design", "Logistics Team", "Ticketing Solutions"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our <span className="text-primary">Services</span></h1>
                <p className="text-xl text-foreground/60">
                    Tailored solutions for every stage of your musical journey.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col bg-surface/5 border-white/10 hover:border-primary/50 transition-colors duration-300">
                        <CardHeader>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-accent">{service.price}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <p className="text-foreground/70">{service.description}</p>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <Check className="w-4 h-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300">
                                <Link href="/contact">Inquire Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* FAQ or Additional Info could go here */}
            <section className="glass rounded-3xl p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Need something custom?</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                    We understand that every artist is unique. Contact us to discuss a bespoke package tailored to your specific needs.
                </p>
                <Button asChild variant="secondary">
                    <Link href="/contact">Get a Custom Quote</Link>
                </Button>
            </section>
        </div>
    );
}
