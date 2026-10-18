import { roadmapData } from "@/lib/data";
import { CareerPath } from "@/lib/models";
import Link from "next/link";

const careerIcons: Record<CareerPath, string> = {
  "Web Developer": "🌐",
  "Data Scientist": "📊",
  Cybersecurity: "🔒",
  "Mobile Developer": "📱",
  "DevOps Engineer": "⚙️",
  "UI/UX Designer": "🎨",
};

const careerColors: Record<CareerPath, string> = {
  "Web Developer": "border-blue-300 bg-blue-50 hover:border-blue-500",
  "Data Scientist": "border-green-300 bg-green-50 hover:border-green-500",
  Cybersecurity: "border-red-300 bg-red-50 hover:border-red-500",
  "Mobile Developer": "border-orange-300 bg-orange-50 hover:border-orange-500",
  "DevOps Engineer": "border-purple-300 bg-purple-50 hover:border-purple-500",
  "UI/UX Designer": "border-pink-300 bg-pink-50 hover:border-pink-500",
};

export default function RoadmapPage() {
  const careers = Object.keys(roadmapData) as CareerPath[];

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-extrabold text-slate-900">🗺️ IT Roadmap Generator</h1>
        <p className="text-slate-600">
          Pilih jalur karir IT yang kamu minati dan lihat roadmap belajar lengkapnya.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map((career) => {
          const roadmap = roadmapData[career];
          return (
            <Link
              key={career}
              href={`/roadmap/${encodeURIComponent(career)}`}
              className={`group rounded-2xl border-2 p-6 transition-all duration-200 ${careerColors[career]}`}
            >
              <div className="mb-3 text-4xl">{careerIcons[career]}</div>
              <h2 className="mb-1 text-lg font-bold text-slate-900">{career}</h2>
              <p className="mb-3 text-sm text-slate-600">
                {roadmap.steps.length} langkah ·{" "}
                {Math.ceil(roadmap.getTotalEstimatedDays() / 7)} minggu estimasi
              </p>
              <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                Lihat Roadmap →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
