const express = require("express");
const router = express.Router();
const { postCreate, authorCreate, authorGet } = require("./author.controllers");

router.post("/:authorId", postCreate);
router.post("/", authorCreate);
router.get("/", authorGet);

module.exports = router;
