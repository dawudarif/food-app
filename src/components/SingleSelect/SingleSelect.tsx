import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Select, { StylesConfig } from "react-select";

interface SingleSelectProps {
  options: { label: string; value: string }[];
  value: { label: string; value: string };
  onChange: (value: { label: string; value: string } | null) => void;
  placeholder?: string;
}

const SingleSelect = forwardRef<any, SingleSelectProps>(
  ({ options, value, onChange, placeholder }, ref) => {
    const { t } = useTranslation();

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
        borderRadius: "4.5rem",
        width: "100%",
      }),

      placeholder: (provided) => ({
        ...provided,
        color: "#4e5656",
        lineHeight: "1.5rem",
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
        padding: "0",
        margin: "auto 0",
        svg: {
          height: "1.25rem",
          width: "1.25rem",
        },
      }),

      input: (base) => ({
        ...base,
        padding: "0px",
        margin: "auto 0",
        color: "#737865",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: "400",
      }),

      singleValue: (base) => ({
        ...base,
        lineHeight: "1.5rem",
        margin: "auto 0",
      }),

      indicatorSeparator: () => ({ display: "none" }),
    };

    return (
      <Select
        ref={ref}
        options={options}
        value={value}
        placeholder={placeholder ?? t("global.select")}
        onChange={onChange}
        styles={customSelectStyles}
      />
    );
  }
);

export default SingleSelect;
