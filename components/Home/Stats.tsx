import React from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <div className="mt-40 rounded-2xl bg-zinc-900 p-8">
      <div className="grid gap-y-8 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
