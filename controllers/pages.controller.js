const Product = require("../models/Product");

exports.home = (req, res) => {
  res.render("pages/home", { title: "BeCLUB" });
};

exports.products = async (req, res) => {
  const products = await Product.find().lean();
  res.render("pages/products", {
    title: "Products",
    products
  });
};

// ADMIN PANEL → DIRECTLY ADMIN PRODUCTS
exports.adminProducts = (req, res) => {
  res.render("pages/admin-products", {
    title: "Admin Products"
  });
};
