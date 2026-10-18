# IT Learning Companion

Proyek ini dibuat untuk memenuhi tugas mata kuliah **Pemrograman Berorientasi Objek (PBO)** pada program studi **Pendidikan Teknologi Informasi**.

Aplikasi ini merupakan platform berbasis web yang membantu mahasiswa TI dalam merencanakan jalur karir belajar (*learning path*), mengukur pemahaman awal materi teknologi melalui *assessment*, serta memantau perkembangan belajar.

---

## Fitur Utama

- **Roadmap Belajar IT**: Menampilkan kurikulum dan langkah belajar bertahap untuk berbagai bidang TI (Web Development, Data Science, Cybersecurity, Mobile Development, DevOps, dan UI/UX).
- **Skills Assessment**: Kuis penilaian mandiri untuk mengukur tingkat kemampuan awal mahasiswa pada berbagai topik dasar komputer dan pemrograman.
- **Dashboard Progress**: Rekap capaian belajar, estimasi level kemampuan, poin pengalaman (XP), serta riwayat kuis yang telah diselesaikan.

---

## Penerapan Konsep PBO (OOP)

Logika data pada aplikasi ini diimplementasikan menggunakan class TypeScript di dalam direktori `lib/models.ts`:

1. **Class & Object**: Pemodelan entitas sistem seperti `User`, `Learner`, `Roadmap`, `RoadmapStep`, `Assessment`, `Question`, `Skill`, dan `Progress`.
2. **Inheritance (Pewarisan)**: Class `Learner` mewarisi properti dan method dari base class `User` menggunakan kata kunci `extends`.
3. **Encapsulation (Enkapsulasi)**: Perhitungan nilai, manipulasi progress belajar, dan penambahan poin dikelola melalui method di dalam class terkait (misal: `getScore()`, `getCompletionPercentage()`, `addXP()`).
4. **Data Modeling & Typing**: Penggunaan tipe data kustom TypeScript (`type`) untuk memvalidasi nilai atribut seperti `SkillLevel` dan `CareerPath`.

---

## Struktur Folder

```text
it-learning-companion/
├── app/
│   ├── layout.tsx          # Layout utama (Navbar, Konten, Footer)
│   ├── page.tsx            # Halaman beranda
│   ├── roadmap/
│   │   ├── page.tsx        # Daftar pilihan jalur karir
│   │   └── [slug]/page.tsx # Rincian tahapan roadmap
│   ├── assessment/
│   │   ├── page.tsx        # Halaman informasi kuis
│   │   └── quiz/page.tsx   # Halaman pengerjaan kuis
│   └── dashboard/
│       └── page.tsx        # Halaman ringkasan profil & statistik
├── components/
│   ├── Navbar.tsx          # Komponen navigasi atas
│   └── Footer.tsx          # Komponen footer halaman
├── lib/
│   ├── models.ts           # Definisi class OOP
│   └── data.ts             # Data statis roadmap dan bank soal
├── package.json
└── tsconfig.json
```

---

## Prasyarat Lingkungan

Pastikan perangkat sudah terpasang:
- Node.js (versi LTS disarankan, minimal v18)
- npm atau package manager sejenis
- Git

---

## Cara Menjalankan Project

1. Clone repositori:
   ```bash
   git clone https://github.com/maulxikhlas/it-learning-companion.git
   cd it-learning-companion
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```

3. Jalankan server lokal:
   ```bash
   npm run dev
   ```

4. Buka aplikasi di browser melalui alamat:
   ```text
   http://localhost:3000
   ```

---

## Teknologi yang Digunakan

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
