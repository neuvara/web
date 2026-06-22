"use client";

import { useState } from "react";

const steps = [
  {
    label: "MRI + clinical data",
    detail: "Brain MRI volumes are paired with structured clinical context such as symptoms, history, and acquisition metadata.",
    output: "Multimodal patient context"
  },
  {
    label: "Scanner harmonisation",
    detail: "Physics-informed preprocessing reduces scanner, vendor, field-strength, and sequence-driven variation.",
    output: "Harmonised imaging representation"
  },
  {
    label: "Shared AI backbone",
    detail: "A volumetric model learns transferable neuroimaging representations across datasets and tasks.",
    output: "Latent MRI feature space"
  },
  {
    label: "Prediction layer",
    detail: "Application heads combine MRI features with clinical data to estimate rare disease risk signals.",
    output: "Research-stage prediction score"
  },
  {
    label: "Comparable cases",
    detail: "Nearest-neighbour retrieval surfaces confirmed cases with similar imaging and clinical patterns.",
    output: "Similarity-ranked evidence"
  },
  {
    label: "Clinician review",
    detail: "Heatmaps, cohort matches, and model confidence are reviewed by specialists before any clinical decision.",
    output: "Clinician-facing decision support"
  }
];

export function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <div className="premium-surface rounded-3xl p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-400">
        <span>Prediction workflow</span>
        <span className="text-clinical-cyan">Clinician-in-the-loop</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => (
          <div className="relative" key={step.label}>
            <button
              aria-pressed={activeStep === index}
              className={`min-h-32 w-full rounded-2xl border p-4 text-left transition duration-300 ${
                activeStep === index
                  ? "border-clinical-teal bg-clinical-teal/15 shadow-[0_0_36px_rgba(72,212,192,0.18)]"
                  : "border-white/15 bg-white/[0.055] hover:-translate-y-0.5 hover:border-clinical-cyan/50 hover:bg-white/[0.08]"
              }`}
              onClick={() => setActiveStep(index)}
              type="button"
            >
              <span className="text-xs font-semibold text-clinical-teal">
                0{index + 1}
              </span>
              <p className="mt-5 text-sm font-semibold leading-6 text-white">{step.label}</p>
            </button>
            {index < steps.length - 1 ? (
              <div className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-clinical-teal/70 xl:block" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
            Active layer
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{active.label}</h3>
        </div>
        <div>
          <p className="text-sm leading-7 text-slate-300">{active.detail}</p>
          <p className="mt-4 border-l border-clinical-teal pl-4 text-sm font-semibold text-clinical-cyan">
            {active.output}
          </p>
        </div>
      </div>
    </div>
  );
}
