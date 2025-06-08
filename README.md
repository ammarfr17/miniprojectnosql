# MyToDo

MyToDo merupakan program untuk mencatat aktivitas/kegiatan dalam kesehariannya. Ini menyiratkan bahwa Anda dapat memasukkan apa saja ke dalam daftar tugas Anda.
Anda dapat memprioritaskan tugas dan menyelesaikan pekerjaan luar biasa dengan mencatat secara akurat kapan pekerjaan Anda harus diselesaikan.

## Tampilan Web

![image](https://github.com/MRifkiPratama/MyToDo/assets/144346489/1f891698-fc8f-4978-8afd-633634e385cc)

![image](https://github.com/MRifkiPratama/MyToDo/assets/144346489/92282acc-608d-4078-8d35-8c1b0591bffa)


## Fitur

- Menambahkan, mengedit, dan menghapus aktivitas atau tugas 
- Dapat mengatur jadwal kelas
- Mengelola deadline tugas
- Tampilan antarmuka yang user-friendly dan simpel

## Teknologi yang Digunakan

- Backend: Node.js
- Database: MongoDB
- Containerization: Docker

## Cara Instalasi

### Prasyarat

- [Docker](https://docs.docker.com/get-docker/) harus terinstall di sistem Anda
- [Docker Compose](https://docs.docker.com/compose/install/) (jika menggunakan Docker Compose)

### Langkah-langkah Instalasi

1. Clone repositori ini ke lokal Anda

    ```sh
    mkdir MyToDo (optional)
    git clone https://github.com/MRifkiPratama/MyToDo.git
    cd MyToDo/backend
    ```

2. Bangun dan jalankan container Docker

    ```sh
    docker-compose up -d
    ```

3. Jalankan Frontend
   
    ```sh
    cd MyToDo/frontend
    npm start App.js
    ```
    
4. Aplikasi akan berjalan di `http://localhost:3000` 

## Struktur Proyek

```
MyToDo/
├── /backend
    ├── Dockerfile
    ├── docker-compose.yml
    ├── package-lock.json
    ├── package.json
    ├── server.js
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│          ├── app.js
│          └── setupTests.js
|   ├── .gitignore
|   ├── package.json
├── package-lock.json
└── README.md
```

## Kontributor Proyek
- M Avicenna Raffaiz (2206062844)
- Lutfi Setiadi (2206059805)
- Ammar Fattan (2306266981)

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [MIT](https://choosealicense.com/licenses/mit/) untuk informasi lebih lanjut.
