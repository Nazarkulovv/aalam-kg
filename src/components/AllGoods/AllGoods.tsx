import Image from 'next/image'
import { FaBagShopping } from 'react-icons/fa6'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import arraw from '../../assets/arrow-right-goods.png'
import img1 from '../../assets/goodsBig.png'
import img2 from '../../assets/goodsSmall1.png'
import img3 from '../../assets/goodsSmall2.png'
import wee from '../../assets/imgWee.png'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import product5 from '../../assets/product5.png'

import './AllGoods.css'

export default function AllGoods() {
	const data = [
		{
			img: product1,
			name: 'Лонгсливы ',
			price: '500 сом',
			priceAll: '2 770 сом'
		},
		{
			img: product2,
			name: 'Лонгсливы ',
			price: '500 сом',
			priceAll: '2 770 сом'
		},
		{
			img: product3,
			name: 'Лонгсливы ',
			price: '500 сом',
			priceAll: '2 770 сом'
		},
		{
			img: product4,
			name: 'Лонгсливы ',
			price: '500 сом',
			priceAll: '2 770 сом'
		},
		{
			img: product5,
			name: 'Лонгсливы ',
			price: '500 сом',
			priceAll: '2 770 сом'
		}
	]

	return (
		<div>
			<section id='doods'>
				<div className='containerNew'>
					<div className='goods'>
						<div className='goodsBlocksMain'>
							<div className='goodsBigBlock'>
								<Image className='image1' src={img1} alt='img1' />
								<Image className='arrow' src={arraw} alt='' />
								<h4>Новинки</h4>
							</div>
							<div className='goodsSmallBlocks'>
								<div>
									<Image className='image11' src={img2} alt='img2' />
									<Image className='arrow' src={arraw} alt='' />
									<h4>Рекомендуемые</h4>
								</div>
								<div>
									<Image className='image11' src={img3} alt='img3' />
									<Image className='arrow' src={arraw} alt='' />
									<h4>Хит продаж</h4>
								</div>
							</div>
						</div>
						<div className='goodsProducts'>
							{data?.map((el, index) => (
								<div key={index} className='goodsProductsBlock'>
									<Image src={el.img} alt='' />
									<div className='mainIcon'>
										<FaBagShopping />
									</div>
									<div className='productBlockM'>
										<h3>{el.name}</h3>
										<h4>{el.price}</h4>
										<h5>
											Упаковка: {el.priceAll} <Image src={wee} alt='' />
										</h5>
									</div>
								</div>
							))}
						</div>
						<div className='goodsButton'>
							<button>
								Все товары <IoArrowForwardCircleOutline />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
