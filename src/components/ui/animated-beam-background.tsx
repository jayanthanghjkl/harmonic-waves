"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedBeamBackground = ({
    className,
}: {
    className?: string;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setSize({ w: window.innerWidth, h: window.innerHeight });
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = size.w;
        canvas.height = size.h;

        const beams: Beam[] = [];
        const beamCount = 8;

        for (let i = 0; i < beamCount; i++) {
            beams.push(new Beam(size.w, size.h));
        }

        let animationId: number;

        const animate = () => {
            ctx.fillStyle = "#0B2E33"; // Background color to clear
            ctx.fillRect(0, 0, size.w, size.h);

            beams.forEach((beam) => {
                beam.update();
                beam.draw(ctx);
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, [size]);

    return (
        <div className={cn("fixed inset-0 z-0 pointer-events-none", className)}>
            <canvas ref={canvasRef} className="w-full h-full opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
    );
};

class Beam {
    x: number;
    y: number;
    speed: number;
    angle: number;
    width: number;
    length: number;
    color: string;
    w: number;
    h: number;

    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.angle = 0;
        this.width = 0;
        this.length = 0;
        this.color = "";
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.w;
        this.y = this.h + Math.random() * 200; // Start below screen
        this.speed = 1 + Math.random() * 2;
        this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5; // Upwards with slight tilt
        this.width = 1 + Math.random() * 3;
        this.length = 100 + Math.random() * 300;
        this.color = Math.random() > 0.5 ? "rgba(184, 227, 233, 0.1)" : "rgba(79, 124, 130, 0.1)"; // Highlight vs Accent
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.y < -this.length) {
            this.reset();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        const gradient = ctx.createLinearGradient(0, 0, 0, this.length);
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(-this.width / 2, 0, this.width, this.length);
        ctx.restore();
    }
}
