"use client";

import { useState } from "react";

const applications = [
  {
    name: "Rare disease prediction",
    signal: "Subtle MRI patterns combined with structured clinical context",
    output: "Risk-oriented prediction signal with explainable supporting evidence",
    validation: "Retrospective rare disease and paediatric neuroimaging cohorts"
  },
  {
    name: "Case similarity",
    signal: "Latent imaging signatures compared against confirmed cohorts",
    output: "Similarity-ranked examples for specialist review and research triage",
    validation: "Confirmed diagnosis cohorts with scanner-diverse metadata"
  },
  {
    name: "Progression modelling",
    signal: "Longitudinal structural change, regional atrophy, and clinical history",
    output: "Research markers for risk progression, not standalone diagnosis",
    validation: "Longitudinal research partnerships and cohort studies"
  },
  {
    name: "Clinical review",
    signal: "Model confidence, heatmaps, and comparable cases in one workspace",
    output: "Decision-support package for clinician-in-the-loop evaluation",
    validation: "Workflow studies with radiology, neurology, and research teams"
  }
];

export function PlatformExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = applications[activeIndex];

  return (
    <div className="premium-card rounded-3xl p-5">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
          Prediction workspace
        </p>
        <p className="text-xs text-slate-400">Select a layer</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {applications.map((application, index) => (
          <button
            aria-pressed={activeIndex === index}
            className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
              activeIndex === index
                ? "border-clinical-teal bg-clinical-teal/15 text-white shadow-[0_14px_34px_rgba(72,212,192,0.12)]"
                : "border-white/10 bg-white/[0.045] text-slate-300 hover:-translate-y-0.5 hover:border-clinical-blue/50 hover:bg-white/[0.075] hover:text-white"
            }`}
            key={application.name}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            {application.name}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Primary signal
          </p>
          <p className="mt-2 text-sm leading-7 text-white">{active.signal}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-navy-950/45 p-4 transition duration-300 hover:border-clinical-blue/40">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-clinical-teal">
              Output layer
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{active.output}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy-950/45 p-4 transition duration-300 hover:border-clinical-blue/40">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-clinical-teal">
              Validation focus
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{active.validation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
