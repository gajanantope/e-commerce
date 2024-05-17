import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { GiH2O } from "react-icons/gi";
import { items } from "../data/data";

export default function Range({ add }) {
  const [filterProduct, setFilterProduct] = useState([items]);
  const num = [
    10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
  ];
  const [filterItem, setFilterItem] = useState([]);
  const [minPriceOption, setMinPriceOption] = useState([]);
  const [maxPriceOption, setMaxPriceOption] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const handleInput = (e) => {
    setMin(e.minValue);
    setMax(e.maxValue);
    setMinPriceOption(num.filter((price) => price < max));
    setMaxPriceOption(num.filter((price) => price > min));
  };
  useEffect(() => {
    add(min, max);
  }, [min, max]);

  return (
    <>
      <div className="App">
        <MultiRangeSlider
          className=" border-none shadow-none accent-purple-500 cursor-pointer"
          min={0}
          max={100000}
          step={10000}
          defaultValue={100000}
          minValue={min}
          maxValue={max}
          ruler={false}
          label={false}
          barInnerColor="blue"
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <div className="flex flex-row p-1 items-center">
          <div className="flex">
            <label className="font-medium text-md" htmlFor="Min">
              Min:
            </label>
            <select
              className=" cursor-pointer"
              onChange={(e) => {
                setMin(e.target.value);
              }}
              name="Min"
              id="Min"
            >
              <option className="font-medium text-sm" value="0" defaultValue>
                Min
              </option>
              {minPriceOption.map((option) => (
                <option
                  className="font-medium text-sm"
                  value={option}
                  key={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <p className="ml-1 mr-1 text-md">to</p>
          <div className="flex">
            <label className="font-medium text-md" htmlFor="Max">
              Max:
            </label>
            <select
              className=" cursor-pointer"
              onChange={(e) => {
                setMax(e.target.value);
              }}
              name="Max"
              id="Max"
            >
              {maxPriceOption.map((option) => (
                <option
                  className="font-medium text-sm"
                  selected={option === 100000}
                  value={option}
                  key={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
