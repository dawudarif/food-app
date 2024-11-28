import React, { forwardRef } from "react";
import Select, { StylesConfig } from "react-select";

interface SingleSelectProps {
  options: { label: string; value: string }[];
  value: { label: string; value: string };
  onChange: (value: { label: string; value: string } | null) => void;
}

const SingleSelect = forwardRef<any, SingleSelectProps>(
  ({ options, value, onChange }, ref) => {
    const customSelectStyles: StylesConfig<any, false> = {
      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        margin: 0,
      }),

      menu: (provided) => ({
        ...provided,
        padding: 0,
        margin: 0,
      }),

      menuList: (provided) => ({
        ...provided,
        padding: 0,
        width: "100% !important",
        display: "block !important",
      }),

      control: (provided) => ({
        ...provided,
        padding: "0.625rem 1.5rem",
        border: "0.0625rem solid #dbdfd0",
        color: "#737865",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: "400",
        borderRadius: "4.5rem",
        width: "100%",
      }),

      placeholder: (provided) => ({
        ...provided,
        color: "#4e5656",
      }),

      option: (provided, { isSelected }) => ({
        ...provided,
        paddingLeft: "1rem",
        paddingTop: "0.4rem",
        paddingBottom: "0.4rem",
        fontSize: "1.125rem",
        backgroundColor: isSelected ? "#ad343e" : "#FFFFFF",
        color: isSelected ? "#FFFFFF" : "#000000",
      }),

      dropdownIndicator: (provided) => ({
        ...provided,
        svg: {
          height: "1.25rem",
          width: "1.25rem",
        },
      }),

      indicatorSeparator: () => ({ display: "none" }),
    };

    return (
      <Select
        ref={ref}
        options={options}
        value={value}
        onChange={onChange}
        styles={customSelectStyles}
      />
    );
  }
);

export default SingleSelect;
