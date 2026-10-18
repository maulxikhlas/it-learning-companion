import { CareerPath, Question, Roadmap, RoadmapStep } from "./models";

// =============================================================
// DATA: Roadmap per Career Path
// =============================================================
export const roadmapData: Record<CareerPath, Roadmap> = {
  "Web Developer": new Roadmap("Web Developer", [
    new RoadmapStep(1, "HTML & CSS Dasar", "Pelajari struktur HTML dan styling CSS", ["MDN Web Docs", "freeCodeCamp"], 14),
    new RoadmapStep(2, "JavaScript Fundamental", "Variabel, fungsi, DOM, event", ["javascript.info", "Eloquent JS"], 21),
    new RoadmapStep(3, "React.js", "Component, props, state, hooks", ["react.dev", "Scrimba React"], 21),
    new RoadmapStep(4, "TypeScript", "Typing, interface, generics", ["typescriptlang.org"], 14),
    new RoadmapStep(5, "Next.js", "App Router, SSR, API Routes", ["nextjs.org/docs"], 21),
    new RoadmapStep(6, "Database & API", "REST API, PostgreSQL/MySQL basics", ["Prisma Docs"], 21),
    new RoadmapStep(7, "Deploy", "Vercel, GitHub Actions, CI/CD", ["Vercel Docs"], 7),
  ]),

  "Data Scientist": new Roadmap("Data Scientist", [
    new RoadmapStep(1, "Python Dasar", "Sintaks, tipe data, fungsi, OOP", ["python.org", "Codecademy"], 14),
    new RoadmapStep(2, "Matematika & Statistik", "Probabilitas, distribusi, regresi dasar", ["Khan Academy"], 21),
    new RoadmapStep(3, "NumPy & Pandas", "Manipulasi data array dan dataframe", ["Kaggle Learn"], 14),
    new RoadmapStep(4, "Visualisasi Data", "Matplotlib, Seaborn, Plotly", ["Kaggle Learn"], 14),
    new RoadmapStep(5, "Machine Learning", "Scikit-learn, regresi, klasifikasi, clustering", ["fast.ai", "Coursera ML"], 30),
    new RoadmapStep(6, "Deep Learning", "TensorFlow / PyTorch dasar", ["fast.ai DL"], 30),
    new RoadmapStep(7, "Proyek & Portfolio", "Kaggle competitions, GitHub portfolio", ["Kaggle"], 21),
  ]),

  "Cybersecurity": new Roadmap("Cybersecurity", [
    new RoadmapStep(1, "Jaringan Komputer", "OSI model, TCP/IP, DNS, HTTP", ["Professor Messer", "CompTIA Net+"], 21),
    new RoadmapStep(2, "Linux & Command Line", "Navigasi, permission, scripting bash", ["OverTheWire", "TryHackMe"], 14),
    new RoadmapStep(3, "Kriptografi Dasar", "Enkripsi simetris, asimetris, hashing", ["Coursera Cryptography"], 14),
    new RoadmapStep(4, "Ethical Hacking", "Pentest basics, OWASP Top 10", ["TryHackMe", "Hack The Box"], 30),
    new RoadmapStep(5, "Network Security", "Firewall, IDS/IPS, VPN", ["CompTIA Sec+"], 21),
    new RoadmapStep(6, "SOC & Blue Team", "SIEM, log analysis, incident response", ["Blue Team Labs"], 21),
    new RoadmapStep(7, "Sertifikasi", "CompTIA Security+, CEH, OSCP", ["Exam prep materials"], 30),
  ]),

  "Mobile Developer": new Roadmap("Mobile Developer", [
    new RoadmapStep(1, "Dart Dasar", "Sintaks, OOP, async/await di Dart", ["dart.dev"], 14),
    new RoadmapStep(2, "Flutter Fundamental", "Widget, layout, state management dasar", ["flutter.dev"], 21),
    new RoadmapStep(3, "State Management", "Provider, Riverpod, atau BLoC", ["Flutter Docs"], 21),
    new RoadmapStep(4, "API Integration", "HTTP requests, JSON parsing, REST API", ["pub.dev packages"], 14),
    new RoadmapStep(5, "Local Storage", "SQLite, SharedPreferences, Hive", ["Flutter Cookbook"], 14),
    new RoadmapStep(6, "UI/UX Mobile", "Material Design, animasi, responsive layout", ["Material Design Docs"], 14),
    new RoadmapStep(7, "Publish App", "Google Play Store, Apple App Store", ["Play Console Docs"], 14),
  ]),

  "DevOps Engineer": new Roadmap("DevOps Engineer", [
    new RoadmapStep(1, "Linux & Shell Scripting", "Command line, bash scripting, cron jobs", ["Linux Journey"], 21),
    new RoadmapStep(2, "Git & Version Control", "Git flow, branching strategy, GitHub Actions", ["Pro Git Book"], 14),
    new RoadmapStep(3, "Docker", "Container, image, Dockerfile, docker-compose", ["Docker Docs"], 21),
    new RoadmapStep(4, "CI/CD Pipeline", "GitHub Actions, Jenkins, GitLab CI", ["GitHub Actions Docs"], 21),
    new RoadmapStep(5, "Kubernetes", "Pod, deployment, service, ingress", ["kubernetes.io"], 30),
    new RoadmapStep(6, "Cloud Platform", "AWS / GCP / Azure basics", ["AWS Free Tier", "A Cloud Guru"], 30),
    new RoadmapStep(7, "Monitoring & Logging", "Prometheus, Grafana, ELK Stack", ["Grafana Docs"], 21),
  ]),

  "UI/UX Designer": new Roadmap("UI/UX Designer", [
    new RoadmapStep(1, "Desain Fundamental", "Prinsip desain, tipografi, warna, layout", ["Canva Design School"], 14),
    new RoadmapStep(2, "User Research", "Interview, survey, persona, user journey", ["Nielsen Norman Group"], 14),
    new RoadmapStep(3, "Wireframing", "Low-fidelity wireframe, flowchart", ["Balsamiq", "Whimsical"], 14),
    new RoadmapStep(4, "Figma", "Frame, komponen, auto layout, prototyping", ["Figma Learn"], 21),
    new RoadmapStep(5, "Prototyping & Testing", "Usability testing, A/B testing", ["Maze", "UserTesting"], 14),
    new RoadmapStep(6, "Design System", "Komponen library, tokens, dokumentasi", ["Material Design", "Storybook"], 21),
    new RoadmapStep(7, "Portfolio", "Membuat case study dan Behance/Dribbble portfolio", ["Behance", "Dribbble"], 21),
  ]),
};

// =============================================================
// DATA: Soal Assessment
// =============================================================
export const assessmentQuestions: Question[] = [
  new Question(1, "Apa kepanjangan dari HTML?", [
    "HyperText Markup Language",
    "High Text Machine Language",
    "HyperText Machine Language",
    "High Transfer Markup Language",
  ], 0, "Web", "Beginner"),
  new Question(2, "Manakah hook React yang digunakan untuk state?", [
    "useEffect",
    "useRef",
    "useState",
    "useContext",
  ], 2, "Web", "Beginner"),
  new Question(3, "Apa itu API REST?", [
    "Bahasa pemrograman baru",
    "Antarmuka berbasis HTTP untuk komunikasi client-server",
    "Database relasional",
    "Framework CSS",
  ], 1, "Web", "Intermediate"),
  new Question(4, "Apa perbedaan SQL dan NoSQL?", [
    "SQL untuk frontend, NoSQL untuk backend",
    "SQL menggunakan tabel relasional, NoSQL tidak terikat skema tetap",
    "Tidak ada perbedaan",
    "NoSQL lebih lambat dari SQL",
  ], 1, "Database", "Intermediate"),
  new Question(5, "Apa itu Docker?", [
    "Bahasa pemrograman untuk server",
    "Platform containerisasi aplikasi",
    "Framework JavaScript",
    "Sistem operasi Linux",
  ], 1, "DevOps", "Intermediate"),
  new Question(6, "Apa yang dimaksud dengan Machine Learning?", [
    "Cara komputer belajar bahasa manusia",
    "Subset AI di mana sistem belajar dari data tanpa diprogram eksplisit",
    "Program yang meniru gerakan manusia",
    "Teknik mengoptimasi hardware komputer",
  ], 1, "Data Science", "Intermediate"),
  new Question(7, "Apa itu XSS dalam keamanan web?", [
    "Cross-Site Scripting — injeksi skrip berbahaya ke halaman web",
    "Extra Secure System",
    "Extended Style Sheet",
    "Cross-Server Synchronization",
  ], 0, "Cybersecurity", "Intermediate"),
  new Question(8, "Apa fungsi `async/await` di JavaScript?", [
    "Mempercepat eksekusi sinkron",
    "Menangani operasi asinkron dengan sintaks yang lebih mudah dibaca",
    "Membuat kode berjalan paralel",
    "Menggantikan fungsi callback seluruhnya",
  ], 1, "Web", "Advanced"),
  new Question(9, "Apa itu CI/CD?", [
    "Code Integration / Code Delivery",
    "Continuous Integration / Continuous Deployment",
    "Cloud Infrastructure / Cloud Development",
    "Container Instance / Container Deployment",
  ], 1, "DevOps", "Advanced"),
  new Question(10, "Algoritma machine learning mana yang termasuk supervised learning?", [
    "K-Means Clustering",
    "Principal Component Analysis",
    "Linear Regression",
    "DBSCAN",
  ], 2, "Data Science", "Advanced"),
];
