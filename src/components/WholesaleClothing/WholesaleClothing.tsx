'use client'
import { useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import styled from 'styled-components'
import './WholesaleClothing.css'
const StyledBiPhoneCall = styled(BiPhoneCall)`
	transition: color 0.3s, background 0.3s;
	&:hover {
		color: #ff5555;
		background: white;
	}
`

const StyledFaTelegramPlane = styled(FaTelegramPlane)`
	transition: color 0.3s, background 0.3s;
	&:hover {
		color: #30a0de;
		background: white;
	}
`

const StyledIoLogoWhatsapp = styled(IoLogoWhatsapp)`
	transition: color 0.3s, background 0.3s;
	&:hover {
		color: #13ca36;
		background: white;
	}
`

export default function WholesaleClothing() {
	const [hoverCall, setHoverCall] = useState<boolean>(false)
	const [hoverTel, setHoverTel] = useState<boolean>(false)
	const [hoverWhat, setHoverWhat] = useState<boolean>(false)

	return (
		<section id='wholesaleClothing'>
			<div
				className='css-ryzr8s'
				style={{
					filter: 'blur(200px)'
				}}
			></div>
			<div
				className='css-1x96uq0'
				style={{
					filter: 'blur(150px)'
				}}
			></div>

			<div className='containerNew'>
				<div className='wholesaleClothing'>
					<div className='wholesaaleClonthingTextInImages'>
						<div className='wholesaleClothingText'>
							<h4>
								Оптом <span>одежда </span> <br />
								из Кыргызстана
							</h4>
							<p>
								От производителя, без посредников. <br />
								Найдите лучшие товары вместе с нами!
							</p>
							<div className='whowholesaleClothingBlock'>
								<div className='whowholesaleClothingBlockTexts'>
									<h4>Выгодно </h4>
									<h4>Надёжно </h4>
									<h4>Удобно</h4>
								</div>
								<button>Каталог</button>
							</div>
						</div>
						<div className='whoImagesPis'>
							<div className='wholesaleClothingImages'>
								<div
									onMouseEnter={() => setHoverCall(true)}
									onMouseLeave={() => setHoverCall(false)}
								>
									{hoverCall && <h4>Позвонить</h4>}
									<StyledBiPhoneCall />
								</div>
								<div
									onMouseEnter={() => setHoverTel(true)}
									onMouseLeave={() => setHoverTel(false)}
								>
									{hoverTel && <h4>Telegram</h4>}
									<StyledFaTelegramPlane />
								</div>
								<div
									onMouseEnter={() => setHoverWhat(true)}
									onMouseLeave={() => setHoverWhat(false)}
								>
									{hoverWhat && <h4>WhatsApp</h4>}
									<StyledIoLogoWhatsapp />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
