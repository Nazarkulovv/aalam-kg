import Image from 'next/image'
import img2 from '../../assets/ded.png'
import img1 from '../../assets/productMan.png'
import img3 from '../../assets/women.png'
import './Categories.css'

export default function Categories() {
	return (
		<div>
			<section id='categories'>
				<div className='containerNew'>
					<div className='categorie'>
						<div className='categories-text'>
							<h1>Категории</h1>
						</div>
						<div className='categories-product'>
							<div className='product-cat'>
								<Image src={img1} alt='' />
								<div className='cat-block'>
									<h4>Мужская одежда</h4>
									<h5>
										<span className='cat-blcokH5'>Футболки</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Спортивки</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Брюки</span>
									</h5>
								</div>
							</div>
							<div className='product-cat'>
								<Image src={img3} alt='' />
								<div className='cat-block'>
									<h4>Женская одежда</h4>
									<h5>
										<span className='cat-blcokH5'>Плятья</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Двойки</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Юбки</span>
									</h5>
								</div>
							</div>
							<div className='product-cat'>
								<Image src={img2} alt='' />
								<div className='cat-block'>
									<h4>Детская одежда</h4>
									<h5>
										<span className='cat-blcokH5'>Кепки</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Сарафаны</span> <span className='dot'>.</span>{' '}
										<span className='cat-blcokH5'>Футболки</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
