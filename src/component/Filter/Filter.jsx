import React, { useState, useEffect } from "react";
import Range from "../Range/Range"; // Assuming this is a component for selecting a price range
import { items } from "../data/data"; // Your product data
import { SlidersHorizontal } from "lucide-react";

export default function Filter({ setData }) {
  const [showFilter, setShowFilter] = useState(false);

  // State variables to hold data
  const [filteredProducts, setFilteredProducts] = useState(items); // Initially, all products
  const [selectedCategories, setSelectedCategories] = useState([]); // Initially, no selected categories
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Initially, a price range from 0 to 1000

  // Function to handle changes in category selection
  const handleCategoryChange = (e) => {
    const brand = e.target.value; // Get the brand from the checkbox
    const isChecked = e.target.checked; // Check if the checkbox is checked or unchecked
    setSelectedCategories((prevSelectedCategories) => {
      // Update selected categories based on the checkbox change
      if (isChecked) {
        // If the checkbox is checked, add the brand to selected categories
        return [...prevSelectedCategories, brand];
      } else {
        // If the checkbox is unchecked, remove the brand from selected categories
        return prevSelectedCategories.filter((category) => category !== brand);
      }
    });
  };

  // Function to handle changes in price range selection
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max }); // Update the price range state with the new min and max values
  };

  // Effect to filter products based on selected categories and price range
  useEffect(() => {
    const filteredByCategory = items.filter(
      (product) =>
        selectedCategories.length === 0
          ? true // If no categories selected, return all products
          : selectedCategories.includes(product.category) // Otherwise, filter by selected categories
    );
    const filteredByPrice = filteredByCategory.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    ); // Filter by price range
    setFilteredProducts(filteredByPrice); // Update the filtered products state
  }, [selectedCategories, priceRange]); // Run this effect whenever selected categories or price range changes

  // Effect to update data with filtered products
  useEffect(() => {
    setData(filteredProducts); // Update the data with filtered products
  }, [filteredProducts, setData]); // Run this effect whenever filtered products or setData function changes

  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div
        className=" m-4 bg-slate-200 p-2 w-fit rounded-full sm:hidden border-2 border-black border-opacity-25"
        onClick={toggleFilterVisibility}
      >
        <SlidersHorizontal />
      </div>
      <div
        className={`bg-white border-gray-800 m-6 shadow-md shadow-black rounded-md w-64 font-medium absolute ${
          showFilter ? "block" : "hidden"
        } sm:block`}
      >
        <p className="p-2 text-lg">Filter</p>
        <div className="flex flex-col p-3">
          <label className="font-medium text-md" htmlFor="Price">
            Price
          </label>
          {/* Range component for selecting the price range */}
          <Range id="price" add={handlePriceRangeChange} />
        </div>

        <div className="p-3">
          <label className="font-medium text-md" htmlFor="brand">
            Brand
          </label>
          <div className="flex flex-col p-3">
            {/* Checkboxes for selecting brands */}
            {["laptops", "mobiles", "tablets"].map((brand) => (
              <label key={brand}>
                <input
                  className="accent-blue-500"
                  type="checkbox"
                  value={brand}
                  checked={selectedCategories.includes(brand)} // Check if the brand is selected
                  onChange={handleCategoryChange} // Handle changes in brand selection
                />
                {/* Display the brand name */}
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
