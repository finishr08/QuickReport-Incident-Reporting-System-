import React from "react";

export default function TrustBadge() {
  return (
    <div>
      <div className="mt-40 mb-20 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Trusted by Law Enforcement Nationwide
        </div>
      </div>
    </div>
  );
}
