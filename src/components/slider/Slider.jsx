import React, { useCallback, useEffect, useState, useRef } from "react";
import "./multiRangeSlider.css";

const Slider = ({ min, max, onChange, view }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left w-[70%] md:w-[200px] lg:w-[290px] xl:w-[350px]"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right w-[70%] md:w-[200px] lg:w-[290px] xl:w-[350px]"
      />

      <div className="slider w-[70%] md:w-[200px] lg:w-[290px] xl:w-[350px]">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">
          {minVal.toLocaleString("en-US", {
            style: "currency",
            currency: "IRT",
          })}
        </div>
        <div className="slider__right-value">
          {maxVal.toLocaleString("en-US", {
            style: "currency",
            currency: "IRT",
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
