// MainContent.jsx
import styles from './MainContent.module.css';

export default function MainContent({ columns }) {
  return (
    <main className={styles.main}>
      {columns.map(col => (
        <div key={col.id} className={styles.column}>
          <h2 className={styles.columnTitle}>
            {col.title} ({col.tasks.length})
          </h2>
          {col.tasks.map((task, i) => (
            <div key={i} className={styles.task}>
              {task}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}