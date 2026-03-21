import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields will be automatically added
  }
);

// mongoose will automatically look for the plural, lowercased version of the model name in the database. In this case, it will look for a collection named "products".
const Product = mongoose.model("Product", productSchema);

export default Product;
