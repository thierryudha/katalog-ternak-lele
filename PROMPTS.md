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

**Prompt:*Baca docs/rancangan-teknis.md bagian "Pesan WhatsApp (US-03)".

Ubah components/TombolWhatsApp.jsx menjadi tautan yang membuka https://wa.me/ ke nomor di lib/toko.js, dengan pesan otomatis berisi nama dan harga produk dalam format rupiah. Pesan di-encode dengan encodeURIComponent dan dibuka di tab baru. Pertahankan tampilan tombolnya. Hapus CatatanBelumAktif yang menyebut US-03 di halaman detail produk.*

**Hasil:*Viewed rancangan-teknis.md:1-69
Viewed TombolWhatsApp.jsx:1-13
Viewed page.jsx:1-43
Viewed toko.js:1-10
Edited TombolWhatsApp.jsx

Fitur US-03 (Pesan WhatsApp) sudah selesai saya kerjakan! 

Berikut perubahan yang telah saya lakukan:
1. **Mengubah `components/TombolWhatsApp.jsx`**:
   - Saya mengubah komponen dari elemen `<button>` menjadi tautan `<a>`.
   - Menambahkan referensi nomor telepon dari `lib/toko.js` (`toko.nomorWhatsApp`).
   - Menyusun pesan otomatis ("Halo, saya mau pesan ...") yang berisi nama produk serta harga dengan format rupiah.
   - Pesan tersebut saya masukkan ke URL WhatsApp (`https://wa.me/...`) dan sudah di-encode dengan `encodeURIComponent` agar aman dari karakter spesial atau spasi.
   - Tautan tersebut kini disetel dengan atribut `target="_blank"` supaya terbuka di tab/aplikasi baru tanpa meninggalkan halaman web kita.
2. Tampilan tombol (kelas-kelas Tailwind) dipertahankan sepenuhnya, sehingga tidak ada bedanya secara visual dengan sebelumnya.
3. Mengenai `<CatatanBelumAktif>` yang menyebut US-03 di halaman detail produk, komponen tersebut kebetulan sudah saya bersihkan pada langkah pengerjaan (US-02) sebelumnya.

Kini jika pengunjung menekan tombol "Pesan via WhatsApp" dari halaman produk (baik lewat ponsel atau laptop), mereka akan langsung diarahkan ke chat WhatsApp yang pesannya sudah terisi otomatis!*

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
