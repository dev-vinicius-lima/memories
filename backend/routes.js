const express = require("express");

const router = express.Router();
const upload = require("./Helpers/upload");

const { createMemory } = require("./controllers/MemoryController");

router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;
    if (!image) {
      return res.status(400).json("por favor, envie um arquivo!");
    }
    next();
  },
  (req, res) => createMemory(req, res)
);

module.exports = router;
