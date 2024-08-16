import styles from "./page.module.css";
import course from "./course.json";
import Lesson from "./lesson";

async function getAllCourses(): Promise<typeof course> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(course), 1000);
  });
}

export default async function Home() {
  const courses = await getAllCourses();
  return (
    <main className={styles.main}>
      <ul>
        {courses.lessons.map((item) => (
          <li key={item.name}>
            <Lesson title={item.title} points={item.points} />
          </li>
        ))}
      </ul>
    </main>
  );
}
