const express = require("express");
const router = express.Router();
const pages = require("../controllers/pages.controller");

router.get("/", pages.home);
router.get("/products", pages.products);

// ADMIN PANEL = ADMIN PRODUCTS
router.get("/admin", pages.adminProducts);

module.exports = router;
