import Link from "next/link";
import { assessmentQuestions } from "@/lib/data";

export default function AssessmentPage() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-extrabold text-slate-900">🎯 Skills Assessment</h1>
        <p className="text-slate-600">
          Jawab {assessmentQuestions.length} pertanyaan untuk mengetahui level skill IT kamu.
        </p>
      </div>

      {/* Info cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: "📝", label: "Jumlah Soal", value: `${assessmentQuestions.length} soal` },
          { icon: "⏱️", label: "Estimasi Waktu", value: "5–10 menit" },
          { icon: "🏆", label: "Reward", value: "XP + Badge" },
        ].map((info) => (
          <div
            key={info.label}
            className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
          >
            <div className="text-3xl">{info.icon}</div>
            <div className="mt-1 text-xs text-slate-500">{info.label}</div>
            <div className="font-bold text-slate-900">{info.value}</div>
          </div>
        ))}
      </div>

      {/* Topics covered */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 font-bold text-slate-900">Topik yang Diujikan:</h2>
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Database", "DevOps", "Data Science", "Cybersecurity"].map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/assessment/quiz"
          className="inline-block rounded-xl bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-purple-700"
        >
          Mulai Assessment →
        </Link>
        <p className="mt-3 text-sm text-slate-500">
          Tidak ada batas waktu — jawab dengan tenang!
        </p>
      </div>
    </div>
  );
}
