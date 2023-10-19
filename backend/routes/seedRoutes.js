// import express from "express";
// import Product from "../models/productModel.js";
// import data from "../data.js";
// import User from "../models/userModel.js";

// const seedRouter = express.Router();

// seedRouter.get("/", async (req, res) => {
//   await Product.remove({});
//   const createdProducts = await Product.insertMany(data.products);
//   // await User.remove({});
//   // const createdUsers = await User.insertMany(data.users);
//   res.send({ createdProducts });
// });
// export default seedRouter;

import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    // Clear existing product data
    await Product.deleteMany({});

    // Insert new product data
    const createdProducts = await Product.insertMany(data.products);

    // Uncomment the following code if you want to seed user data
    // await User.deleteMany({});
    // const createdUsers = await User.insertMany(data.users);

    res.status(200).json({ createdProducts });
  } catch (error) {
    console.error("Error while seeding the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default seedRouter;
