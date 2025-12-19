const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { customerName, email, items, totalAmount } = req.body;

    const parsedItems = typeof items === "string" ? JSON.parse(items) : items;

    const order = await Order.create({
      customerName,
      email,
      items: parsedItems,
      totalAmount
    });

    // Redirect to order confirmation
    res.redirect(`/order-confirmation/${order._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to place order");
  }
};

exports.confirmationPage = async (req, res) => {
  res.render("pages/order-confirmation", {
    title: "Order Confirmed",
    orderId: req.params.id
  });
};
