import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "🗺️",
      title: "IT Roadmap Generator",
      desc: "Pilih jalur karir IT impianmu dan dapatkan roadmap belajar yang terstruktur step-by-step.",
      href: "/roadmap",
      color: "bg-blue-50 border-blue-200",
      btnColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: "🎯",
      title: "Skills Assessment",
      desc: "Uji kemampuan IT kamu dan temukan di mana posisi skill kamu saat ini.",
      href: "/assessment",
      color: "bg-purple-50 border-purple-200",
      btnColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: "📊",
      title: "Progress Dashboard",
      desc: "Pantau perkembangan belajarmu, kumpulkan XP, dan raih badge pencapaian.",
      href: "/dashboard",
      color: "bg-green-50 border-green-200",
      btnColor: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          🚀 Platform Belajar IT Terbaikmu
        </div>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-slate-900">
          IT Learning{" "}
          <span className="text-blue-600">Companion</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
          Temukan jalur karir IT yang tepat, uji kemampuanmu, dan pantau progress belajarmu
          dalam satu platform yang dirancang khusus untuk mahasiswa Teknologi Informasi.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/roadmap"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Mulai Sekarang →
          </Link>
          <Link
            href="/assessment"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Coba Assessment
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className={`rounded-2xl border-2 p-6 transition hover:shadow-lg ${f.color}`}
          >
            <div className="mb-3 text-4xl">{f.icon}</div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">{f.title}</h2>
            <p className="mb-4 text-sm text-slate-600">{f.desc}</p>
            <Link
              href={f.href}
              className={`inline-block rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${f.btnColor}`}
            >
              Buka →
            </Link>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <h2 className="mb-6 text-center text-2xl font-bold">Kenapa IT Learning Companion?</h2>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { label: "Jalur Karir", value: "6" },
            { label: "Soal Assessment", value: "10+" },
            { label: "Langkah Roadmap", value: "40+" },
            { label: "Badge Tersedia", value: "5" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-sm text-blue-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
