import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16 animate-fade-in-up">
            {/* Contact Info */}
            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Let's Create <br /><span className="text-primary">Magic</span></h1>
                    <p className="text-xl text-foreground/60 leading-relaxed">
                        Ready to take the next step? Fill out the form or reach out directly. We can't wait to hear from you.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center shrink-0">
                            <Mail className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email Us</h3>
                            <p className="text-foreground/60">hello@harmonicwave.com</p>
                            <p className="text-foreground/60">demo@harmonicwave.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Call Us</h3>
                            <p className="text-foreground/60">+1 (555) 123-4567</p>
                            <p className="text-foreground/60">Mon-Fri, 9am - 6pm EST</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Visit Us</h3>
                            <p className="text-foreground/60">123 Soundwave Blvd,</p>
                            <p className="text-foreground/60">Nashville, TN 37203</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-3xl border-t border-white/10">
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" className="bg-background/50 border-white/10 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" className="bg-background/50 border-white/10 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about yourself and your goals..." className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
}
