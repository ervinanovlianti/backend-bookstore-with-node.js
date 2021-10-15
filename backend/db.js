const mongoose = require('mongoose'); //deklarasi menggunakan mongoose
// setting koneksi MongoDB pada port 27017/default dengan database db_buku
mongoose.connect('mongodb://localhost:27017/db_buku');
//menghubungkan MongoDB dengan setting sebelumnya
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi Database Gagal...'));

db.once('open', () => {
  console.log('Koneksi Database Berhasil!');
});
