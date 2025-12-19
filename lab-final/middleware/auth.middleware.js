// middleware/auth.middleware.js

// 1️⃣ Check if cart is not empty
function checkCartNotEmpty(req, res, next) {
  const { items } = req.body;

  if (!items || (Array.isArray(items) && items.length === 0)) {
    return res.status(400).send("Your cart is empty. Cannot proceed to checkout.");
  }

  next();
}

// 2️⃣ Admin-only access
function adminOnly(req, res, next) {
  const body = req.body || {};
  const email = body.email || req.query.email || req.headers["x-user-email"];

  if (req.method === "GET" && !email) {
    return next();
  }

  if (email !== "admin@shop.com") {
    return res.status(403).send("Access denied. Admins only.");
  }

  next();
}

module.exports = { checkCartNotEmpty, adminOnly };
