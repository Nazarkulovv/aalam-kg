import Image from 'next/image'
import imgTO from '../../assets/imgToText.webp'
import laptopBoxImage from '../../assets/laptopBoxImage.png'
import './FreeFulfillment.css'

export default function FreeFulfillment() {
	return (
		<div className='container'>
			<div className='box-bg'></div>
			<div className='content'>
				<div className='content-text'>
					<h1>
						<Image
							style={{
								marginRight: '0.5pc'
							}}
							src={imgTO}
							alt=''
						/>
						Бесплатный фулфилмент
					</h1>
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
