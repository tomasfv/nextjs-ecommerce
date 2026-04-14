"use client";

import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
];

export const Carousel = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/products">
      <Card className="relative overflow-hidden rounded-xl shadow-2xl border-none !p-0 !ring-0">
        <div className="relative h-[400px] w-full overflow-hidden">
          {IMAGES.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                }`}
              priority={index === 0}
            />
          ))}

          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === current ? "bg-white w-6" : "bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </Link>

  );
};

