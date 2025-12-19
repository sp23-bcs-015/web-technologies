const express = require("express");
const router = express.Router();
const { createOrder, confirmationPage } = require("../controllers/order.controller");
const { checkCartNotEmpty, adminOnly } = require("../middleware/auth.middleware");

// Checkout form posts here
router.post("/orders", checkCartNotEmpty, createOrder);

// Order confirmation page
router.get("/order-confirmation/:id", confirmationPage);

// Admin orders page
router.get("/admin/orders", adminOnly, async (req, res) => {
  const Order = require("../models/Order");
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.render("pages/admin-orders", { title: "Admin Orders", orders });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load orders");
  }
});

// Update order status
router.post("/admin/orders/:id/status", adminOnly, async (req, res) => {
  const Order = require("../models/Order");
  const { status } = req.body;
  try {
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.redirect("/admin/orders");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to update order status");
  }
});

module.exports = router;
