
import styles from "../bookmark_Banner/bookmarkBanner.module.css"

export default function BookmarkBanner() {
  return (
    <section className={styles.bannerSec}>
      <div className="container">
        <div className={styles.bannerChild}>
          <h1>Bookmarks</h1>
          <p>
            Our FAQs provide science-backed tips on everything from better sleep
            to balanced eating, helping you make informed decisions about your
            well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
