import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section data-testid="home-hero" className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1>Best food for your taste</h1>
          <h6>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </h6>

          <div>
            <button className={styles.redBtn}>Book A Table</button>
            <button className={styles.transparentBtn}>Explore Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}
