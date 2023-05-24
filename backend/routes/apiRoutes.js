const express = require("express")
const app = express()
const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")

const jwt = require("jsonwebtoken");

app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)

module.exports = app
