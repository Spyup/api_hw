require("dotenv").config();
const express = require("express");
const app = express();
const SupplierRouter = require("./Supplier/supplier.router");
const FlowerRouter = require("./FlowerSeedling/flowers.router");
const CustomerRouter = require("./Customer/customer.router");
const PurchaseRouter = require("./Purchase/purchase.router");
const HouseHoldRouter = require("./Household/household.router");

app.use(express.json());

//api router
app.use("/api/supplier", SupplierRouter);
app.use("/api/flower", FlowerRouter);
app.use("/api/customer", CustomerRouter);
app.use("/api/purchase", PurchaseRouter);
app.use("/api/household", HouseHoldRouter);

// set port, listen for requests
app.listen(process.env.Server_PORT, () => {
    console.log("Server is running on port", process.env.Server_PORT);
});


