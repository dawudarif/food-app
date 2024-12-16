import { t } from "i18next";

export const transformNumericals = (num: number | string) => {
  let number = "";

  let numberString = typeof num === "number" ? num.toString() : num;

  numberString.split("").forEach((n) => {
    const translation = t(`numerals.${n}`, {
      defaultValue: n,
    });
    number += translation;
  });

  return number;
};
