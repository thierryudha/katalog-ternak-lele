# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:*Baca AGENTS.md dan docs/user-stories.md bagian US-01.

Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase.

Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.*

**Hasil:*Membuat File lib/supabase/server.js: Membuat instance koneksi Supabase khusus di sisi server dengan menggunakan environment variable SUPABASE_URL dan SUPABASE_SECRET_KEY.
Mengubah File app/page.jsx:
Mengubah halaman ini menjadi Server Component (async function).
Mengambil daftar produk dari tabel produk di Supabase langsung di sisi server.
Menghapus penggunaan data contoh (produkContoh) serta pesan <CatatanBelumAktif>.
Menambahkan pengkondisian untuk menampilkan pesan error jika gagal mengambil data, teks "Belum ada produk" jika data kosong, dan merender KartuProduk (tanpa mengubah tampilannya) apabila pengambilan data berhasil.*

**Perbaikan:**

## US-02 Detail produk

**Prompt:*Baca docs/user-stories.md bagian US-02.

Ubah app/produk/[id]/page.jsx supaya mengambil satu produk dari tabel "produk" di Supabase berdasarkan id di URL, di sisi server, memakai koneksi Supabase yang sudah dibuat di lib/supabase. Kalau produk tidak ditemukan, panggil notFound(). Jangan ubah tampilannya. Hapus CatatanBelumAktif dari halaman ini, tapi biarkan tombol WhatsApp.*

**Hasil:*Saya telah menyelesaikan US-02. File app/produk/[id]/page.jsx sudah diperbarui dengan perubahan berikut:

Pengambilan Data dari Supabase: Menggunakan createServerSupabaseClient yang sebelumnya kita buat di lib/supabase/server.js untuk mengambil detail satu produk berdasarkan id pada URL.
Penanganan Produk Tidak Ditemukan: Menambahkan pengecekan if (error || !produk). Jika query gagal atau produk dengan ID tersebut tidak ada di database, halaman akan otomatis memanggil fungsi notFound() untuk merender halaman 404.
Pembersihan Kode: Menghapus komponen <CatatanBelumAktif> dan import cariProdukContoh. Tampilan halaman tetap dipertahankan persis seperti sebelumnya dan TombolWhatsApp tetap dibiarkan ada.

Sekarang, setiap halaman detail produk (contohnya /produk/1) akan merender datanya langsung dari Supabase!*

**Perbaikan:**

## US-03 Pesan via WhatsApp

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-04 Login admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-05 Ganti password

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-06 Proteksi halaman admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## Debugging dan fitur bonus

Tambahkan bagian baru untuk setiap error yang kamu perbaiki atau fitur bonus yang kamu kerjakan.
