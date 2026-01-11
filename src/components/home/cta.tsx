import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="container py-8 md:py-12 lg:py-24 mx-auto px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                    Ready to get started?
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Join hundreds of satisfied customers who trust Acme Inc.
                </p>
                <Button asChild size="lg" className="mt-4 cta-button">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </section>
    );
}
