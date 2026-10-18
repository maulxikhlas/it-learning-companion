export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
        <p>
          🧭 <span className="font-semibold text-slate-700">IT Learning Companion</span> —
          Tugas Proyek OOP/PBO · Pendidikan Teknologi Informasi
        </p>
        <p className="mt-1">© {new Date().getFullYear()} · Dibuat dengan ❤️ menggunakan Next.js & TypeScript</p>
      </div>
    </footer>
  );
}
