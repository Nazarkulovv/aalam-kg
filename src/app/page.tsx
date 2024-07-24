import AllGoods from '@/components/AllGoods/AllGoods'
import Categories from '@/components/Categories/Categories'
import FreeFulfillment from '@/components/FreeFulfillment/FreeFulfillment'
import HeaderInSectionColors from '@/Pages/HeaderInSectionColors'
import styles from './page.module.css'
import About from '@/components/About/About'
import Qcestion from '@/components/Qcestion/Qcestion'
import Footer from '@/components/Footer/Footer'

export default function Home() {
	return (
		<main className={styles.main}>
			<HeaderInSectionColors />
			<AllGoods />
			<Categories />
			<FreeFulfillment />
			<About />
			<Qcestion />
			<Footer/>
		</main>
	)
}
