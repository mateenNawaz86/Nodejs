const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

// Route for return a get add product form page
router.get("/add-product", adminController.getAddProduct);

// Route for getting the admin products
router.get("/admin/product", adminController.getProducts);

// Route for posting a new product to existing list
router.post("/product", adminController.postAddProduct);

// exports all routes
module.exports = router;
