import { actor } from "@/types/type";
import styles from "@/app/page.module.scss";

interface actortypes {
  index: number;
  data: actor;
}

const Card: React.FC<actortypes> = ({ data, index }) => {
  return (
    <div className={styles.card}>
    <img src={`/assets/${data.image}`} alt={data.name} className={styles.image} />
    <div className={styles.content}>
        <h2 className={styles.title}>{data.name}</h2>
        <p className={styles.description}>{data.description}</p>
        <button className={styles.button}>Read more</button>
    </div>
    </div>
  );
};

export default Card;
