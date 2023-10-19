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
];

export default function Partners() {
  return (
    <div className={styles.partners}>
      {/* {new Array(30).fill("test").map((word, index) => (
        <span key={index}>
          <p className="text-white">{word}</p>
        </span>
      ))} */}
      {partners.map((partner, index) => {
        <span key={index}>
          <Image src={`/brands/${partner}.svg`} alt={partner} />
        </span>;
      })}
    </div>
  );
}
