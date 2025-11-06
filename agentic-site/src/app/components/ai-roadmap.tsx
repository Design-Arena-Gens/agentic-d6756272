"use client";

import { useMemo, useState } from "react";

type PersonaKey = "growth" | "product" | "content";

const personas: Record<
  PersonaKey,
  {
    label: string;
    focus: string;
    kpis: string[];
    baseline: string;
  }
> = {
  growth: {
    label: "Growth & Conversion",
    focus: "Elevate sign-ups, capture leads, and prioritize activation speed.",
    kpis: ["Trial sign-ups", "Activation rate", "Conversion velocity"],
    baseline:
      "Competitors convert via dense funnels yet struggle with clarity and speed on mobile.",
  },
  product: {
    label: "Product & Retention",
    focus: "Highlight depth of tooling, increase stickiness, and drive daily habit loops.",
    kpis: ["Feature adoption", "Return frequency", "Average session length"],
    baseline:
      "Tools over-index on breadth but under-communicate onboarding pathways and feedback loops.",
  },
  content: {
    label: "Content & SEO",
    focus: "Capture underserved queries, scale topical authority, and reduce bounce.",
    kpis: ["Organic traffic", "SERP coverage", "Scroll depth"],
    baseline:
      "Competitors have scattered clusters and weak schema discipline, leaving opportunity for structured depth.",
  },
};

const recommendationPool: Record<
  PersonaKey,
  { title: string; description: string; impact: "high" | "medium" | "quick" }[]
> = {
  growth: [
    {
      title: "Adaptive Hero Sequencing",
      description:
        "Personalize the hero offer based on visitor source—switch messaging between 'Launch in Minutes' and 'Automate Your Workflow' to mirror intent.",
      impact: "high",
    },
    {
      title: "AI-Fueled Upgrade Nudges",
      description:
        "Surface contextual AI prompts inside the tool experience that show projected ROI if a user activates premium automation triggers.",
      impact: "medium",
    },
    {
      title: "Smart Conversion Checklist",
      description:
        "Embed a progressive checklist that scores a workspace setup in real time and unlocks templates as milestones are completed.",
      impact: "high",
    },
    {
      title: "Predictive Lead Gen Popover",
      description:
        "Trigger a low-friction modal only when an exit is detected and the AI predicts high fit based on session actions, lowering bounce without harming UX.",
      impact: "quick",
    },
  ],
  product: [
    {
      title: "Dynamic Workflow Preview",
      description:
        "Allow visitors to simulate a workflow with sample data, then one-click save the recipe—bridging discovery with instant product value.",
      impact: "high",
    },
    {
      title: "Usage Heatmap Insights",
      description:
        "Expose anonymized usage heatmaps on feature cards so prospects understand real adoption and trust depth.",
      impact: "medium",
    },
    {
      title: "AI Concierge Onboarding",
      description:
        "A chat-based assistant that watches user progress, detects confusion points, and proactively offers explainer snippets or micro-videos.",
      impact: "high",
    },
    {
      title: "Gamified Retention Loop",
      description:
        "Reward recurring usage streaks with credits redeemable for premium templates or integrations to reinforce habit formation.",
      impact: "quick",
    },
  ],
  content: [
    {
      title: "Programmatic Pillar Library",
      description:
        "Generate structured landing pages for every high-intent query using AI-authored introductions and human-reviewed use cases.",
      impact: "high",
    },
    {
      title: "Interactive Schema Builder",
      description:
        "Ship a mini-tool that outputs validated JSON-LD for automation recipes, earning backlinks while boosting topical authority.",
      impact: "medium",
    },
    {
      title: "Semantic FAQ Engine",
      description:
        "Leverage AI to mine customer chat logs, surface trending questions, and publish them as expandable FAQ blocks with schema.",
      impact: "high",
    },
    {
      title: "Auto-Optimize Content Depth",
      description:
        "Monitor scroll and dwell metrics, then prompt editors when sections underperform so they can inject richer multimedia or micro-demos.",
      impact: "quick",
    },
  ],
};

const impactLabelMap: Record<"high" | "medium" | "quick", string> = {
  high: "High leverage",
  medium: "Momentum builder",
  quick: "Quick win",
};

export function AIRoadmap() {
  const [persona, setPersona] = useState<PersonaKey>("growth");
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0, 1, 2]);

  const recommendations = useMemo(() => {
    const pool = recommendationPool[persona];
    return selectedIndexes.map((index) => pool[index % pool.length]);
  }, [persona, selectedIndexes]);

  const rotateIdeas = () => {
    setSelectedIndexes((prev) => prev.map((value) => (value + 1) % 4));
  };

  return (
    <div className="glass rounded-3xl p-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="eyebrow">AI Playbook</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            Smart Growth Blueprint
          </h3>
          <p className="mt-2 max-w-xl text-base text-slate-600">
            Choose the lens that matters most right now. Our AI synthesizer
            bridges competitor gaps with differentiated, high-performing
            product and content mechanics.
          </p>
        </div>
        <button
          type="button"
          onClick={rotateIdeas}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Refresh ideas
          <span aria-hidden className="translate-y-px">
            ↻
          </span>
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {(Object.keys(personas) as PersonaKey[]).map((key) => {
          const isActive = persona === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setPersona(key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                isActive
                  ? "border-sky-500 bg-sky-500 text-white shadow-card"
                  : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300"
              }`}
            >
              {personas[key].label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Strategic Focus
          </h4>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            {personas[persona].focus}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Current gap assessment: {personas[persona].baseline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {personas[persona].kpis.map((kpi) => (
              <span
                key={kpi}
                className="rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700"
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {recommendations.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="rounded-3xl border border-slate-100 bg-white/90 p-5 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <h5 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h5>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    item.impact === "high"
                      ? "bg-emerald-100 text-emerald-700"
                      : item.impact === "medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {impactLabelMap[item.impact]}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
