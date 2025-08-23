import React from "react";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <div className="mt-40 grid gap-6 sm:grid-cols-3">
      {features.map((feature, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
              {feature.icon}
            </div>
            <h3 className="mb-3 text-lg font-medium text-white">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
