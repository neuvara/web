/* Neuvara rankings data.
   PLACEHOLDER VALUES: these numbers are made up to show the layout.
   Replace them with real results before presenting them as findings,
   and set `preview` to false once they are real.

   Fields per model:
     name      display name ("Model A" until a company agrees to be named)
     type      "Open-source" | "Commercial" | "Commercial, anonymised"
     cv        cross-scanner variation, % (coefficient of variation of the
               structure's volume for the same subject across scanners). Lower is better.
     dice      agreement between scanners, mean pairwise Dice (0–1). Higher is better.
     worst     largest mean offset on any single scanner, % of the subject's
               cross-scanner mean volume. Lower is better.
     scanners  number of scanners tested
   Models are ranked by cv. */

window.NEUVARA_RANKINGS = {
  preview: true,
  round: "Round 1 (preview)",
  structures: {
    whole: {
      label: "Whole brain",
      models: [
        { name: "Model A", type: "Open-source", cv: 1.4, dice: 0.962, worst: 2.1, scanners: 12 },
        { name: "Model B", type: "Commercial, anonymised", cv: 1.7, dice: 0.955, worst: 2.6, scanners: 12 },
        { name: "Model C", type: "Open-source", cv: 2.0, dice: 0.951, worst: 3.0, scanners: 12 },
        { name: "Model D", type: "Open-source", cv: 2.4, dice: 0.944, worst: 3.8, scanners: 12 },
        { name: "Model E", type: "Commercial, anonymised", cv: 2.9, dice: 0.938, worst: 4.4, scanners: 12 },
        { name: "Model F", type: "Open-source", cv: 3.3, dice: 0.931, worst: 5.1, scanners: 12 },
        { name: "Model G", type: "Open-source", cv: 3.8, dice: 0.922, worst: 6.0, scanners: 12 },
        { name: "Model H", type: "Commercial, anonymised", cv: 4.6, dice: 0.910, worst: 7.3, scanners: 12 }
      ]
    },
    hippocampus: {
      label: "Hippocampus",
      models: [
        { name: "Model B", type: "Commercial, anonymised", cv: 3.1, dice: 0.881, worst: 4.6, scanners: 12 },
        { name: "Model A", type: "Open-source", cv: 3.4, dice: 0.874, worst: 5.2, scanners: 12 },
        { name: "Model D", type: "Open-source", cv: 4.0, dice: 0.866, worst: 6.1, scanners: 12 },
        { name: "Model C", type: "Open-source", cv: 4.5, dice: 0.858, worst: 6.9, scanners: 12 },
        { name: "Model F", type: "Open-source", cv: 5.2, dice: 0.847, worst: 7.8, scanners: 12 },
        { name: "Model E", type: "Commercial, anonymised", cv: 5.9, dice: 0.836, worst: 8.9, scanners: 12 },
        { name: "Model H", type: "Commercial, anonymised", cv: 6.6, dice: 0.824, worst: 10.2, scanners: 12 },
        { name: "Model G", type: "Open-source", cv: 7.4, dice: 0.811, worst: 11.5, scanners: 12 }
      ]
    },
    ventricles: {
      label: "Ventricles",
      models: [
        { name: "Model A", type: "Open-source", cv: 2.6, dice: 0.921, worst: 3.9, scanners: 12 },
        { name: "Model C", type: "Open-source", cv: 3.0, dice: 0.914, worst: 4.5, scanners: 12 },
        { name: "Model B", type: "Commercial, anonymised", cv: 3.5, dice: 0.906, worst: 5.3, scanners: 12 },
        { name: "Model E", type: "Commercial, anonymised", cv: 4.1, dice: 0.897, worst: 6.2, scanners: 12 },
        { name: "Model D", type: "Open-source", cv: 4.8, dice: 0.889, worst: 7.0, scanners: 12 },
        { name: "Model G", type: "Open-source", cv: 5.6, dice: 0.876, worst: 8.4, scanners: 12 },
        { name: "Model F", type: "Open-source", cv: 6.3, dice: 0.866, worst: 9.6, scanners: 12 },
        { name: "Model H", type: "Commercial, anonymised", cv: 7.5, dice: 0.851, worst: 11.3, scanners: 12 }
      ]
    }
  }
};
