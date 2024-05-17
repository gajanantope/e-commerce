import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./component/navbar";
import Card from "./component/Card/Card";
import Filter from "./component/Filter/Filter";
import ProductList from "./component/productList/ProductList";
import Footer from "./component/footer/Footer";
import { items } from "./component/data/data";
import Cart from "./component/cart/Cart";
import ImageSlider from "./component/slideshow/slideShow";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const [data, setData] = useState([]);

  const searchTerm = useSelector((state) => state.search.value);

  useEffect(() => {
    const filteredData = items.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setData(filteredData);
  }, [searchTerm]);

  return (
    <>
      <ImageSlider />
      <Filter setData={setData} />
      <div className=" flex-col ">
        <ProductList data={data} />
      </div>
    </>
  );
}

export default App;
