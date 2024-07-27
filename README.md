# Aplikasi Hospital Rush
---

## apa itu aplikasi HoRush?
Hospital Rush App merupakan aplikasi berbasis mobile yang dibuat dengan tujuan untuk membantu masyarakat mencari informasi tentang layanan kesehatan dengan mudah dan cepat, serta memberikan umpan balik kepada rumah sakit untuk meningkatkan kualitas pelayanan mereka.

---

## Teknologi dan Lisensi teknologi yang kami gunakan atau Daftar komponen untuk aplikasi Hospital Rush


Berikut adalah daftar komponen atau perpustakaan perangkat lunak beserta lisensi yang kami gunakan :

### Komponen React Native:

1. **@gorhom/bottom-sheet**
   - Deskripsi: Komponen bawah lembaran untuk React Native.
   - Lisensi: MIT License

2. **@react-navigation/native**
   - Deskripsi: Navigasi untuk aplikasi React Native.
   - Lisensi: BSD 2-Clause "Simplified" License

3. **@react-navigation/stack**
   - Deskripsi: Navigasi tumpukan untuk aplikasi React Native.
   - Lisensi: BSD 2-Clause "Simplified" License

4. **@supabase/supabase-js**
   - Deskripsi: Klien JavaScript untuk Supabase API.
   - Lisensi: MIT License

5. **axios**
   - Deskripsi: Klien HTTP untuk browser dan Node.js.
   - Lisensi: MIT License

6. **expo**
   - Deskripsi: Platform untuk membuat aplikasi universal untuk Android, iOS, dan web dengan JavaScript dan React.
   - Lisensi: MIT License

7. **expo-constants**
   - Deskripsi: Modul konstan yang menyediakan informasi perangkat dan pengaturan proyek Expo.
   - Lisensi: MIT License

8. **expo-linking**
   - Deskripsi: Modul untuk mengelola tautan dalam aplikasi Expo.
   - Lisensi: MIT License

9. **expo-location**
   - Deskripsi: Modul untuk mengakses informasi lokasi perangkat dalam aplikasi Expo.
   - Lisensi: MIT License

10. **expo-router**
    - Deskripsi: Router untuk aplikasi Expo.
    - Lisensi: MIT License

11. **expo-status-bar**
    - Deskripsi: Status bar yang terintegrasi dengan Expo.
    - Lisensi: MIT License

12. **geolib**
    - Deskripsi: Library untuk operasi geometri dan perhitungan jarak dalam JavaScript.
    - Lisensi: MIT License

13. **native-base**
    - Deskripsi: Komponen UI untuk aplikasi React Native.
    - Lisensi: MIT License

14. **nativewind**
    - Deskripsi: Utilitas untuk menggunakan Tailwind CSS dalam aplikasi React Native.
    - Lisensi: MIT License

15. **normalize-css-color**
    - Deskripsi: Normalisasi warna CSS dalam JavaScript.
    - Lisensi: MIT License

16. **react**
    - Deskripsi: Library JavaScript untuk membangun antarmuka pengguna.
    - Lisensi: MIT License

17. **react-dom**
    - Deskripsi: Binding DOM untuk React.
    - Lisensi: MIT License

18. **react-native**
    - Deskripsi: Framework untuk membangun aplikasi mobile dengan menggunakan JavaScript dan React.
    - Lisensi: MIT License

19. **react-native-config**
    - Deskripsi: Memuat variabel konfigurasi dari file `.env` ke dalam aplikasi React Native.
    - Lisensi: MIT License

20. **react-native-dotenv**
    - Deskripsi: Mengelola variabel lingkungan dalam aplikasi React Native.
    - Lisensi: MIT License

21. **react-native-gesture-handler**
    - Deskripsi: Pengelola gesture yang responsif untuk React Native.
    - Lisensi: MIT License

22. **react-native-maps**
    - Deskripsi: Komponen peta untuk React Native.
    - Lisensi: MIT License

23. **react-native-modal**
    - Deskripsi: Komponen modal untuk React Native.
    - Lisensi: MIT License

24. **react-native-reanimated**
    - Deskripsi: Animasi deklaratif untuk React Native.
    - Lisensi: MIT License

25. **react-native-safe-area-context**
    - Deskripsi: Konteks untuk menangani area aman di React Native.
    - Lisensi: MIT License

26. **react-native-screens**
    - Deskripsi: Navigasi tumpukan layar yang dioptimalkan untuk React Native.
    - Lisensi: MIT License

27. **react-native-svg**
    - Deskripsi: SVG untuk React Native.
    - Lisensi: MIT License

28. **react-native-web**
    - Deskripsi: Implementasi React Native untuk web.
    - Lisensi: MIT License

29. **zustand**
    - Deskripsi: State management untuk aplikasi React.
    - Lisensi: MIT License

### Komponen Tambahan:

1. **@babel/core**
   - Deskripsi: Compiler JavaScript yang fleksibel dan konfigurable.
   - Lisensi: MIT License

2. **tailwindcss**
   - Deskripsi: Framework CSS yang sangat customizable menggunakan konsep utility-first.
   - Lisensi: MIT License

---

### I. Penggunaan Aplikasi Hospital Rush

#### I.1. Penggunaan Aplikasi

1. Unduh file aplikasi Hospital Rush pada [link ini](https://drive.google.com/drive/folders/1jQ6GXpJt5uLOIeDFQSOqhbLTFqu58zHf?usp=sharing) dan install setelah diunduh.
2. Buka aplikasi Hospital Rush setelah terinstal.
3. Halaman pertama yang muncul adalah halaman onboarding.
4. Jika belum memiliki akun, buat registrasi akun.
5. Jika sudah memiliki akun, lakukan login.
6. Setelah login, akan masuk ke halaman Beranda yang berisi menu navigasi seperti Buat Janji, Darurat, Riwayat, dan Profil.
7. Pilih menu yang diinginkan untuk melanjutkan.

#### I.2. Penggunaan Menu Darurat

1. Pilih menu Darurat pada tab navigasi.
2. Pilih "Pribadi" jika untuk diri sendiri atau "Orang Lain" jika untuk orang lain.
3. Isi form dengan memilih poli yang diinginkan, penyakit yang ingin ditangani, dan deskripsi kejadian (opsional).
4. Setelah mengisi form, tekan tombol "Cari".
5. Aplikasi akan menampilkan rumah sakit terdekat yang sesuai dengan kebutuhan Anda.
6. Pilih rumah sakit yang diinginkan.
7. Jika untuk situasi darurat, rumah sakit dapat mengirimkan ambulance. Untuk situasi non-darurat, Anda dapat melakukan kunjungan mandiri sesuai rekomendasi.

#### I.3. Penggunaan Menu Beranda

1. Pilih menu Beranda.
2. Lakukan pencarian rumah sakit atau dokter yang diinginkan.
3. Baca artikel kesehatan yang tersedia.
4. Lihat daftar rumah sakit populer dengan rating tertinggi.

#### I.4. Penggunaan Menu Janji

1. Pilih menu Janji.
2. Aplikasi akan menampilkan rekomendasi rumah sakit terdekat.
3. Pilih rumah sakit dari daftar.
4. Pada detail rumah sakit, pilih spesialisasi yang dibutuhkan.
5. Pilih dokter dari daftar dokter yang tersedia.
6. Atur jadwal sesuai dengan jam kerja dokter yang tersedia.
7. Tekan tombol "Buat Janji" untuk mengonfirmasi janji.

#### I.5. Penggunaan Menu Riwayat

1. Pilih menu Riwayat.
2. Aplikasi akan menampilkan aktivitas yang telah dilakukan, terutama terkait dengan penggunaan fitur Darurat.

#### I.6. Penggunaan Menu Profil

1. Pilih menu Profil.
2. Tampil informasi pribadi pengguna seperti nama, umur, dan email.

#### I.7. Penggunaan Fitur Rating

1. Saat mencari rumah sakit terdekat, rumah sakit populer, atau membuat janji dokter, pilih rumah sakit yang diinginkan.
2. Aplikasi akan menampilkan detail rumah sakit.
3. Pilih menu "Rating" di navigasi detail rumah sakit.
4. Tekan "Buat Ulasan".
5. Masukkan rating dan ulasan yang ingin diberikan terhadap rumah sakit.

Dengan menggunakan format markdown di atas, Anda dapat mengorganisir instruksi penggunaan aplikasi Hospital Rush secara jelas dan terstruktur.
