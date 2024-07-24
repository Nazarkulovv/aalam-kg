import Image from 'next/image'
import img2 from '../../assets/bag.png'
import img3 from '../../assets/good.png'
import img1 from '../../assets/money.png'
import './About.css'

export default function About() {
	return (
		<div id='about'>
			<div className='containerNew'>
				<div className='about'>
					<div className='aboutBLock'>
						<div className='aboutBlokcImg'>
							<Image src={img1} alt='' />
						</div>
						<div className='aboutBLockText'>
							<h3>Доступные цены </h3>
							<p>
								Aalam опережает своих конкурентов <br /> по соотношению цены и
								качества. <br /> Вы можете найти самые популярные <br /> модели
								нового сезона и высокое <br /> качество вместе взятые.
							</p>
						</div>
					</div>
					<div className='aboutBLock'>
						<div className='aboutBlokcImg'>
							<Image src={img2} alt='' />
						</div>
						<div className='aboutBLockText'>
							<h3>Индивидуальные заказы </h3>
							<p>
								Aalam опережает своих конкурентов <br /> по соотношению цены и
								качества. <br /> Вы можете найти самые популярные <br /> модели
								нового сезона и высокое <br /> качество вместе взятые.
							</p>
						</div>
					</div>
					<div className='aboutBLock'>
						<div className='aboutBlokcImg'>
							<Image src={img3} alt='' />
						</div>
						<div className='aboutBLockText'>
							<h3>Быстрая доставка </h3>
							<p>
								Aalam опережает своих конкурентов <br /> по соотношению цены и
								качества. <br /> Вы можете найти самые популярные <br /> модели
								нового сезона и высокое <br /> качество вместе взятые.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
