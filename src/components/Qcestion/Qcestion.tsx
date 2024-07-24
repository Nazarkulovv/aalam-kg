import './Qcestion.css'

export default function Qcestion() {
	return (
		<div>
			<section id='qces'>
				<div className='containerNew s'>
					<div className='qces'>
						<div className='qcesText'>
							<h3>Есть вопросы? </h3>
							<p>Оставьте ваши данные. Мы с вами свяжемся!</p>
						</div>
						<div className='quesHandle'>
							<input type='text' placeholder='ФИО' /> 
							<input type='text' placeholder='Номер*' />
							<button>Отправить </button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
