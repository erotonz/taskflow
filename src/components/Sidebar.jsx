// Sidebar.jsx
import styles from './Sidebar.module.css';

export default function Sidebar({ projects, isOpen }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <span className={styles.label}>Mes Projets</span>
      <ul className={styles.list}>
        {projects.map(p => (
            <li key={p.id} className={styles.item}>
                <span
    className={styles.dot}
    style={{ background: p.color, boxShadow: `0 0 6px ${p.color}40` }}
  />
                <span className={styles.name}>{p.name}</span>
            </li>
        ))}
      </ul>
    </aside>
  );
}