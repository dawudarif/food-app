import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.thinHeader}>
        <div className="container">
          <div className={styles.iconMain}>
            <div className={styles.icon}>
              <Phone size={20} color="white" />
              <p>(414) 857 - 0107</p>
            </div>

            <div className={styles.icon}>
              <Mail size={20} color="white" />
              <p>contact@bistrobliss.com</p>
            </div>
          </div>

          <div className={styles.iconMain}>
            <div className={styles.socialIcon}>
              <Facebook size={20} color="white" />
            </div>
            <div className={styles.socialIcon}>
              <Twitter size={20} color="white" />
            </div>
            <div className={styles.socialIcon}>
              <Instagram size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
