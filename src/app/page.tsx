import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrainLogo } from "@/components/ui/Logo";
import { ClinicalHeroVisual } from "@/components/visuals/ClinicalHeroVisual";
import { HeroNeuralField } from "@/components/visuals/HeroNeuralField";
import { HeroScrollScene } from "@/components/visuals/HeroScrollScene";
import { MobileScanPreview } from "@/components/visuals/MobileScanPreview";
import { ScrollReveal } from "@/components/visuals/ScrollReveal";
import {
  competitiveAdvantages,
  problemPoints,
  validationApproach,
  whyNeuvara
} from "@/data/site-content";
import { ContactForm } from "@/sections/ContactForm";
import { EvidenceStrip } from "@/sections/EvidenceStrip";
import { IntelligenceTimeline } from "@/sections/IntelligenceTimeline";
import { NavBar } from "@/sections/NavBar";
import { PartnershipSegments } from "@/sections/PartnershipSegments";
import { PlatformExplorer } from "@/sections/PlatformExplorer";
import { Roadmap } from "@/sections/Roadmap";
import { TechnologyCard } from "@/sections/TechnologyCard";
import { ValidationTrust } from "@/sections/ValidationTrust";
import { Workflow } from "@/sections/Workflow";

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
              <span className="block text-white">AI for rare disease</span>
              {" "}
              <span className="block bg-gradient-to-r from-white via-clinical-cyan to-clinical-teal bg-clip-text text-transparent">
                prediction from MRI
              </span>
            </h1>
            <p className="load-rise load-rise-delay-2 mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Rare neurological diseases often take years to diagnose. Neuvara is
              building AI systems that help uncover diagnostic signals hidden
              within medical imaging and clinical data.
            </p>
            <div className="load-rise load-rise-delay-3 relative z-20 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="#platform">Explore the Platform</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
            <MobileScanPreview />
          </div>
          <div className="hero-scroll-visual load-rise load-rise-delay-2 relative z-10 hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_40px_120px_rgba(0,0,0,0.22)]" />
            <ClinicalHeroVisual />
          </div>
        </div>
        <div className="h-8 rounded-t-[2rem] bg-navy-950 sm:h-10" />
      </section>

      {/* ── Platform overview ── */}
      <section className="relative isolate bg-navy-950 px-5 pb-20 pt-0 text-white sm:px-8 lg:pb-28" id="platform">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(72,212,192,0.1),transparent_28rem),radial-gradient(circle_at_78%_28%,rgba(105,184,255,0.1),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal-on-scroll">
            <EvidenceStrip />
          </div>

          {/* Why Neuvara — accent-list layout instead of uniform cards */}
          <div className="reveal-on-scroll mt-20 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Why Neuvara"
                title="Built for the realities of rare neurological disease research."
                body="Neuvara focuses on the parts of medical AI that matter before clinical deployment: signal quality, clinical context, scanner variation, and evidence that can be reviewed by specialists."
              />
            </div>
            <div className="grid gap-1">
              {whyNeuvara.map((pillar, index) => (
                <div
                  className="accent-item rounded-r-xl py-5 transition-colors"
                  key={pillar.title}
                >
                  <span className="font-mono text-xs text-clinical-cyan">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence timeline */}
          <div className="reveal-on-scroll mt-20">
            <SectionHeader
              align="center"
              eyebrow="Platform"
              title="A prediction layer for rare neurological disease."
              body="Neuvara is being developed as a research platform for AI models that can evaluate rare disease risk signals from MRI scans and supporting clinical data while keeping clinicians in control of interpretation."
            />
            <div className="mt-12">
              <IntelligenceTimeline />
            </div>
          </div>

          {/* Problem context — flowing text, not identical cards */}
          <div className="reveal-on-scroll mt-20">
            <SectionHeader
              eyebrow="Clinical problem"
              title="Prediction models need to handle messy real-world MRI."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {problemPoints.map((point, index) => (
                <div
                  className={`accent-item-purple rounded-r-xl py-4 stagger-${index + 1}`}
                  key={point}
                >
                  <p className="text-sm leading-7 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28" id="technology">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(169,107,200,0.06),transparent_40%),radial-gradient(circle_at_82%_16%,rgba(72,212,192,0.1),transparent_28rem)]" />
        <div className="reveal-on-scroll relative mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="Architecture"
            title="Scanner-aware models for MRI and clinical data."
            body="The platform combines MRI harmonisation, volumetric representation learning, clinical data fusion, and cohort retrieval to produce evidence that can be evaluated by specialists."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TechnologyCard
              body="MRI scans vary by manufacturer, field strength, sequence, echo time, repetition time, and protocol. Neuvara uses scanner-aware preprocessing before downstream modelling."
              number="01"
              title="MRI harmonisation"
            />
            <TechnologyCard
              body="A shared 3D model learns neuroimaging representations that can support rare disease prediction, similarity search, and future validated neurological workflows."
              number="02"
              title="Shared volumetric backbone"
            />
            <TechnologyCard
              body="Clinical metadata and imaging features are combined so model outputs can reflect both anatomy and patient context instead of MRI alone."
              number="03"
              title="MRI + clinical data fusion"
            />
          </div>

          {/* Competitive advantages — simple text grid, no card wrappers */}
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionHeader
              eyebrow="Competitive advantage"
              title="Differentiated by evidence, context, and rare disease focus."
            />
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {competitiveAdvantages.map((advantage) => (
                <div className="reveal-on-scroll" key={advantage.title}>
                  <h3 className="text-base font-semibold text-white">
                    {advantage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {advantage.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(105,184,255,0.1),transparent_28rem),radial-gradient(circle_at_78%_80%,rgba(169,107,200,0.06),transparent_30rem)]" />
        <div className="reveal-on-scroll relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Prediction workflow"
            title="From MRI and clinical context to reviewable evidence."
            body="Neuvara is being built to surface risk-oriented model signals, comparable confirmed cases, and explainable evidence for research and specialist review."
          />
          <div className="mt-12">
            <Workflow />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Prediction should be inspectable, not opaque.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Risk signals are paired with heatmaps, comparable cases, and
                confidence context so clinicians and researchers can understand
                why a pattern was surfaced.
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-300">
                {["Region-level evidence", "Similarity-ranked cohorts", "Clinician-facing outputs"].map((item) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-teal" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <PlatformExplorer />
          </div>
        </div>
      </section>

      {/* ── Validation ── */}
      <section className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28" id="validation">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%),radial-gradient(circle_at_18%_72%,rgba(72,212,192,0.08),transparent_28rem)]" />
        <div className="reveal-on-scroll relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow="Validation and trust"
              title="Built for evidence generation before clinical deployment."
              body="Neuvara is research-stage. The platform is intended to support validation studies, clinical oversight, and privacy-conscious workflows before any clinical use."
            />
            <ValidationTrust />
          </div>

          {/* Validation approach — numbered steps, not uniform cards */}
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeader
              eyebrow="Validation approach"
              title="A research-stage process for evaluating model reliability."
            />
            <div className="space-y-4">
              {validationApproach.map((item, index) => (
                <div
                  className="accent-item rounded-r-xl py-3"
                  key={item.title}
                >
                  <div className="flex gap-3">
                    <span className="mt-0.5 font-mono text-xs text-clinical-cyan">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-400">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="relative isolate bg-navy-950 px-5 py-20 text-white sm:px-8 lg:py-28" id="roadmap">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(169,107,200,0.08),transparent_30rem)]" />
        <div className="reveal-on-scroll relative mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="Research roadmap"
            title="A staged path from MRI infrastructure to prospective studies."
          />
          <div className="mt-12">
            <Roadmap />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="relative isolate bg-navy-950 px-5 pb-12 pt-20 text-white sm:px-8 lg:pb-14 lg:pt-24" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(72,212,192,0.12),transparent_28rem)]" />
        <div className="reveal-on-scroll relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-clinical-teal">
              Partner with Neuvara
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-normal sm:text-5xl">
              Help validate AI models for rare disease prediction.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              We are seeking research, clinical, hospital, and strategic partners
              for retrospective studies, scanner generalisation research, and
              privacy-conscious evaluation pathways.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="reveal-on-scroll relative mx-auto mt-8 max-w-7xl">
          <PartnershipSegments />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-navy-950 px-5 py-8 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-300 lg:grid-cols-[1.15fr_0.8fr_0.95fr] lg:items-start">
          <div className="max-w-lg">
            <div className="flex items-center gap-2.5">
              <BrainLogo size={22} />
              <p className="text-base font-semibold text-white">Neuvara</p>
            </div>
            <p className="mt-4 leading-7">
              Research-stage AI models for rare disease prediction from MRI scans
              and supporting clinical data.
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Research disclaimer: Neuvara is not a diagnostic device and is not
              intended to replace specialist clinical review. Any clinical use
              would require appropriate validation and regulatory assessment.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
              Navigate
            </p>
            <div className="mt-4 grid gap-2">
              <a className="transition hover:text-white" href="#platform">Platform</a>
              <a className="transition hover:text-white" href="#technology">Technology</a>
              <a className="transition hover:text-white" href="#validation">Validation</a>
              <a className="transition hover:text-white" href="#roadmap">Roadmap</a>
              <a className="transition hover:text-white" href="#contact">Contact</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
              Privacy
            </p>
            <p className="mt-3 leading-7">
              Privacy and data governance materials are prepared for research and
              clinical validation discussions.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Neuvara. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Link className="transition hover:text-white" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
