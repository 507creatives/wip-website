import Image from "next/image";
import styles from "./partners.module.scss";

const partners = [
  "adidas",
  "armani",
  "biotherm",
  "bourjois",
  "danone",
  "eucerin",
  "fanta",
  "garnier",
  "kinogram",
  "loreal",
  "matrix",
  "maxfactor",
  "maybelline",
  "misssporty",
  "nyx",
  "pudliszki",
  "rexona",
  "rimmel",
  "sally-hansen",
  "vichy",
  "adidas",
  "armani",
  "biotherm",
  "bourjois",
  "danone",
  "eucerin",
  "fanta",
  "garnier",
  "kinogram",
  "loreal",
  "matrix",
  "maxfactor",
  "maybelline",
  "misssporty",
  "nyx",
  "pudliszki",
  "rexona",
  "rimmel",
  "sally-hansen",
  "vichy",
  "adidas",
  "armani",
  "biotherm",
  "bourjois",
  "danone",
  "eucerin",
  "fanta",
  "garnier",
  "kinogram",
  "loreal",
  "matrix",
  "maxfactor",
  "maybelline",
  "misssporty",
  "nyx",
  "pudliszki",
  "rexona",
  "rimmel",
  "sally-hansen",
  "vichy",
];

export default function Partners() {
  return (
    <section className="pt-[70px] pb-[30px]">
      <h3 className={styles.heading}>Our partners:</h3>
      <div className={styles.partners}>
        {partners.map((partner, index) => (
          <span key={index}>
            {partner === "fanta" || partner === "eucerin" ? (
              <img
                className={styles.small}
                src={`/brands/${partner}.svg`}
                alt={partner}
              />
            ) : (
              <img src={`/brands/${partner}.svg`} alt={partner} />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
