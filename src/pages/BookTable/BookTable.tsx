import "leaflet/dist/leaflet.css";
import React from "react";
import { useTranslation } from "react-i18next";
import MapComponent from "../../components/MapComponent/MapComponent";
import SingleSelect from "../../components/SingleSelect/SingleSelect";
import { transformNumericals } from "../../utils/transformNumericals";
import styles from "./BookTable.module.scss";

export default function BookTable() {
  const [selectedValue, setSelectedValue] = React.useState<any>();
  const { t, i18n } = useTranslation();

  console.log(t);

  const numberOfPeople = React.useMemo(
    () =>
      [2, 4, 8, 10, 12].map((item) => ({
        value: transformNumericals(item),
        label: transformNumericals(item),
      })),
    [i18n.language]
  );

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <h1>{t("aboutPage.heading")}</h1>
        <p>{t("aboutPage.description")} </p>

        <form className={styles.form}>
          <div className={styles.rowInputs}>
            <label htmlFor="date" className={styles.input}>
              <p className={styles.inputLabel}>
                {t("aboutPage.inputs.date.name")}
              </p>
              <input name="date" className={styles.inputAria} type="date" />
            </label>
            <label htmlFor="time" className={styles.input}>
              <p className={styles.inputLabel}>
                {t("aboutPage.inputs.time.name")}
              </p>
              <input name="time" className={styles.inputAria} type="time" />
            </label>
          </div>
          <div className={styles.rowInputs}>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>
                {t("aboutPage.inputs.name.name")}
              </p>
              <input
                name="name"
                className={styles.inputAria}
                type="text"
                placeholder={t("aboutPage.inputs.name.placeholder")}
              />
            </label>
            <label htmlFor="phone" className={styles.input}>
              <p className={styles.inputLabel}>
                {t("aboutPage.inputs.phone.name")}
              </p>
              <input
                name="phone"
                className={styles.inputAria}
                type="number"
                placeholder={t("aboutPage.inputs.phone.placeholder")}
              />
            </label>
          </div>

          <label htmlFor="numberOfPeople">
            <p className={styles.inputLabel}>
              {t("aboutPage.inputs.numberOfPeople.name")}
            </p>
            <SingleSelect
              options={numberOfPeople}
              value={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </label>

          <button>Book A Table</button>
        </form>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
}
