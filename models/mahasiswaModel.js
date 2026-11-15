let mahasiswa = [
  { id: 1, nim: "2026001", nama: "Andi Saputra", prodi: "Teknik Informatika" },
  { id: 2, nim: "2026002", nama: "Budi Santoso", prodi: "Sistem Informasi" },
];

let idBerikutnya = 3;

function getAll() {
  return mahasiswa;
}

function getById(id) {
  return mahasiswa.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: idBerikutnya++, ...data };
  mahasiswa.push(baru);
  return baru;
}

function update(id, data) {
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;
  mahasiswa[index] = { ...mahasiswa[index], ...data, id };
  return mahasiswa[index];
}

function remove(id) {
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;
  return mahasiswa.splice(index, 1)[0];
}

module.exports = { getAll, getById, create, update, remove };