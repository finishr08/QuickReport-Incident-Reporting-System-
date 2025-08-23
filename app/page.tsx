import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import TrustBadge from "@/components/Home/Trust";
import Features from "@/components/Home/Features";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <Hero />

          {/* Features Grid */}
          <Features />

          {/* Stats Section */}
          <Stats />

          {/* Trust Badge */}
          <TrustBadge />
        </div>
      </main>
    </div>
  );
}
