import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 hero-gradient">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
                <Link
                    href="/about"
                    className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                    target="_blank"
                >
                    Follow along on Twitter
                </Link>
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up">
                    Transform Your Business <br className="hidden md:inline" />
                    with Acme Inc.
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-in-up animation-delay-300">
                    We provide cutting-edge solutions for modern enterprises.
                    Scalable, secure, and built for the future.
                </p>
                <div className="space-x-4 animate-fade-in-up animation-delay-600">
                    <Button asChild size="lg" className="cta-button">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
