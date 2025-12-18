const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDb = require("./config/db");

const pagesRoutes = require("./routes/pages.routes");
const productsApiRoutes = require("./routes/products.api.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pagesRoutes);
app.use("/api/products", productsApiRoutes);

(async () => {
  await connectDb();
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
})();
