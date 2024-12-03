import "leaflet/dist/leaflet.css";
import React from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import SingleSelect from "../../components/SingleSelect/SingleSelect";
import styles from "./BookTable.module.scss";

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
            <label htmlFor="date" className={styles.input}>
              <p className={styles.inputLabel}>Date</p>
              <input
                name="date"
                className={styles.inputAria}
                placeholder="dd/mm/yy"
                type="date"
              />
            </label>
            <label htmlFor="time" className={styles.input}>
              <p className={styles.inputLabel}>Time</p>
              <input
                name="time"
                className={styles.inputAria}
                placeholder="14:00"
                type="time"
              />
            </label>
          </div>
          <div className={styles.rowInputs}>
            <label htmlFor="name" className={styles.input}>
              <p className={styles.inputLabel}>Name</p>
              <input
                name="name"
                className={styles.inputAria}
                type="text"
                placeholder="Name"
              />
            </label>
            <label htmlFor="phone" className={styles.input}>
              <p className={styles.inputLabel}>Phone</p>
              <input
                name="phone"
                className={styles.inputAria}
                type="number"
                placeholder="Phone"
              />
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
