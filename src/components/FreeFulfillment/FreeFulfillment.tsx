import Image from 'next/image'
import laptopBoxImage from '../../assets/laptopBoxImage.png'
import './FreeFulfillment.css'

export default function FreeFulfillment() {
	return (
		<div className='container'>
			<div className='content'>
				<div className='content-text'>
					<h1>📦 Бесплатный фулфилмент</h1>
					<h3>
						Приобретая товар у нас, вы абсолютно <br /> бесплатно получите
						услуги фулфилмента.
					</h3>
					<p>
						Мы проверяем товар на брак, упаковываем, <br /> маркируем и
						отправляем через Карго в ваш город.
					</p>
				</div>
				<div className='graphics'>
					<Image src={laptopBoxImage} alt='Laptop and Boxes' />
				</div>
			</div>
		</div>
	)
}
