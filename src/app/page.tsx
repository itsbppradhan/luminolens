import Dashboard from "@/components/dashboard";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SignedOut>
        <div className="min-h-screen bg-gradient-to-br from-white via-neutral-100 to-blue-50 text-black dark:bg-gradient-to-br dark:from-black dark:via-neutral-900 dark:to-neutral-950 dark:text-white flex flex-col font-sans transition-colors">
          <header className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center relative">
            <div className="absolute inset-0 pointer-events-none select-none opacity-30 blur-2xl z-0" aria-hidden>
              <Image
                src="/logo.jpg"
                alt="LuminoLens logo"
                fill
                style={{ objectFit: "cover" }}
                className="object-cover w-full h-full grayscale contrast-125"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <Image
                src="/logo.jpg"
                alt="LuminoLens logo"
                width={80}
                height={80}
                className="rounded-full shadow-lg border border-black/10 dark:border-white/10"
              />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-black via-neutral-700 to-blue-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-blue-400">
                LuminoLens
              </h1>
              <p className="text-lg sm:text-2xl font-light max-w-xl mx-auto text-black/70 dark:text-white/70">
                Protect Your Eyes. Power Your Day.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/sign-in"
                  className="inline-block px-8 py-3 rounded-md bg-black text-white font-semibold shadow-lg hover:bg-blue-500 hover:text-white dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white transition"
                >
                  Shop Now
                </Link>
                <Link
                  href="/sign-in"
                  className="inline-block px-8 py-3 rounded-md bg-white text-black font-semibold shadow-lg border border-black/10 hover:bg-neutral-200 hover:text-black dark:bg-neutral-900 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white transition"
                >
                  Explore Your Glasses
                </Link>
                </div>
            </div>
          </header>

          <section className="max-w-3xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2">
            <div className="bg-black/5 rounded-xl p-6 flex flex-col gap-3 shadow-lg border border-black/10 dark:bg-white/5 dark:border-white/10">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">The Problem</h2>
              <p className="text-black/70 text-sm dark:text-white/70">
                Long hours on screens cause digital eye strain, headaches, and poor sleep. Most blue light glasses are overpriced or unverified, with little guidance for users.
              </p>
            </div>
            <div className="bg-black/5 rounded-xl p-6 flex flex-col gap-3 shadow-lg border border-black/10 dark:bg-white/5 dark:border-white/10">
              <h2 className="text-xl font-semibold text-black dark:text-white">Our Solution</h2>
              <p className="text-black/70 text-sm dark:text-white/70">
                Affordable, certified blue light glasses with a QR-linked microsite: eye care exercises, research, and transparent certification—designed for students, coders, and creators.
              </p>
            </div>
          </section>

          <section className="max-w-3xl mx-auto px-4 py-12">
            <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Image
              src="/1.jpg"
              alt="Showcase 1"
              width={320}
              height={240}
              className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <span className="mt-2 text-sm text-black/70 dark:text-white/70">Modern Frames</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
              src="/2.jpg"
              alt="Showcase 2"
              width={320}
              height={240}
              className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <span className="mt-2 text-sm text-black/70 dark:text-white/70">Blue Light Protection</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
              src="/3.jpg"
              alt="Showcase 3"
              width={320}
              height={240}
              className="rounded-lg shadow-lg object-cover w-full h-64"
              />
              <span className="mt-2 text-sm text-black/70 dark:text-white/70">Comfort for All Day</span>
            </div>
          </div>
        </section>

          </section>

          <section className="max-w-5xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="bg-neutral-100 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-black/10 dark:bg-neutral-900 dark:border-white/10">
              <span className="text-3xl">💸</span>
              <h3 className="font-semibold text-black dark:text-white">Affordable</h3>
              <p className="text-xs text-black/60 dark:text-white/60">Student-friendly pricing (₹399–₹799)</p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-black/10 dark:bg-neutral-900 dark:border-white/10">
              <span className="text-3xl">🔬</span>
              <h3 className="font-semibold text-black dark:text-white">Verified</h3>
              <p className="text-xs text-black/60 dark:text-white/60">Certified lenses, transparent test reports</p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-black/10 dark:bg-neutral-900 dark:border-white/10">
              <span className="text-3xl">📖</span>
              <h3 className="font-semibold text-black dark:text-white">Educational</h3>
              <p className="text-xs text-black/60 dark:text-white/60">Daily eye exercises & ergonomic tips</p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-5 flex flex-col items-center text-center gap-2 border border-black/10 dark:bg-neutral-900 dark:border-white/10">
              <span className="text-3xl">🕶️</span>
              <h3 className="font-semibold text-black dark:text-white">Minimal Design</h3>
              <p className="text-xs text-black/60 dark:text-white/60">Lightweight, modern frames for all-day wear</p>
            </div>
          </section>

          <section id="buy" className="flex flex-col items-center py-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
              Ready to protect your eyes?
            </h2>
            <Link
              href="/sign-in"
              className="px-8 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-lg hover:bg-black hover:text-white dark:bg-blue-500 dark:hover:bg-white dark:hover:text-black transition"
            >
              Get LuminoLens
            </Link>
            <p className="mt-2 text-xs text-black/50 dark:text-white/50">
              For bulk or custom orders, contact us at{" "}
              <a href="mailto:support@luminolens.com" className="underline">
                support@luminolens.com
              </a>
            </p>
          </section>

          <footer className="mt-auto py-8 px-4 bg-neutral-100 border-t border-black/10 text-center text-xs text-black/50 dark:bg-neutral-950 dark:border-white/10 dark:text-white/50">
            <div className="max-w-2xl mx-auto flex flex-col gap-2">
              <span>
                Future Vision: UV sunglasses, ergonomic accessories, AR/VR health compliance, and school collaborations.
              </span>
              <span className="opacity-70">
                © {new Date().getFullYear()} LuminoLens. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </SignedOut>
    <SignedIn><Dashboard /></SignedIn>
    </main>
  );
}
