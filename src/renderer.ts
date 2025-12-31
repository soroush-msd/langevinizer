import type { Particle } from "./types";

export function render (
    ctx: CanvasRenderingContext2D,
    particles: Particle[]
): void {
    const canvas = ctx.canvas;

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw particles
    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI *2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}