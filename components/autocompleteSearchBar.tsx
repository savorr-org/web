'use client';
import { useState, useEffect, useRef } from "react";
import ProductList from "./productList";
import SearchInput from "./searchInput";

type Product = {
  name: string;
};
const apiKey = process.env.SPOONACULAR_API_KEY || ''; // Replace with your actual API key

export default function AutocompleteSearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(-1);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProducts = async (query: string) => {
      try {
        console.log(apiKey)
        const apiUrl = `https://api.spoonacular.com/food/ingredients/search?number=5&query=${query}&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const productNames = data.results.map((product: Product) => ({
          name: product.name
        }));
        setSearchResults(productNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (query) {
      const timerId = setTimeout(() => fetchProducts(query), 300);
      return () => clearTimeout(timerId);
    } else {
      setSearchResults([]); // Clear the results when the query is empty
    }
  }, [query]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedProductIndex(-1);
    setSearchResults(
      products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === -1 ? searchResults.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === searchResults.length - 1 ? -1 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      if (selectedProductIndex !== -1) {
        const selectedProduct = searchResults[selectedProductIndex];
        alert(`You selected ${selectedProduct.name}`);
        setQuery("");
        setSelectedProductIndex(-1);
        setSearchResults([]);
      }
    }
  };

  const handleProductClick = (product: Product) => {
    alert(`You selected ${product.name}`);
    setQuery("");
    setSelectedProductIndex(-1);
  };

  const scrollActiveProductIntoView = (index: number) => {
    const activeProduct = document.getElementById(`product-${index}`);
    if (activeProduct) {
      activeProduct.scrollIntoView({
        block: "nearest",
        inline: "start",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (selectedProductIndex !== -1) {
      scrollActiveProductIntoView(selectedProductIndex);
    }
  }, [selectedProductIndex]);

  return (
    <div className="flex flex-col mt-20 mx-auto relative">
      <div className="flex flex-row space-x-2">
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        placeholder="Enter product..."
      />

      <button type="submit" className="bg-green fit text-white px-6 py-3 rounded-md text-lg">
        + Add
      </button>
      </div>

      {query !== "" && searchResults.length > 0 && (
        <ProductList
          products={searchResults}
          selectedProductIndex={selectedProductIndex}
          handleProductClick={handleProductClick}
        />
      )}
    </div>
  );
};