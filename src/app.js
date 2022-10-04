require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); 



const userRoute = require("./route/user");
const customerRoute = require("./route/customer");
const supplierRoute = require("./route/supplier");
const productRoute = require("./route/product");
const deliveryRoute = require("./route/delivery");
const product_deliveryRoute = require("./route/product&delivery");
const orderRoute = require("./route/order");
const cartRoute = require("./route/cart");
const logRoute = require("./route/logs");
const uploadRouter = require("./route/upload");

app.use("/api/user", userRoute);
app.use("/api/customer", customerRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/product", productRoute);
app.use("/api/delivery", deliveryRoute);
app.use("/api/product-delivery", product_deliveryRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/logs", logRoute);
app.use("/api/images", uploadRouter);

app.use('/api/images',express.static('src/img'))




module.exports = app