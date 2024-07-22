'use client'
import { Input } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import basket from '../../assets/basket.png'
import fovorite from '../../assets/fovorite.png'
import headerLogo from '../../assets/Header logo.png'
import modalIcon from '../../assets/headerModalIcon.png'
import curs from '../../assets/KG.png'
import basketModal from '../../assets/modal basket.png'
import fovoriteModal from '../../assets/modal fovorit.png'
import hedaerModalClose from '../../assets/modalclose.png'
import headerModal from '../../assets/modalLogo.png'
import './Header.css'

interface HeaderModalProps {
	close: () => void
}
const HeaderMain: React.FC = () => {
	return (
		<>
			<div className='headerImgINText'>
				<Image src={headerLogo} alt='header icon' />
				<div className='headerText'>
					<a style={{ color: '#FF6666' }} href='#'>
						Главная
					</a>
					<a href='#'>Все товары</a>
					<a href='#'>О нас</a>
					<a href='#'>Доставка</a>
					<a href='#'>Фулфилмент</a>
				</div>
			</div>
			<div className='headerSearchInProfile'>
				<Input variant='filled' placeholder='Поиск' />
				<div className='headerIcons'>
					<Image src={basket} alt='header basket' />
					<Image src={fovorite} alt='header fovorite' />
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<Image className='img1' style={{}} src={curs} alt='header img 1' />
						<h4 className='headerTextH4' style={{}}>
							сом
						</h4>
					</div>
				</div>
			</div>
		</>
	)
}
const HeaderModal: React.FC<HeaderModalProps> = ({ close }) => {
	return (
		<div className='headerModalMain'>
			<div className='container'>
				<div className='modalContainer'>
					<div className='modalHeader'>
						<div className='hedaerModalImg'>
							<div>
								<Image
									className='hedaerModalIcon'
									src={headerModal}
									alt='Header modal '
								/>
								<Image
									style={{
										width: '25px',
										height: '25px',
										
									}}
									onClick={close}
									src={hedaerModalClose}
									alt='hedaer modal close'
								/>
							</div>
						</div>
						<div className='modalBody'>
							<Input
								className='headerModalInput'
								variant='filled'
								placeholder='Поиск'
							/>
							<div className='modalIcons'>
								<div>
									<Image src={basketModal} alt='Basket icon' />
									<h3>Корзина</h3>
								</div>
								<div>
									<Image src={fovoriteModal} alt='Favorite icon' />
									<h3>Избранные</h3>
								</div>
							</div>
						</div>
						<div className='modalNav'>
							<div className='hedaeModalA'>
								<a className='modalTop' style={{ color: '#FF6666' }} href='#'>
									Главная
								</a>
								<a href='#'>Все товары</a>
								<a href='#'>О нас</a>
								<a href='#'>Доставка</a>
								<a href='#'>Фулфилмент</a>
							</div>
							<div className='currencyContainer'>
								<Image
									className='currencyIcon'
									src={curs}
									alt='Currency symbol'
								/>
								<h4 className='currencyText'>сом</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Header: React.FC = () => {
	const [modal, setModal] = useState(false)
	const [modalNew, setModalNew] = useState(false)

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 990) {
				setModal(true)
			} else {
				setModal(false)
			}
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	function handleModal() {
		setModalNew(prev => !prev)
	}

	function toggleModal() {
		setModal(!modal)
	}

	return (
		<div>
			<header id='header'>
				<div className='container'>
					<div className='header'>
						{modal ? (
							<div className='headerModalMain'>
								<Image src={headerLogo} alt='Header logo' />
								<Image onClick={handleModal} src={modalIcon} alt='Modal icon' />
							</div>
						) : (
							<HeaderMain />
						)}
					</div>
					{modalNew && <HeaderModal close={handleModal} />}
				</div>
			</header>
		</div>
	)
}

export default Header
