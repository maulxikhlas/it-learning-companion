import Link from "next/link";

export default function DashboardPage() {
  // Static demo data (akan diganti dengan state management di tahap selanjutnya)
  const demoStats = {
    xp: 150,
    level: 2,
    badges: [
      { icon: "🎯", title: "Pejuang Pertama", desc: "Menyelesaikan assessment pertama" },
      { icon: "🔥", title: "Setengah Jalan!", desc: "50% roadmap selesai" },
    ],
    roadmapProgress: 35,
    selectedPath: "Web Developer",
    assessmentScore: 70,
    assessmentLevel: "Intermediate",
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold text-slate-900">📊 Progress Dashboard</h1>

      {/* XP & Level */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
          <div className="text-4xl font-extrabold text-blue-600">{demoStats.xp}</div>
          <div className="text-sm text-slate-600">Total XP</div>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 text-center">
          <div className="text-4xl font-extrabold text-purple-600">Level {demoStats.level}</div>
          <div className="text-sm text-slate-600">Level Saat Ini</div>
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
          <div className="text-4xl font-extrabold text-green-600">{demoStats.assessmentScore}%</div>
          <div className="text-sm text-slate-600">Skor Assessment Terakhir</div>
        </div>
      </div>

      {/* Roadmap Progress */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">
            🗺️ Roadmap: {demoStats.selectedPath}
          </h2>
          <span className="text-sm font-semibold text-blue-600">
            {demoStats.roadmapProgress}%
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-blue-600 transition-all"
            style={{ width: `${demoStats.roadmapProgress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Skill Level Terdeteksi: <span className="font-semibold">{demoStats.assessmentLevel}</span>
        </p>
      </div>

      {/* Badges */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-bold text-slate-900">🏅 Badge yang Diperoleh</h2>
        {demoStats.badges.length === 0 ? (
          <p className="text-sm text-slate-500">Belum ada badge. Mulai assessment atau roadmap!</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {demoStats.badges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3"
              >
                <span className="text-3xl">{badge.icon}</span>
                <div>
                  <div className="font-semibold text-slate-900">{badge.title}</div>
                  <div className="text-xs text-slate-600">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <Link
          href="/roadmap"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Lanjutkan Roadmap →
        </Link>
        <Link
          href="/assessment/quiz"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Ulangi Assessment
        </Link>
      </div>
    </div>
  );
}
