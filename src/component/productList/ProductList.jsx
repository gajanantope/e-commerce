import React from "react";
import Card from "../Card/Card";
import { items } from "../data/data";

export default function ProductList({ data, handleAddCart }) {
  return (
    <>
      {" "}
      {data.map((item) => (
        <Card items={item} key={item.id} handleAddCart={handleAddCart} />
      ))}
    </>
  );
}
