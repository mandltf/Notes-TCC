# 📝 Notes App - Cloud Computing Project

## 📌 Deskripsi Singkat

Notes App adalah aplikasi fullstack sederhana untuk mengelola catatan (notes) yang dibangun menggunakan **React (Frontend)** dan **Express.js (Backend)**. Aplikasi ini memungkinkan pengguna untuk membuat, melihat, mengedit, dan menghapus catatan.

Project ini telah diintegrasikan dengan **Cloud Computing** menggunakan **Google Cloud SQL (MySQL)** sebagai database, sehingga data dapat diakses secara online dan tidak bergantung pada penyimpanan lokal.

---

## ✨ Fitur Utama

* ➕ Menambahkan catatan baru
* 📄 Melihat daftar semua catatan
* 🔍 Melihat detail catatan
* ✏️ Mengedit catatan
* 🗑️ Menghapus catatan
* ☁️ Penyimpanan data menggunakan Cloud SQL (GCP)
* 🔗 REST API menggunakan Express.js
* 🌐 Routing frontend menggunakan React Router

---
## 📸 Tampilan Aplikasi

### 🏠 Halaman Utama
![Home](gambar/ui.jpg)

---

## 🛠️ Teknologi yang Digunakan

### Backend

* Node.js
* Express.js
* Sequelize (ORM)
* MySQL (Cloud SQL - GCP)

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/mandltf/Notes-TCC
cd notes-app
```

---

## ⚙️ Setup Backend (Express.js)

### 2. Masuk ke folder backend

```bash
cd backend
```

### 3. Install dependency

```bash
npm install
```

### 4. Konfigurasi Environment (.env)

Buat file `.env` dan isi:

```env
DB_NAME=notes_db
DB_USER=notes_user
DB_PASS=your_password
DB_HOST=your_cloud_sql_ip
PORT=3000
```

---

### 5. Jalankan Backend

```bash
node index.js
```

Jika berhasil:

```
Server is running on port 3000
Database connected and synced successfully
```

---

## 🎨 Setup Frontend (React)

### 6. Masuk ke folder frontend

```bash
cd ../frontend
```

### 7. Install dependency

```bash
npm install
```

### 8. Konfigurasi Base URL

Pastikan file `utils.jsx`:

```javascript
export const BASE_URL = "http://localhost:3000/api";
```

---

### 9. Jalankan Frontend

```bash
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:5173
```

---

## 🔗 Alur Aplikasi

1. User berinteraksi melalui frontend (React)
2. Frontend mengirim request ke backend (Express API)
3. Backend memproses request dan berkomunikasi dengan database Cloud SQL
4. Data dikembalikan ke frontend dan ditampilkan ke user

---

## ☁️ Integrasi Cloud

* Database menggunakan Google Cloud SQL (MySQL)
* Data tidak disimpan secara lokal
* Mendukung akses dari berbagai perangkat

---

## 📌 Catatan

* Pastikan IP backend sudah diizinkan di Cloud SQL
* Jangan upload file `.env` ke repository
* Gunakan koneksi internet saat mengakses database cloud

---

## 👨‍💻 Penutup

Project ini merupakan implementasi dasar dari **Fullstack Development + Cloud Computing**, yang mencakup integrasi frontend, backend, dan database cloud dalam satu sistem yang terhubung.
