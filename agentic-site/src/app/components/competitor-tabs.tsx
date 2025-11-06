"use client";

import { useMemo, useState } from "react";
import type { Competitor } from "../data/competitors";

type Props = {
  data: Competitor[];
};

const tabButtonStyles =
  "relative flex flex-col items-start gap-1 rounded-2xl border border-transparent px-4 py-3 text-left transition hover:border-slate-200 hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

const badgeStyles =
  "inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm";

export function CompetitorTabs({ data }: Props) {
  const [active, setActive] = useState(0);

  const activeCompetitor = useMemo(() => data[active], [active, data]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="glass rounded-3xl p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Competitors
        </p>
        <div className="flex flex-col gap-3">
          {data.map((competitor, index) => {
            const isActive = index === active;
            return (
              <button
                key={competitor.name}
                type="button"
                className={`${tabButtonStyles} ${
                  isActive
                    ? "border-sky-200 bg-white shadow-card ring-1 ring-sky-100"
                    : ""
                }`}
                onClick={() => setActive(index)}
              >
                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {competitor.url.replace("https://", "")}
                </span>
                <span className="text-base font-semibold text-slate-900">
                  {competitor.name}
                </span>
                <span className="text-sm text-slate-600">
                  {competitor.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="glass rounded-3xl p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={badgeStyles}>{activeCompetitor.tagline}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              {activeCompetitor.name} Analysis
            </h3>
          </div>
          <a
            href={activeCompetitor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-50 hover:text-sky-700"
          >
            Visit site
            <span
              aria-hidden
              className="translate-y-px transition group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <p className="mt-6 text-lg text-slate-600">
          {activeCompetitor.summary}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Experience Architecture
            </h4>
            <ul className="mt-4 space-y-4">
              {activeCompetitor.structure.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-white/70 p-4 text-sm shadow-sm"
                >
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-slate-600">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Core Features
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {activeCompetitor.coreFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-white/70 p-3 shadow-sm"
                  >
                    <span className="text-sky-500">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                UI & SEO Traits
              </h4>
              <div className="mt-4 grid gap-3">
                <DetailList title="UI Patterns" items={activeCompetitor.uiPatterns} />
                <DetailList title="SEO Observations" items={activeCompetitor.seoNotes} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Strengths
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {activeCompetitor.strengths.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-emerald-500">▲</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Weaknesses
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {activeCompetitor.weaknesses.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-rose-500">▼</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/80 p-6 shadow-inner">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Diagnostic Snapshot
          </h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <MetricPill label="Experience Score" value={`${activeCompetitor.metrics.score}/100`} />
            <MetricPill label="Performance" value={activeCompetitor.metrics.performance} />
            <MetricPill label="Mobile & SEO" value={`${activeCompetitor.metrics.mobile}\n${activeCompetitor.metrics.seo}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white/70 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-sky-500">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-sky-100 bg-white/90 p-4 text-sm text-slate-600 shadow-sm">
      <span className="font-semibold text-slate-500">{label}</span>
      <span className="whitespace-pre-wrap text-base font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}
