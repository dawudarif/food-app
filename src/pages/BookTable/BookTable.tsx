import styles from "./BookTable.module.scss";
import Select from "react-select";
import "leaflet/dist/leaflet.css";
import MapComponent from "../../components/MapComponent/MapComponent";
import React from "react";
import SingleSelect from "../../components/SingleSelect/SingleSelect";

export default function BookTable() {
  const [selectedValue, setSelectedValue] = React.useState<any>();
  const numberOfPeople = React.useMemo(
    () =>
      [2, 4, 8, 10, 12].map((item) => ({
        value: String(item),
        label: String(item),
      })),
    []
  );

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <h1>Book A Table</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>

        <form className={styles.form}>
          <div className={styles.rowInputs}>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>Date</p>
              <input className={styles.inputAria} type="date" />
            </label>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>Date</p>
              <input className={styles.inputAria} type="time" />
            </label>
          </div>
          <div className={styles.rowInputs}>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>Name</p>
              <input className={styles.inputAria} type="text" />
            </label>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>Phone</p>
              <input className={styles.inputAria} type="number" />
            </label>
          </div>

          <label htmlFor="numberOfPeople">
            <p className={styles.inputLabel}>Number Of People</p>
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
