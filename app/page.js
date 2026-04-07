"use client";

import Card from "./components/card/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-cyan-50 min-h-screen w-full">
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-3xl text-black px-4 py-2 w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/details/${product.id}`}
            className="bg-gray-200 hover:bg-gray-300 w-full text-white font-bold py-2 px-4 rounded"
          >
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
