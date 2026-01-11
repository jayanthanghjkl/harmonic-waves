import { LayoutDashboard, ShieldCheck, Zap } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Intuitive Design",
            description: "Our interfaces are designed with the user in mind, ensuring ease of use and accessibility.",
        },
        {
            icon: ShieldCheck,
            title: "Secure by Default",
            description: "We prioritize security at every layer of our application stack.",
        },
        {
            icon: Zap,
            title: "High Performance",
            description: "Optimized for speed and efficiency, ensuring your business never misses a beat.",
        },
    ];

    return (
        <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto px-4 rounded-3xl my-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                    Features
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Discover what sets us apart from the competition.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 pt-8">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative overflow-hidden rounded-lg border bg-background p-2 transition-transform duration-300 ease-in-out hover:transform-gpu hover:-translate-y-2"
                    >
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 feature-card-gradient">
                            <feature.icon className="h-12 w-12 text-primary" />
                            <div className="space-y-2">
                                <h3 className="font-bold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
