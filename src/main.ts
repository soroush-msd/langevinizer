import "./style.css"
import type { Particle } from "./types";
import { render } from "./renderer";

function rand(min: number, max:number): number {
  return Math.random() * (max - min) + min;
}

// grab canva element from DOM
const canvas = document.getElementById("text_input") as HTMLCanvasElement | null;
if (!canvas) {
  throw new Error('Canvas not found');
}

// get context
const ctxTemp = canvas.getContext("2d");
if(!ctxTemp) {
  throw new Error("no context!")
}
const ctx: CanvasRenderingContext2D = ctxTemp;

// set size
canvas.width = 800;
canvas.height = 400;

// dummy particles with random xy
const particles: Particle[] = Array.from({ length: 10}, () => ({
  x: rand(0, canvas.width),
  y: rand(0, canvas.height),
  x_final: rand(0, canvas.width),
  y_final: rand(0, canvas.height),
}));

// caall render in a requestAnimationFrame loop
function loop(): void {
  render(ctx, particles);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


