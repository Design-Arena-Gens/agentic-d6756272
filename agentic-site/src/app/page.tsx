import Link from "next/link";
import { CompetitorTabs } from "./components/competitor-tabs";
import { AIRoadmap } from "./components/ai-roadmap";
import { PerformanceScorecard } from "./components/performance-scorecard";
import { competitors } from "./data/competitors";

export default function Home() {
  const featurePillars = [
    {
      label: "AI Personalization",
      detail:
        "Dynamic hero, onboarding, and documentation layers that respond to persona and intent in real time.",
    },
    {
      label: "Conversion Clarity",
      detail:
        "Streamlined CTA hierarchy, progressive disclosure onboarding, and instant trial pathways within a single scroll.",
    },
    {
      label: "Authority Engine",
      detail:
        "Programmatic topical hubs, interactive tools, and schema-rich content to command SERPs across long-tail use cases.",
    },
  ];

  const blueprintSections = [
    {
      title: "Premium Visual System",
      points: [
        "Fluid layout with 12-column grid, gradient-mesh accents, and cinematic typography using Plus Jakarta Sans + Figtree pairing.",
        "Glassmorphism surfaces with motion-safe micro-interactions delivered via CSS and lightweight Framer Motion alternatives.",
        "Accessibility baked in: 4.5:1 contrast, focus-visible states, and pointer-sensitive animations.",
      ],
    },
    {
      title: "Product Discovery Flow",
      points: [
        "Persona switcher recalibrates navigation, hero CTA, and recommended workflows.",
        "Interactive workflow simulator with sample data to demonstrate value before signup.",
        "Smart compare table that maps features versus competitors and surfaces differentiators.",
      ],
    },
    {
      title: "SEO & Content Spine",
      points: [
        "Programmatic schema for every workflow (HowTo, FAQ, Product, CreativeWork) auto-generated from content modules.",
        "Internal mega-hub linking between integrations, industries, and ROI stories to deepen crawl depth.",
        "Editorial command center with content performance telemetry and AI-sourced FAQ expansions.",
      ],
    },
  ];

  const roadmap = [
    {
      stage: "Week 1: Strategy",
      deliverables: [
        "Quantitative benchmarking (Vitals, SEO breadth, funnel friction)",
        "Information architecture blueprint with persona journeys",
        "Design system tokens, accessibility specs, and content tone guide",
      ],
    },
    {
      stage: "Weeks 2-3: Design & Build",
      deliverables: [
        "Responsive Next.js front end with edge caching & image optimization",
        "AI-driven content modules (hero personalization, checklist logic)",
        "Interactive workflow simulator and schema automation pipeline",
      ],
    },
    {
      stage: "Week 4: Growth Launch",
      deliverables: [
        "SEO launch kit (metadata, JSON-LD, sitemaps) & analytics instrumentation",
        "Experiment roadmap (hero variants, pricing calculator improvements)",
        "Performance hardening (sub-2s LCP, script splitting, accessibility QA)",
      ],
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Agentic Marketing Intelligence",
    url: "https://agentic-d6756272.vercel.app",
    description:
      "Competitive UX, UI, and SEO blueprint for AI-powered tool-centric websites.",
    areaServed: "Global",
    serviceType: [
      "Competitive analysis",
      "UX strategy",
      "SEO architecture",
      "Growth experimentation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Next-Generation Tool Experience",
      itemListElement: featurePillars.map((pillar) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pillar.label,
          description: pillar.detail,
        },
      })),
    },
  };

  return (
    <>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 pb-32 pt-12">
        <header className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[36px] border border-slate-200 bg-white/70 px-8 pb-16 pt-12 shadow-card md:px-16">
          <nav className="flex flex-col gap-5 pb-12 md:flex-row md:items-center md:justify-between">
            <Link
              href="#hero"
              className="text-lg font-semibold tracking-tight text-slate-900"
            >
              Agentic Marketing Intelligence
            </Link>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#landscape">
                Landscape
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#analysis">
                Deep Analysis
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#blueprint">
                Blueprint
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#ai">
                AI Layer
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#seo">
                SEO Spine
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300" href="#roadmap">
                Roadmap
              </a>
            </div>
          </nav>
          <div id="hero" className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="eyebrow">Competitive Intelligence</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Build the premium tool website that outruns every competitor on
                experience, speed, and SEO.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                We audited PromptWave, AutomatorX, and CraftLab across UX, UI,
                performance, and organic visibility. The result: a
                next-generation product surface that fuses AI intelligence,
                human-centred flows, and programmatic growth engines.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#blueprint"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-slate-800"
                >
                  View Experience Blueprint
                </a>
                <a
                  href="#analysis"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-400"
                >
                  Review Competitive Breakdown
                  <span aria-hidden className="translate-y-px text-slate-400">
                    ↓
                  </span>
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-white to-sky-50/70 p-8">
              <div className="absolute -left-16 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-sky-200/40 blur-3xl md:block" />
              <div className="relative space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Core Advantage
                  </p>
                  <p className="mt-2 text-base text-slate-600">
                    Position as the fastest, most intuitive AI workflow hub with
                    persona-aware onboarding and deep integration insights.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    SEO Mandate
                  </p>
                  <p className="mt-2 text-base text-slate-600">
                    Consolidate topical authority using pillar &amp; cluster
                    architecture, interactive calculators, and schema automation
                    across every workflow.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Engagement Flywheel
                  </p>
                  <p className="mt-2 text-base text-slate-600">
                    Layer AI guidance, predictive nudges, and micro-product
                    loops to keep users exploring, activating, and upgrading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="landscape" className="section-container">
          <p className="eyebrow">Competitive Landscape</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Market patterns we must inherit—and surpass.
          </h2>
          <p className="max-w-3xl text-lg text-slate-600">
            Every leading tool site leans on immersive visuals, conversion-heavy
            funnels, and aggressive content engines. Yet, gaps remain in mobile
            clarity, performance, and structured SEO. The blueprint below folds
            in what works while eliminating friction.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {featurePillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {pillar.label}
                </p>
                <p className="mt-3 text-base text-slate-600">{pillar.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-sm">
            <p>
              <span className="font-semibold text-slate-900">
                Key observation:
              </span>{" "}
              None of the competitors successfully unify AI personalization with
              high-speed performance. CraftLab nails immersion but suffers on
              load, AutomatorX wins SEO yet lacks human warmth, and PromptWave
              converts well but overwhelms on mobile. Opportunity: merge their
              winning mechanics into a single, premium, hyper-performant
              experience.
            </p>
          </div>
        </section>

        <section id="analysis" className="section-container">
          <CompetitorTabs data={competitors} />
        </section>

        <section className="section-container">
          <PerformanceScorecard data={competitors} />
        </section>

        <section id="blueprint" className="section-container">
          <p className="eyebrow">Experience Blueprint</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            A premium, modern interface engineered for velocity.
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {blueprintSections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-sky-500">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-indigo-900 shadow-inner">
            <p>
              <span className="font-semibold">North-star experience:</span> A
              shimmering hero with persona toggles, instant workflow simulator,
              and scroll-anchored content sections that adapt copy, templates,
              and CTAs on the fly—without sacrificing Lighthouse 95+ targets.
            </p>
          </div>
        </section>

        <section id="ai" className="section-container">
          <AIRoadmap />
        </section>

        <section id="seo" className="section-container">
          <p className="eyebrow">SEO & Content Spine</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Topical domination via structured depth and interactive assets.
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Architecture & Technical SEO
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-700">
                    Pillars &amp; Clusters:
                  </span>{" "}
                  Integration hubs, industry playbooks, and AI recipes linked via
                  smart breadcrumbs.
                </li>
                <li>
                  <span className="font-semibold text-slate-700">
                    Schema Ops:
                  </span>{" "}
                  Automated JSON-LD for Workflow, HowTo, FAQ, Product, and
                  Review markup.
                </li>
                <li>
                  <span className="font-semibold text-slate-700">
                    Performance Discipline:
                  </span>{" "}
                  Image CDNs, deferrable interactive scripts, and hydration
                  boundaries to keep interactivity snappy.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Content Engine Enhancements
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  AI-authored draft outlines with human editorial review for
                  velocity and quality.
                </li>
                <li>
                  Live benchmarks widget comparing automation ROI against real
                  customer cohorts.
                </li>
                <li>
                  Resource gating that unlocks templates when users engage with
                  interactive tutorials—feeding lead scoring.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Content Velocity
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Editorial workflow pairs AI research memos with human validation
                to release 3 optimized landing pages + 2 support articles per
                week.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Internal Linking
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Contextual linking blocks insert related playbooks, calculators,
                and documentation—improving crawl depth and engagement.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Analytics & Feedback
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Heatmaps + scroll depth insights loop into AI suggestions,
                flagging sections that need richer media or CTA revisions.
              </p>
            </article>
          </div>
        </section>

        <section id="roadmap" className="section-container">
          <p className="eyebrow">Activation Roadmap</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Four-week sprint to launch the next-generation experience.
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {roadmap.map((phase) => (
              <div
                key={phase.stage}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {phase.stage}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {phase.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-emerald-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="eyebrow mx-auto">Next Step</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Ready to craft the fastest, smartest experience in the space?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Let&apos;s align on KPIs, plug gaps in the competitor field, and
              launch a site that feels premium, converts faster, and outranks
              every incumbent.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:strategy@agentic-intelligence.com"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-slate-800"
              >
                Schedule strategy session
              </a>
              <a
                href="#analysis"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-400"
              >
                Revisit competitor insights
                <span aria-hidden className="text-slate-400">↺</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white/70 px-8 py-6 text-sm text-slate-500 shadow-sm">
        © {new Date().getFullYear()} Agentic Marketing Intelligence. Crafted for
        the next generation of AI tooling experiences.
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
