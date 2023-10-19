// import express from "express";
// import Product from "../models/productModel.js";
// import data from "../data.js";
// import User from "../models/userModel.js";

// const seedRouter = express.Router();

// seedRouter.get("/", async (req, res) => {
//   await Product.remove({});
//   const createdProducts = await Product.insertMany(data.products);
//   await User.remove({});
//   const createdUsers = await User.insertMany(data.users);
//   res.send({ createdProducts, createdUsers });
// });
// export default seedRouter;

import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);

    res.status(200).json({ createdProducts, createdUsers });
  } catch (error) {
    console.error("Error while seeding the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default seedRouter;
