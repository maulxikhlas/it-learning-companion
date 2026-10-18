import { roadmapData } from "@/lib/data";
import { CareerPath } from "@/lib/models";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function RoadmapDetailPage({ params }: Props) {
  const careerPath = decodeURIComponent(params.slug) as CareerPath;
  const roadmap = roadmapData[careerPath];

  if (!roadmap) return notFound();

  return (
    <div>
      <div className="mb-2">
        <Link href="/roadmap" className="text-sm text-blue-600 hover:underline">
          ← Kembali ke Roadmap
        </Link>
      </div>
      <h1 className="mb-1 text-3xl font-extrabold text-slate-900">
        Roadmap: {careerPath}
      </h1>
      <p className="mb-6 text-slate-500">
        {roadmap.steps.length} langkah ·{" "}
        Estimasi ~{Math.ceil(roadmap.getTotalEstimatedDays() / 7)} minggu
      </p>

      <div className="space-y-4">
        {roadmap.steps.map((step, idx) => (
          <div
            key={step.id}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            {/* Step number */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {idx + 1}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-900">{step.title}</h2>
              <p className="mb-2 text-sm text-slate-600">{step.description}</p>
              <div className="flex flex-wrap gap-2">
                {step.resources.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right text-xs text-slate-400">
              {step.getEstimatedWeeks()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-blue-50 p-5 text-center">
        <p className="text-sm text-slate-700">
          Sudah siap mulai? Cek dulu kemampuan kamu di{" "}
          <Link href="/assessment" className="font-semibold text-blue-600 hover:underline">
            Skills Assessment →
          </Link>
        </p>
      </div>
    </div>
  );
}
