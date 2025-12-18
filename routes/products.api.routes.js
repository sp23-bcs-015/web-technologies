const express = require("express");
const router = express.Router();
const api = require("../controllers/products.api.controller");

router.get("/", api.getAll);
router.post("/", api.create);
router.put("/:id", api.update);
router.delete("/:id", api.remove);

module.exports = router;
