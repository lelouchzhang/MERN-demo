import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  // set all products
  setProducts: (products) => set({ products }),
  // add a new product
  createProduct: async (newP) => {
    if (!newP.name || !newP.price || !newP.image) {
      return { success: false, message: "Please fill all the fields" };
    }
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newP),
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({ products: [...state.products, data.newProduct] }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.products });
  },
  updateProduct: async (id, updateP) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateP),
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? data.product : product
      ),
    }));
    return { success: true, message: "Product updated successfully" };
  },

  deleteProduct: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));
    return { success: true, message: "Product deleted successfully" };
  },
}));
