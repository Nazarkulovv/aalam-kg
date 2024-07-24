import Image from 'next/image'
import imgLogo from '../../assets/Header logo.png'
import what from '../../assets/what.png'
import './Footer.css'

export default function Footer() {
	return (
		<footer>
			<footer id='footer'>
				<div className='container w'>
					<div className='footer'>
						<div className='footerImgInText'>
							<Image src={imgLogo} alt='' />
							<div className='footer-text'>
								<a href=''>Все товары</a>
								<a href=''>Категории</a>
								<a href=''>О нас</a>
								<a href=''>Доставка</a>
								<a href=''>Фулфилмент</a>
								<a href=''>Контакты</a>
							</div>
						</div>
						<div className='hr' />
						<h3 className='tell'>Связаться по whatsapp </h3>
						<div className='footerEnd'>
							<h4 className='da'>© 2023 «AALAM». Все права защищены</h4>
							<button>
								Написать
								<Image src={what} alt='' />
							</button>
							<h4 className='ad'>© 2023 «AALAM». Все права защищены</h4>
							
							<h4>Разработал Motion Web LLC </h4>
						</div>
					</div>
				</div>
			</footer>
		</footer>
	)
}
