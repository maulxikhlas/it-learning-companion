# 🧭 IT Learning Companion

> Platform pembelajaran berbasis OOP untuk mahasiswa Teknologi Informasi — Roadmap Generator, Skills Assessment, dan Progress Dashboard.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss)
![OOP](https://img.shields.io/badge/Paradigma-OOP%2FPBO-blueviolet)

---

## 🎯 Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🗺️ **IT Roadmap Generator** | Pilih jalur karir IT dan dapatkan roadmap belajar step-by-step |
| 🎯 **Skills Assessment** | Quiz adaptif untuk mengetahui level skill IT kamu |
| 📊 **Progress Dashboard** | Pantau XP, level, roadmap progress, dan badge pencapaian |

---

## 🏗️ Struktur OOP (Class Diagram)

```
User (base class)
└── Learner (extends User)
    ├── skills: Skill[]
    ├── progress: Progress
    ├── currentRoadmap: Roadmap
    └── assessmentHistory: Assessment[]

Roadmap
└── steps: RoadmapStep[]

Assessment
└── questions: Question[]

Progress
└── badges: Badge[]
```

---

## 📁 Struktur Folder

```
it-learning-companion/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── roadmap/
│   │   ├── page.tsx        # Daftar career path
│   │   └── [slug]/page.tsx # Detail roadmap per career
│   ├── assessment/
│   │   ├── page.tsx        # Landing assessment
│   │   └── quiz/page.tsx   # Quiz interaktif
│   └── dashboard/
│       └── page.tsx        # Progress dashboard
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── models.ts           # Semua class OOP (User, Learner, Roadmap, dll)
│   └── data.ts             # Data roadmap & soal assessment
├── package.json
└── tsconfig.json
```

---

## 🚀 Cara Menjalankan

```bash
# 1. Clone repository
git clone https://github.com/maulxikhlas/it-learning-companion.git
cd it-learning-companion

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:3000
```

---

## 🎓 Konsep OOP yang Diterapkan

| Konsep OOP | Implementasi |
|---|---|
| **Class & Object** | `User`, `Learner`, `Roadmap`, `Assessment`, `Skill`, `Badge`, `Progress` |
| **Inheritance** | `Learner extends User` |
| **Encapsulation** | Method `getScore()`, `getCompletionPercentage()`, `addXP()` |
| **Abstraction** | Class `User` sebagai base abstrak untuk `Learner` |
| **Interface / Type** | TypeScript `type` untuk `SkillLevel`, `CareerPath`, `BadgeType` |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Paradigma**: Object-Oriented Programming (OOP/PBO)

---

## 📌 Tugas Proyek

Mata kuliah **Pemrograman Berorientasi Objek (PBO)**  
Tema: **Pendidikan Teknologi Informasi**

---

*Dibuat dengan ❤️ menggunakan Next.js & TypeScript*
