import styles from "./page.module.css";
import course from './course.json'

export default function Home() {
  return (
    <main className={styles.main}>
     <ul>
     {course.lessons.map((item) => <li key={item.name}>
        <h2>{item.title}</h2>
      </li>)}
     </ul>
    </main>
  );
}
