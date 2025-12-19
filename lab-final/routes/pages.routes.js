const express = require("express");
const router = express.Router();
const pages = require("../controllers/pages.controller");

router.get("/", pages.home);
router.get("/products", pages.products);
router.get("/cart", pages.cart);

router.get("/admin", pages.adminProducts);
router.get("/checkout", (req, res) => {
  res.render("pages/checkout", { title: "Checkout" });
});


module.exports = router;
