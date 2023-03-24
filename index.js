const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const Product = require("./Product");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

db();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
app.post("/product", async (req, res) => {
  const { productName, productPrice, stockAvailable, shouldWeigh } = req.body;
  const product = await Product.create({
    productName,
    productPrice,
    stockAvailable,
    shouldWeigh,
  });

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400).json({ message: "Product not created" });
  }
});
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, stockAvailable, shouldWeigh } = req.body;

  //code to update the product using product id
  const product = await Product.findByIdAndUpdate(id, {
    productName,
    productPrice,
    stockAvailable,
    shouldWeigh,
  });
  if (product) {
    res.status(200).json({
      message: "Product updated successfully",
      product: {
        productName,
        productPrice,
        stockAvailable,
        shouldWeigh,
      },
    });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
