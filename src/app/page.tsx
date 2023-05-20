import Image from 'next/image'
import styles from './page.module.css'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Cards titre={"Bonjour Alice"}/>
      </div>
    </main>
  )
}
