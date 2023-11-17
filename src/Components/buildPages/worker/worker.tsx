import s from './worker.module.css'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import greenMoney from '../../../assets/greenmoney.svg'
import { cardSummary, iResult } from '../../../interfaces/Interfaces'
import ShowNumberBtn from '../../ShowNumberBtn'
interface IWorkerProps {
	card_noads?: cardSummary[]
	res?: iResult
}
const worker: React.FC<IWorkerProps> = ({ card_noads, res }) => {
	const [differenceInYears, setDifferenceInYears] = useState<number[]>([])
	const [This, setThis] = useState<cardSummary | any>()
	const { id } = useParams<{ id: string }>() // Keep it as string
	const numberId = Number(id) // convert string id to numaric id

	const parsePrice = (price: string) => {
		const readyToParseString = price
			.toString()
			.split('')
			.filter((char) => char !== ' ')
			.join('')
		return readyToParseString
			.split('')
			.reverse()
			.join('')
			.match(/.{1,3}/g)
			?.reverse()
			.map((el) => el.split('').reverse().join(''))
			.join(' ')
	}

	useEffect(() => {
		const foundCard =
			card_noads?.find((card) => card.id_card === numberId) ||
			res?.card_results.find((card) => card.id_card === numberId)
		if (foundCard) {
			setThis(foundCard)
		}
	}, [card_noads, numberId])
	useEffect(() => {
		if (This?.worker) {
			This?.workExp.forEach((item: any) => {
				console.log(item.start_work_time, item.stop_work_time)
	
				const date1 = moment(item.start_work_time, 'YYYY')
				const date2 = moment(item.stop_work_time, 'YYYY')
	
				setDifferenceInYears((prevDifferenceInYears) => [
					...prevDifferenceInYears,
					date2.diff(date1, 'years'),
				])
			})
		}
	}, [This])
	console.log(This)

	useEffect(() => {
		console.log(differenceInYears)
	}, [differenceInYears])
	if (This) {
		return (
			<div className={s.sectionContainer}>
				<div className={s.firstSection}>
					<div
						className={s.userPhoto}
						style={{
							backgroundImage: `url(${This.path_file[0]})`,
						}}
					/>
					<div className={s.textContentBox}>
						<div className={s.inlineFlexBox}>
							<h1
								style={{ fontWeight: '700' }}
								className={s.mainTitle}
							>
								{This.username}
							</h1>
							<p className={`${s.secondTitle} ${s.grayText}`}>
								{This.data_birthday}
							</p>
						</div>
						<div className={s.inlineFlexBox}>
							<h2 className={s.mainTitle}>Професиия</h2>
							<h2 className={s.secondTitle}>{This.caption}</h2>
							<p className={`${s.secondTitle} ${s.grayText}`}>
								Стаж ({This.years_exp})
							</p>
						</div>
						<div className={s.inlineFlexBox}>
							<h2 className={s.mainTitle}>Статус поиска</h2>
							<h2 className={s.secondTitle}>
								{This.status_search}
							</h2>
							<p className={`${s.secondTitle} ${s.grayText}`}></p>
							{This.job_next_day === 'true' ? (
								<div className={s.greenBox}>
									<p className={s.greenText}>
										Может выйти завтра
									</p>
								</div>
							) : (
								<div className={s.whiteBox}>
									<p className={s.blackText}>
										Не готов выйти завтра
									</p>
								</div>
							)}
						</div>
						{This.city && (
							<div className={s.inlineFlexBox}>
								<h2 className={s.mainTitle}>Город</h2>
								<h2 className={s.secondTitle}>{This.city}</h2>
							</div>
						)}
						<h2 className={s.mainTitle}>О себе</h2>
						<p className={`${s.secondTitle} ${s.descriptionMob}`}>
							{This.about_me}
						</p>
						<ShowNumberBtn phone={This.phone} btnClass={s.btn} />
					</div>
				</div>
				<div className={`${s.ml} ${s.secondSection}`}>
					<div className={`${s.inlineFlexBox} ${s.inlineFlexBox2}`}>
						<div className={s.travelWork}>
							<h2 className={s.mainTitle}>
								Готовность к командировкам
							</h2>
							<div className={s.greenBox2}>
								<p className={s.greenText2}>
									{This.ready_togouthome}
								</p>
							</div>
						</div>
						<div className={s.notHome}>
							<h2 className={s.mainTitle}>Переезд</h2>
							<div
								className={`${s.btn} ${s.greenBox2} ${s.colorPurple}`}
							>
								<p
									style={{ color: '#000' }}
									className={s.greenText2}
								>
									{This.togouthome}
								</p>
							</div>
						</div>
						<div className={s.rezidence}>
							<h2 className={s.mainTitle}>Гражданство</h2>
							<div
								style={{ backgroundColor: '#5250C5' }}
								className={`${s.btn} ${s.greenBox2}`}
							>
								<p
									style={{ color: '#fff' }}
									className={s.greenText2}
								>
									{This.contry_people}
								</p>
							</div>
						</div>
					</div>
				</div>
				{This.workExp && <div className={s.ml}>
					<h2 className={`${s.blockTitle} ${s.mainTitle}`}>
						Опыт работы ({This.years_exp})
					</h2>
					{This.workExp &&
						This.workExp.map((item: any, index: number) => {
							return (
								<div
									className={`${s.thirdSection} ${s.colorPurple}`}
								>
									<div className={s.firstLine}>
										<div className={s.inlineFlexBox}>
											<h2 className={s.mainTitle}>
												{item.name_company}
											</h2>
											<h2 className={s.secondTitle}>
												Должность
											</h2>
											<p
												className={`${s.secondTitle} ${s.grayText}`}
											>
												{item.why_jobs}
											</p>
										</div>
										<div className={s.workTime}>
											<h2 className={s.mainTitle}>
												Срок работы
											</h2>
											<h2
												className={s.secondTitle}
											>{`${differenceInYears[index]} года`}</h2>
										</div>
									</div>
									<div className={s.secondLine}>
										<div className={s.inlineFlexBox}>
											<h2 className={s.mainTitle}>
												Начало работы
											</h2>
											<h2 className={s.secondTitle}>
												{item.start_work_time}
											</h2>
										</div>
										<div className={s.workTime}>
											<h2 className={s.mainTitle}>
												Окончание работы
											</h2>
											<h2 className={s.secondTitle}>
												{item.stop_work_time}
											</h2>
										</div>
									</div>
									<h2 className={s.mainTitle}>О себе</h2>
									<p
										className={`${s.secondTitle} ${s.descText}`}
									>
										{item.description_jobs}
									</p>
								</div>
							)
						})}

					{This.workExp &&
						This.workExp.map((it: any, index: number) => {
							return (
								<div
									className={`${s.thirdSectionMob} ${s.colorPurple}`}
								>
									<h2
										style={{ textAlign: 'center' }}
										className={s.mainTitle}
									>
										{it.name_company}
									</h2>
									<div className={s.firstLine}>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2
												className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.spaceAround}`}
											>
												Должность
											</h2>
											<p
												className={`${s.secondTitle} ${s.weight} ${s.marginZero}`}
											>
												{it.why_jobs}
											</p>
										</div>
										<div className={s.workTime}>
											<h2
												className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}
											>
												Срок работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}
											>
												{differenceInYears[index]}
											</h2>
										</div>
									</div>
									<div className={s.secondLine}>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2 className={s.mainTitle}>
												Начало работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.marginZero}`}
											>
												{it.start_work_time}
											</h2>
										</div>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2 className={s.mainTitle}>
												Окончание работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.marginZero}`}
											>
												{it.stop_work_time}
											</h2>
										</div>
									</div>
									<h2 className={s.mainTitle}>
										Описание работы
									</h2>
									<p
										className={`${s.secondTitle} ${s.descText}`}
									>
										{it.description_jobs}
									</p>
								</div>
							)
						})}
				</div>}
				{This.educationFields && <div className={s.ml}>
					<h2 className={`${s.blockTitle} ${s.mainTitle}`}>
						Образование
					</h2>
					{This.educationFields &&
						This.educationFields.map((it: any) => {
							return (
								<div
									className={`${s.fourSection} ${s.colorPurple}`}
								>
									<div className={s.firstLine}>
										<div className={s.inlineFlexBox}>
											<h2 className={s.mainTitle}>
												{it.name_universitet}
											</h2>
											<h2 className={s.secondTitle}>
												Специальность
											</h2>
											<p
												className={`${s.secondTitle} ${s.grayText}`}
											>
												{it.universitet_why_jobs}
											</p>
										</div>
									</div>
									<div className={s.secondLine}>
										<div className={s.inlineFlexBox}>
											<h2 className={s.mainTitle}>
												Начало учёбы
											</h2>
											<h2 className={s.secondTitle}>
												{it.years_stop_univer}
											</h2>
										</div>
										<div className={s.workTime}>
											<h2 className={s.mainTitle}>
												Окончание учёбы
											</h2>
											<h2 className={s.secondTitle}>
												{it.years_stop_univer}
											</h2>
										</div>
									</div>
								</div>
							)
						})}
					{This.educationFields &&
						This.educationFields.map((it: any) => {
							return (
								<div
									className={`${s.fourSectionMob} ${s.colorPurple}`}
								>
									<h2 className={s.mainTitle}>
										{it.name_universitet}
									</h2>
									<div className={s.firstLine}>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2
												className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}
											>
												Специальность
											</h2>
											<p
												className={`${s.secondTitle} ${s.marginZero} ${s.marginRight}`}
											>
												{it.universitet_why_jobs}
											</p>
										</div>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2 className={s.mainTitle}>
												Срок работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.marginZero}`}
											>
												2 года
											</h2>
										</div>
									</div>
									<div className={s.secondLine}>
										<div
											className={`${s.inlineFlexBox} ${s.spaceAround}`}
										>
											<h2 className={s.mainTitle}>
												Начало работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.marginZero}`}
											>
												{it?.years_start_univer}
											</h2>
										</div>
										<div className={s.workTime}>
											<h2 className={s.mainTitle}>
												Окончание работы
											</h2>
											<h2
												className={`${s.secondTitle} ${s.marginZero}`}
											>
												{it.years_stop_univer}
											</h2>
										</div>
									</div>
								</div>
							)
						})}
				</div>}
				<div className={s.fiveSection}>
					{This.languageFields && <div className={s.languagesBlock}>
						<h2 className={`${s.blockTitle} ${s.mainTitle}`}>
							Знания языков
						</h2>
						{This.languageFields &&
							This.languageFields.map((la: any) => {
								return (
									<div className={s.inlineFlexBox}>
										<h2 className={s.mainTitle}>
											Название языка
										</h2>
										<h2 className={s.secondTitle}>
											{la.language}
										</h2>
										<h2 className={s.mainTitle}>
											Уровень владения
										</h2>
										<h2 className={s.secondTitle}>
											{la.level_language}
										</h2>
									</div>
								)
							})}
					</div>}

					<div className={`${s.ml} ${s.inlineFlexBox}`}>
						<h2 className={s.mainTitle}>Зарплата</h2>
						<div className={s.cashBox}>
							<h2 className={s.mainTitle}>
								{parsePrice(This.price)}
							</h2>
							<img src={greenMoney} alt='' />
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return <div>Произошла ошибка, пожалуйста, пороробуйте позже</div>
	}
}

export default worker
