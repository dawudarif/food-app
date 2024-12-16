import { t } from "i18next";

export const transformNumericals = (num: number) => {
  let number = "";

  num
    .toString()
    .split("")
    .forEach((n) => {
      number += t(`numerals.${n}`);
    });

  return number;
};
