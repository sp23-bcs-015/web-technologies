const Product = require("../models/Product");

exports.getAll = async (req, res) => {
  const products = await Product.find().lean();
  res.json({ ok: true, data: products });
};

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ ok: true, data: product });
};

exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ ok: true });
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
