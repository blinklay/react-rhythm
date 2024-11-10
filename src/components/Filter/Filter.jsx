import { useState } from "react";
import styled from "./Filter.module.css";
import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "electric", label: "Electric" },
  { value: "basses", label: "Basses" },
  { value: "acoustic", label: "Acoustic" },
];

const colorStyles = {
  control: (styles) => ({
    ...styles,
    borderColor: "#ff6428",
  }),
};

export default function Filter({ onChange }) {
  return (
    <div className={styled.filter}>
      <label className={styled.label}>
        filter by
        <Select
          styles={colorStyles}
          options={options}
          onChange={(e) => onChange(e.value)}
        />
      </label>
    </div>
  );
}
