import HeaderInSectionColors from '@/Pages/HeaderInSectionColors'
import styles from './page.module.css'
import AllGoods from '@/components/AllGoods/AllGoods'
import Categories from '@/components/Categories/Categories'

export default function Home() {
	return (
		<main className={styles.main}>
			<HeaderInSectionColors />
			<AllGoods />
			<Categories />
		</main>
	)
}
