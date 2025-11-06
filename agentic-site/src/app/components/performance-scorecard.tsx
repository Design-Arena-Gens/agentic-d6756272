import type { Competitor } from "../data/competitors";

type Props = {
  data: Competitor[];
};

export function PerformanceScorecard({ data }: Props) {
  const averages = calculateAverages(data);
  return (
    <div className="glass rounded-3xl p-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="eyebrow">Experience Scorecard</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            Strengths vs. Gaps Across the Field
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600">
            Benchmarked experience scores highlight where the new build can
            excel. Focus on sub-2.5s LCP, disciplined heading architecture, and
            crystal-clear mobile navigation to surpass every competitor.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm font-semibold text-emerald-700 shadow-inner">
          Projected Leap:{" "}
          <span className="text-emerald-900">95/100 Experience Score</span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-4">
        {data.map((competitor) => (
          <article
            key={competitor.name}
            className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {competitor.name}
            </p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {competitor.metrics.score}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {competitor.metrics.performance}
            </p>
            <dl className="mt-4 space-y-2 text-sm text-slate-600">
              <div>
                <dt className="font-medium text-slate-500">Mobile Reality</dt>
                <dd>{competitor.metrics.mobile}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">SEO Notes</dt>
                <dd>{competitor.metrics.seo}</dd>
              </div>
            </dl>
          </article>
        ))}
        <article className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 p-6 text-white shadow-lg">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top,white,transparent_55%)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              Our Target
            </p>
            <p className="mt-3 text-4xl font-semibold">95</p>
            <p className="mt-2 text-sm text-white/90">
              Sub-1.8s LCP, CLS &lt; 0.02, full WCAG AA compliance, and schema
              coverage for every monetized workflow.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>• AI-personalized onboarding narratives</li>
              <li>• Programmatic topical hubs + interactive tools</li>
              <li>• Performance-first design system with edge caching</li>
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <InsightCard
          title="Where we win speed"
          insight={`Average competitor LCP: ${averages.lcp.toFixed(
            1,
          )}s. Target: 1.8s via optimized hero, next/image, and delayed heavy assets.`}
        />
        <InsightCard
          title="Where we win clarity"
          insight="Rebuild navigation with persona-driven deep links and sticky secondary navigation to reduce tap friction below 2 interactions."
        />
        <InsightCard
          title="Where we win SEO"
          insight="Deploy Knowledge Graph schema, FAQ markup, and contextual internal links across new AI playbooks and integration pages."
        />
      </div>
    </div>
  );
}

function calculateAverages(data: Competitor[]) {
  const lcpValues = data
    .map((competitor) => {
      const match = competitor.metrics.performance.match(/LCP\s([\d.]+)s/);
      return match ? Number(match[1]) : null;
    })
    .filter((value): value is number => value !== null);

  const averageLcp =
    lcpValues.reduce((acc, value) => acc + value, 0) / lcpValues.length;

  return { lcp: averageLcp };
}

function InsightCard({ title, insight }: { title: string; insight: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {title}
      </p>
      <p className="mt-3 text-base text-slate-600">{insight}</p>
    </div>
  );
}
