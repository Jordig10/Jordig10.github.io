import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const CHARSET = "01{}[]<>/;#$%&+=~^_".split("");
const FONT_SIZE = 20;
const COLUMN_WIDTH = 34;
// Fracción de la altura, desde arriba, donde empieza a desvanecerse el efecto.
const FADE_START = 0.82;

interface Drop {
  y: number;
  speed: number;
  char: string;
  nextCharAt: number;
}

interface FallingCharactersProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  maxOpacity?: number;
  className?: string;
}

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

function makeDrop(height: number): Drop {
  return {
    y: -Math.random() * height,
    speed: 30 + Math.random() * 40,
    char: randomChar(),
    nextCharAt: Math.random() * 2000,
  };
}

export const FallingCharacters: React.FC<FallingCharactersProps> = ({
  color,
  maxOpacity = 0.22,
  className,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [resolvedColor, setResolvedColor] = useState<string>("rgb(0, 0, 0)");

  const resolveColor = useCallback((colorValue: string | undefined): string => {
    if (typeof window === "undefined") return "rgb(0, 0, 0)";
    const colorToResolve = colorValue || "var(--link)";
    if (colorToResolve.startsWith("var(")) {
      const tempEl = document.createElement("div");
      tempEl.style.color = colorToResolve;
      tempEl.style.position = "absolute";
      tempEl.style.visibility = "hidden";
      document.body.appendChild(tempEl);
      const computedColor = window.getComputedStyle(tempEl).color;
      document.body.removeChild(tempEl);
      return computedColor || "rgb(0, 0, 0)";
    }
    return colorToResolve;
  }, []);

  useEffect(() => {
    const updateColor = () => setResolvedColor(resolveColor(color));
    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [color, resolveColor]);

  const rgbPrefix = useMemo(() => {
    if (typeof window === "undefined") return "rgba(0, 0, 0,";
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "rgba(255, 0, 0,";
    ctx.fillStyle = resolvedColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  }, [resolvedColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let drops: Drop[] = [];
    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    // Se mide contra el viewport (no el contenedor) porque esta capa es
    // "fixed inset-0": es más fiable en móvil que clientWidth/clientHeight,
    // que puede leerse antes de que el layout haya asentado del todo.
    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const columns = Math.max(1, Math.floor(width / COLUMN_WIDTH));
      drops = Array.from({ length: columns }, () => makeDrop(height));
    };

    setupCanvas();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;
      const deltaTime = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE * dpr}px monospace`;
      ctx.textBaseline = "top";

      drops.forEach((drop, i) => {
        drop.y += drop.speed * deltaTime;
        drop.nextCharAt -= deltaTime * 1000;
        if (drop.nextCharAt <= 0) {
          drop.char = randomChar();
          drop.nextCharAt = 400 + Math.random() * 1200;
        }
        if (drop.y > height) {
          drops[i] = makeDrop(0);
          return;
        }

        const fadeZone = height * (1 - FADE_START);
        const distanceFromBottom = height - drop.y;
        const fadeFactor =
          distanceFromBottom < fadeZone
            ? Math.max(distanceFromBottom / fadeZone, 0)
            : 1;

        ctx.fillStyle = `${rgbPrefix}${maxOpacity * fadeFactor})`;
        ctx.fillText(
          drop.char,
          (i * COLUMN_WIDTH + COLUMN_WIDTH / 4) * dpr,
          drop.y * dpr
        );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => setupCanvas();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      intersectionObserver.disconnect();
    };
  }, [rgbPrefix, maxOpacity, isInView]);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="pointer-events-none" />
    </div>
  );
};
