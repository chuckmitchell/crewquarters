"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">CrewQuarters</h1>
        <p className="text-lg">Prototype built with Next.js 16 + HeroUI</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button color="primary" variant="solid" as="a" href="/projects/new">
            Get Started
          </Button>
          <Button color="secondary" variant="bordered">
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
}
