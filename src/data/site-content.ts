export const problemPoints = [
  "Rare disease signals can be subtle, distributed across anatomy, and difficult to compare against prior confirmed cases.",
  "Brain MRI varies across vendors, field strengths, protocols, and acquisition settings, making naive models brittle across institutions.",
  "Clinical context matters: prediction should combine imaging evidence with symptoms, history, metadata, and specialist review."
];

export const whyNeuvara = [
  {
    title: "MRI signal understanding",
    body: "Model development starts with scanner-aware MRI representations, sequence metadata, and anatomical context rather than treating images as generic pixels."
  },
  {
    title: "Multimodal clinical data integration",
    body: "Clinical history, symptoms, scanner metadata, and imaging evidence are designed to be evaluated together so research outputs reflect patient context."
  },
  {
    title: "Rare disease pattern detection",
    body: "The platform is oriented around subtle, low-prevalence neurological patterns where cohort comparison and evidence retrieval matter."
  },
  {
    title: "Research validation framework",
    body: "Neuvara is structured for staged retrospective validation, scanner-diverse evaluation, model cards, and clinician-reviewed outputs before clinical use."
  }
];

export const competitiveAdvantages = [
  {
    title: "MRI + clinical data fusion",
    body: "Neuvara is being built around multimodal evidence rather than imaging-only outputs, supporting diagnostic research where context changes interpretation."
  },
  {
    title: "Rare disease focus",
    body: "The research direction prioritises conditions where signals are sparse, delayed diagnosis is common, and comparison against confirmed cases can be valuable."
  },
  {
    title: "Explainable evidence generation",
    body: "Outputs are designed to include reviewable evidence such as region-level signals, comparable cohorts, and confidence context for specialist evaluation."
  },
  {
    title: "Longitudinal modelling direction",
    body: "The future platform direction includes progression-aware modelling across imaging history and clinical timelines, subject to partner data and validation."
  }
];

export const validationApproach = [
  {
    title: "Diverse MRI datasets",
    body: "Benchmark model behaviour across public research datasets and partner-ready cohorts with variation in acquisition protocols and patient populations."
  },
  {
    title: "Multi-centre data strategy",
    body: "Prioritise retrospective studies that expose models to different institutions, scanners, and clinical workflows before any deployment claims."
  },
  {
    title: "Scanner harmonisation",
    body: "Evaluate harmonisation steps for manufacturer, field strength, sequence, and protocol differences so downstream models remain robust."
  },
  {
    title: "Clinical outcome evaluation",
    body: "Connect model outputs to clearly defined research endpoints, cohort labels, and outcome review rather than relying on visual plausibility."
  },
  {
    title: "Human oversight",
    body: "Keep outputs positioned for specialist review, with evidence context and limitations documented before clinical decision-support use."
  }
];

export const validationItems = [
  "Benchmarking on public neuroimaging datasets before partner-specific validation.",
  "Retrospective studies with scanner-diverse cohorts and clear inclusion criteria.",
  "Model cards, dataset summaries, and generalisation reporting for clinical partners.",
  "Privacy-preserving deployment direction so sensitive data can remain within hospital environments."
];
