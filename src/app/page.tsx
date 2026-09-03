import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroNeuralField } from "@/components/visuals/HeroNeuralField";
import { HeroScrollScene } from "@/components/visuals/HeroScrollScene";
import { MobileScanPreview } from "@/components/visuals/MobileScanPreview";
import { ScannerComparison } from "@/components/visuals/ScannerComparison";
import { ScrollReveal } from "@/components/visuals/ScrollReveal";
import {
  approachPoints,
  directionPoints,
  problemPoints,
  statusFacts
} from "@/data/site-content";
import { NavBar } from "@/sections/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollReveal />
      <NavBar />

      {/* ── Hero ── */}
      <section
        className="relative isolate bg-navy-950 pt-28 text-white"
        id="home"
      >
        <div className="hero-aurora absolute inset-0" />
        <div className="noise-overlay absolute inset-0 opacity-75" />
        <HeroNeuralField />
        <HeroScrollScene />
        <div className="soft-glow absolute left-1/2 top-24 h-96 w-[52rem] -translate-x-1/2 bg-clinical-blue/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clinical-teal/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 sm:px-8 sm:pb-14 lg:grid-cols-[0.98fr_1.02fr] lg:pb-10">
          <div className="hero-scroll-copy relative z-10">
            <h1 className="load-rise load-rise-delay-1 text-balance max-w-4xl text-[2.35rem] font-semibold leading-[1.04] tracking-normal sm:text-6xl sm:leading-[1.06]">
              <span className="block text-white">Multi-site brain MRI has a</span>
              {" "}
              <span className="block bg-gradient-to-r from-white via-clinical-cyan to-clinical-teal bg-clip-text text-transparent">
                measurement problem
              </span>
            </h1>
            <p className="load-rise load-rise-delay-2 mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Scanner differences can produce variation comparable in size to the
              biological change a study is trying to measure. Neuvara works on
              physics-informed normalisation: reducing scanner-driven variance
              while preserving biological signal.
            </p>
            <div className="load-rise load-rise-delay-3 relative z-20 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="#problem">See the problem</ButtonLink>
              <ButtonLink href="mailto:contact@neuvara.org" variant="secondary">
                contact@neuvara.org
              </ButtonLink>
            </div>
            <p className="load-rise load-rise-delay-3 mt-8 text-sm text-slate-400">
              UK-based · Research-stage · Two founders
            </p>
            <MobileScanPreview />
          </div>
          <div className="hero-scroll-visual load-rise load-rise-delay-2 relative z-10 hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_40px_120px_rgba(0,0,0,0.22)]" />
            <ScannerComparison />
          </div>
        </div>
        <div className="h-8 rounded-t-[2rem] bg-navy-950 sm:h-10" />
      </section>

      {/* ── Problem ── */}
      <section
        className="relative isolate bg-navy-950 px-5 pb-20 pt-16 text-white sm:px-8 lg:pb-28"
        id="problem"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(72,212,192,0.1),transparent_28rem),radial-gradient(circle_at_78%_28%,rgba(105,184,255,0.1),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal-on-scroll grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="The problem"
                title="The same patient does not produce the same numbers."
                body="Scanned on two different machines, one subject yields two different measurements. That blocks pooling across sites, limits how far a trained model generalises, and makes change over time harder to trust."
              />
            </div>
            <div className="grid gap-1">
              {problemPoints.map((point) => (
                <div
                  className="accent-item rounded-r-xl py-5 transition-colors"
                  key={point.title}
                >
                  <h3 className="text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section
        className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28"
        id="approach"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(169,107,200,0.09),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="Approach"
              title="Whether biological signal survives the correction."
              body="The question is not only whether scanner information can be reduced. A method that removes scanner variance and biology together is easy to build and looks tidy. It is not useful."
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {approachPoints.map((point, index) => (
              <div
                className={`premium-card reveal-on-scroll stagger-${index + 1} rounded-2xl p-7`}
                key={point.title}
              >
                <h3 className="text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where we are ── */}
      <section
        className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28"
        id="status"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="premium-surface reveal-on-scroll rounded-[2rem] p-8 sm:p-12">
            <SectionHeader
              eyebrow="Where we are"
              title="No product, no customers, no published results yet."
              body="Neuvara is a UK research-stage company run by two founders. Everything on this page describes work in progress, not a capability we are offering today."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {statusFacts.map((fact) => (
                <div className="stat-block" key={fact.title}>
                  <p className="text-sm font-semibold text-white">{fact.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    {fact.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Direction ── */}
      <section
        className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28"
        id="direction"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(105,184,255,0.09),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal-on-scroll">
            <SectionHeader
              align="center"
              eyebrow="Direction"
              title="Where this could go."
            />
          </div>
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
            {directionPoints.map((point, index) => (
              <div
                className={`premium-card reveal-on-scroll stagger-${index + 1} rounded-2xl p-8`}
                key={point.title}
              >
                <h3 className="text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {point.body}
                </p>
                {point.note ? (
                  <p className="mt-5 text-xs leading-6 text-slate-500">
                    {point.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28"
        id="contact"
      >
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="reveal-on-scroll">
            <SectionHeader
              align="center"
              eyebrow="Contact"
              title="Get in touch."
              body="We are interested in talking to people working on multi-site imaging, whether or not there is anything to sell yet. The fastest way to reach us is by email."
            />
          </div>
          <div className="reveal-on-scroll mt-9 flex justify-center">
            <ButtonLink href="mailto:contact@neuvara.org">
              contact@neuvara.org
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-navy-950 px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold">Neuvara</p>
          <p className="max-w-xl text-xs leading-6 text-slate-400">
            Neuvara is not a medical device and is not intended for clinical use.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <span>© 2026 Neuvara</span>
            <Link
              className="nav-link transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
              href="/privacy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
