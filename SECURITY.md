# Kebijakan Keamanan (Security Policy)

Keamanan aplikasi dan data pengguna merupakan prioritas dalam pengembangan proyek ini. Dokumen ini menjelaskan kebijakan penanganan celah keamanan serta panduan pelaporan kerentanan (*responsible disclosure*).

---

## Versi yang Didukung

Hanya versi terbaru pada branch `main` yang secara aktif menerima pembaruan dan perbaikan keamanan:

| Versi | Didukung |
| :--- | :--- |
| `main` (latest) | :white_check_mark: |
| < 0.1.0 | :x: |

---

## Melaporkan Celah Keamanan (Responsible Disclosure)

Jika Anda menemukan celah keamanan (*vulnerability*) atau potensi risiko pada proyek ini:

1. **Jangan publikasikan temuan secara terbuka** melalui issue publik di GitHub.
2. Laporkan temuan secara privat melalui:
   - Fitur **GitHub Private Vulnerability Reporting** pada tab Security repositori ini, atau
   - Email langsung ke pengelola repositori: `maulxikhlas@users.noreply.github.com`
3. Mohon sertakan informasi pendukung:
   - Deskripsi singkat mengenai celah yang ditemukan (misal: XSS, Broken Access Control, Information Disclosure).
   - Langkah-langkah reproduksi (*Proof of Concept* / PoC).
   - Potensi dampak risiko jika celah dieksploitasi.

---

## Batasan Pengujian (Scope)

Sebagai bentuk etika keamanan (*ethical research*):

### Diizinkan (In Scope):
- Identifikasi celah logika aplikasi web (*business logic flaw*).
- Pengujian keamanan konfigurasi header, otentikasi, atau sanitasi input.
- Rekomendasi perbaikan *security hardening*.

### Dilarang (Out of Scope):
- Serangan penolakan layanan (*Denial of Service* / DoS / DDoS) terhadap infrastruktur hosting/server kampus.
- Teknik rekayasa sosial (*social engineering*) atau *phishing* terhadap pengembang/pengguna.
- Merusak, mengubah, atau menghapus data pengguna lain yang bukan milik penguji.

---

## Pengerasan Keamanan yang Diterapkan (Security Hardening)

Proyek ini telah mengonfigurasi beberapa lapisan pengamanan dasar:
- **HTTP Security Headers** (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`).
- **Penonaktifan Fingerprint Teknologi** (`poweredByHeader: false` untuk menyembunyikan header `X-Powered-By`).
- **Isolasi Lingkungan**: Pemisahan konfigurasi kredensial dan variabel sensitif melalui file `.env` yang diabaikan oleh Git.
