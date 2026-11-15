const model = require("../models/mahasiswaModel");

function getAllMahasiswa(req, res) {
  res.json({
    success: true,
    message: "Data berhasil ditampilkan",
    data: model.getAll(),
  });
}

function getMahasiswaById(req, res) {
  const data = model.getById(Number(req.params.id));
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }
  res.json({ success: true, message: "Detail data berhasil ditampilkan", data });
}

function createMahasiswa(req, res) {
  const { nim, nama, prodi } = req.body || {};
  if (!nim || !nama || !prodi) {
    return res.status(400).json({
      success: false,
      message: "nim, nama, dan prodi wajib diisi",
    });
  }
  const data = model.create({ nim, nama, prodi });
  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data,
  });
}

function updateMahasiswa(req, res) {
  const data = model.update(Number(req.params.id), req.body || {});
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }
  res.json({ success: true, message: "Data berhasil diubah", data });
}

function deleteMahasiswa(req, res) {
  const data = model.remove(Number(req.params.id));
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }
  res.json({ success: true, message: "Data berhasil dihapus", data });
}

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};