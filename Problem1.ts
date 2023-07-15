//Konversi Nilai

function getDeskripsiNilai(nama: string, nilai: number): string {
    if (nilai < 0 || nilai > 100) {
      return 'Invalid';
    } else if (nilai >= 80 && nilai <= 100) {
      return `Nama: ${nama}, Nilai: ${nilai}, Deskripsi: A`;
    } else if (nilai >= 65 && nilai <= 79) {
      return `Nama: ${nama}, Nilai: ${nilai}, Deskripsi: B+`;
    } else if (nilai >= 50 && nilai <= 64) {
      return `Nama: ${nama}, Nilai: ${nilai}, Deskripsi: B`;
    } else if (nilai >= 35 && nilai <= 49) {
      return `Nama: ${nama}, Nilai: ${nilai}, Deskripsi: C`;
    } else {
      return `Nama: ${nama}, Nilai: ${nilai}, Deskripsi: D`;
    }
  }

  //Output

  const namaMahasiswa: string = 'John Doe';
const nilaiMahasiswa: number = 85;

const deskripsiNilai: string = getDeskripsiNilai(namaMahasiswa, nilaiMahasiswa);
console.log(deskripsiNilai);