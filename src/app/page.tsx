import { getPosts } from "@/lib/data";
import Card from "@/components/Card";
import styles from "./page.module.scss";

export default function Home() {
  const data = getPosts();

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <Card key={item.id} data={item} index={index} />
      ))}
    </div>
  );
}