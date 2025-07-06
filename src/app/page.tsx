import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <SignedOut>
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-950 text-white flex flex-col font-sans">
      <header className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center relative">
        <div className="absolute inset-0 pointer-events-none select-none opacity-40 blur-2xl z-0" aria-hidden>
          <Image src="/logo.jpg" alt="LuminoLens logo" fill style={{objectFit:'cover'}} className="object-cover w-full h-full grayscale contrast-125" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <Image src="/logo.jpg" alt="LuminoLens logo" width={80} height={80} className="rounded-full shadow-lg border border-white/10" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-blue-400 bg-clip-text text-transparent">LuminoLens</h1>
          <p className="text-lg sm:text-2xl font-light max-w-xl mx-auto text-white/70">Protect Your Eyes. Power Your Day.</p>
          <a href="#buy" className="mt-4 inline-block px-8 py-3 rounded-md bg-white text-black font-semibold shadow-lg hover:bg-blue-500 hover:text-white transition">Shop Now</a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2">
        <div className="bg-white/5 rounded-xl p-6 flex flex-col gap-3 shadow-lg border border-white/10">
          <h2 className="text-xl font-semibold text-blue-400">The Problem</h2>
          <p className="text-white/70 text-sm">Long hours on screens cause digital eye strain, headaches, and poor sleep. Most blue light glasses are overpriced or unverified, with little guidance for users.</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 flex flex-col gap-3 shadow-lg border border-white/10">
          <h2 className="text-xl font-semibold text-white">Our Solution</h2>
          <p className="text-white/70 text-sm">Affordable, certified blue light glasses with a QR-linked microsite: eye care exercises, research, and transparent certification—designed for students, coders, and creators.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="bg-neutral-900 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-white/10">
          <span className="text-3xl">💸</span>
          <h3 className="font-semibold text-white">Affordable</h3>
          <p className="text-xs text-white/60">Student-friendly pricing (₹399–₹799)</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-white/10">
          <span className="text-3xl">🔬</span>
          <h3 className="font-semibold text-white">Verified</h3>
          <p className="text-xs text-white/60">Certified lenses, transparent test reports</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-white/10">
          <span className="text-3xl">📖</span>
          <h3 className="font-semibold text-white">Educational</h3>
          <p className="text-xs text-white/60">Daily eye exercises & ergonomic tips</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-white/10">
          <span className="text-3xl">🕶️</span>
          <h3 className="font-semibold text-white">Minimal Design</h3>
          <p className="text-xs text-white/60">Lightweight, modern frames for all-day wear</p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="buy" className="flex flex-col items-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to protect your eyes?</h2>
        <a href="#" className="px-8 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:bg-white hover:text-black transition">Get LuminoLens</a>
        <p className="mt-2 text-xs text-white/50">For bulk or custom orders, contact us at <a href="mailto:support@luminolens.com" className="underline">support@luminolens.com</a></p>
      </section>

      {/* Future Vision */}
      <footer className="mt-auto py-8 px-4 bg-neutral-950 border-t border-white/10 text-center text-xs text-white/50">
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          <span>Future Vision: UV sunglasses, ergonomic accessories, AR/VR health compliance, and school collaborations.</span>
          <span className="opacity-70">© {new Date().getFullYear()} LuminoLens. All rights reserved.</span>
        </div>
      </footer>
    </div>
    </SignedOut>
    <SignedIn>WE COOK</SignedIn>
    </main>
  );
}

// Image suggestions:
// - Replace the hero section background with a subtle, abstract, futuristic image (e.g., AI, digital mesh, or blue light effect). Unsplash/Pexels: search "futuristic abstract background".
// - Replace icons in Unique Selling Points with SVGs or icon components for a more polished look.
// - Replace logo.jpg with your actual logo if available.
