"use client";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-400">
        Location
      </label>
      <input
        type="text"
        autoComplete="street-address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter location"
        className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
      />
    </div>
  );
}
