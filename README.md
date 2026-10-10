# Dapz Portfolio — Daffa Nurkhalish

Portofolio personal bergaya **Modern Monochrome**, dibuat dengan HTML, CSS, dan JavaScript murni.

## Fitur
- Layout responsif untuk desktop, tablet, dan HP
- Scroll reveal menggunakan Intersection Observer
- Hover interaktif pada kartu proyek
- Navigasi mobile
- Indikator menu aktif
- Form kontak membuka aplikasi email (`mailto:`)
- Menghormati pengaturan `prefers-reduced-motion`
- Metadata SEO dasar dan favicon SVG
- Tidak membutuhkan framework atau proses build

## Menjalankan secara lokal
1. Ekstrak ZIP.
2. Buka `index.html` di browser.
3. Untuk pengalaman yang lebih konsisten, gunakan ekstensi Live Server atau server statis lokal.

## Sebelum dipublikasikan
1. Di `index.html`, ganti `daffa@example.com` dengan email aktif.
2. Di `js/script.js`, ganti alamat `daffa@example.com` pada `mailto:`.
3. Periksa dan ganti tautan GitHub/Instagram bila berbeda.
4. Ganti mockup ilustratif proyek dengan screenshot proyek asli.
5. Tambahkan URL Live Demo dan repository asli pada kartu proyek.
6. Pastikan semua informasi dan kemampuan yang ditampilkan akurat.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah seluruh isi folder ini (jangan hanya file ZIP).
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
5. Tunggu proses deployment selesai dan buka URL Pages yang diberikan GitHub.

## Deploy ke Vercel
1. Unggah folder proyek ke repository GitHub.
2. Import repository itu ke Vercel.
3. Framework Preset: **Other**.
4. Build Command dan Output Directory bisa dikosongkan untuk website statis sederhana (atau output directory `.` bila diminta).
5. Deploy.

## Struktur
```text
dapz-portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/icons/favicon.svg
├── assets/images/
└── README.md
```

Catatan: form kontak saat ini hanya membuka aplikasi email pengunjung, bukan mengirim data ke server. Untuk pengiriman tanpa aplikasi email, sambungkan layanan form/backend dan siapkan perlindungan spam.
