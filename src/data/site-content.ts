export const problemPoints = [
  {
    title: "What varies",
    body: "Multi-site brain MRI is affected by scanner manufacturer, field strength, sequence timing, protocol, and software version. Those differences change measured volumes and image-derived features even when the underlying anatomy is unchanged."
  },
  {
    title: "Why it matters",
    body: "In longitudinal studies the signal of interest is often small. Annual brain atrophy in neurodegenerative disease is a subtle change. A scanner change can be larger than that change."
  },
  {
    title: "The tension",
    body: "If scanner variance is left in the measure, it can obscure biology. If correction removes biological signal along with it, the measure looks cleaner while becoming less useful."
  }
];

export const approachPoints = [
  {
    title: "Physics first",
    body: "Scanner differences are physical in origin: field inhomogeneity, gradient nonlinearity, vendor reconstruction, noise structure from parallel imaging. We model those mechanisms rather than applying statistical correction after the fact."
  },
  {
    title: "Fixed function, not fitted to the cohort",
    body: "The mapping is intended to be inductive: the same scan produces the same output regardless of which other scans it is processed alongside. Many existing methods refit against the cohort, so a previously reported value can move when new subjects arrive."
  },
  {
    title: "A stated operating envelope",
    body: "We are not trying to build a universal normaliser. The intended scope is written down as a specification — sequence, field strength, vendor — and widened one axis at a time, with validation attached to each step."
  }
];

export const statusFacts = [
  {
    title: "United Kingdom",
    body: "One private limited company"
  },
  {
    title: "Research-stage",
    body: "Method development and benchmarking"
  },
  {
    title: "Two founders",
    body: "MRI physics and clinical translation"
  }
];

export const directionPoints = [
  {
    title: "Primary direction",
    body: "Imaging measures for multi-site studies and clinical trials: measures that stay stable when a participant changes scanner, so that site differences do not have to be absorbed as noise.",
    note: null
  },
  {
    title: "Longer term",
    body: "Scanner-invariant representations may support diagnostic research in rare neurological disease, where cases are scattered across sites and scanners and cannot currently be compared.",
    note: "Research direction, not a current capability"
  }
];
