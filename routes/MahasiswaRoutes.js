const express = require("express");
const router = express.Router();
const c = require("../controllers/mahasiswaController");

router.get("/", c.getAllMahasiswa);
router.get("/:id", c.getMahasiswaById);
router.post("/", c.createMahasiswa);
router.put("/:id", c.updateMahasiswa);
router.delete("/:id", c.deleteMahasiswa);

module.exports = router;