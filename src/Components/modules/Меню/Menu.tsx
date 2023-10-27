import React, { useState, useEffect } from 'react'
import s from './Menu.module.css'
import MenuArrow from '../../../assets/Menu arrow.svg'
import { NavLink } from 'react-router-dom'

interface MenuProps {
	NavOrNew: boolean
	BurgerisOpen: boolean
	setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setCategory: React.Dispatch<React.SetStateAction<string>>
	setUnderCategory: React.Dispatch<React.SetStateAction<string>>
}

const Menu: React.FC<MenuProps> = ({
	BurgerisOpen,
	setBurgerIsOpen,
	setCategory,
	NavOrNew,
	setUnderCategory,
}) => {
	const toggleMenu = () => {
		setBurgerIsOpen(!BurgerisOpen)
	}
	const [hover, setHover] = useState({
		submenuCarier: false,
		submenuBloks: false,
		buildingMaterials: false,
		rituals: false,
		tools: false,
		machine: false,
		specialTecknik: false,
		work: false,
		serveces: false,
	})
	function FnSetHover(name: string, value: boolean) {
		setHover({
			...hover,
			specialTecknik: false,
			submenuCarier: false,
			buildingMaterials: false,
			submenuBloks: false,
			rituals: false,
			tools: false,
			machine: false,
			work: false,
			serveces: false,
			[name]: value,
		})
	}

	const [submenu, setSubmenu] = useState({
		submenuCarier: false,
		submenuBloks: false,
		buildingMaterials: false,
		rituals: false,
		tools: false,
		machine: false,
		specialTecknik: false,
		work: false,
		serveces: false,
	})
	function FnSetSub(name: string, value: boolean) {
		setSubmenu({
			...submenu,
			specialTecknik: false,
			submenuCarier: false,
			buildingMaterials: false,
			submenuBloks: false,
			rituals: false,
			tools: false,
			machine: false,
			work: false,
			serveces: false,
			[name]: value,
		})
	}
	useEffect(() => {
		FnSetSub('', false)
	}, [BurgerisOpen])

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={BurgerisOpen ? s.menuWrapperActive : s.menuWrapper}
		>
			<div className={s.MainDiv}>
				<div className='1'>
					<ul className={s.menu}>
						<li>
							<div
								onClick={() =>
									FnSetSub(
										'submenuCarier',
										!submenu.submenuCarier
									)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Карьер</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.submenuCarier
										? s.submenuActive
										: s.submenu
								}
							>
								<div className={s.MenuOnceDiv}>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('нет'),
													setCategory('Карьер')
											}}
										>
											Карьер
										</li>
									</NavLink>

									{/* <NavLink
										className={s.Link}
										to={NavOrNew?'/new-card/':'/catalog/'}
									></NavLink> */}
									<img src={MenuArrow} alt='' />
								</div>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub(
										'submenuBloks',
										!submenu.submenuBloks
									)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Блоки</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.submenuBloks
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover(
											'submenuBloks',
											!hover.submenuBloks
										)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Блоки</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<div>
									<ul
										className={
											hover.submenuBloks
												? s.InnerLiVisible
												: s.InnerLiHidden
										}
									>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Гранит'),
														setCategory('Блоки')
												}}
											>
												Гранит
											</li>
										</NavLink>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Мрамор'),
														setCategory('Блоки')
												}}
											>
												Мрамор
											</li>
										</NavLink>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory(
														'Покупают'
													),
														setCategory('Блоки')
												}}
											>
												Покупают
											</li>
										</NavLink>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Продают'),
														setCategory('Блоки')
												}}
											>
												Продают
											</li>
										</NavLink>
									</ul>
								</div>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub(
										'buildingMaterials',
										!submenu.buildingMaterials
									)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Строй материалы</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.buildingMaterials
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover(
											'buildingMaterials',
											!hover.buildingMaterials
										)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Строй материалы</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.buildingMaterials
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Гранит'),
													setCategory(
														'Строй материалы'
													)
											}}
										>
											Гранит
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Мрамор'),
													setCategory(
														'Строй материалы'
													)
											}}
										>
											Мрамор
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Покупают'),
													setCategory(
														'Строй материалы'
													)
											}}
										>
											Покупают
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Продают'),
													setCategory(
														'Строй материалы'
													)
											}}
										>
											Продают
										</li>
									</NavLink>
								</ul>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub('rituals', !submenu.rituals)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Ритуальные изделия</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.rituals
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover('rituals', !hover.rituals)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Ритуальные изделия</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.rituals
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Прямоугольные'
												),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Прямоугольные
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Фигурные'),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Фигурные
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Эксклюзивные'
												),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Эксклюзивные
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Цоколя'),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Цоколя
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Плиты'),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Плиты
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Гранит'),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Гранит
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Мрамор'),
													setCategory(
														'Ритуальные изделия'
													)
											}}
										>
											Мрамор
										</li>
									</NavLink>
								</ul>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub('machine', !submenu.machine)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Станки</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.machine
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover('machine', !hover.machine)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Станки</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.machine
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Для карьера'),
													setCategory('Станки')
											}}
										>
											Для карьера
										</li>
									</NavLink>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Для производства'
												),
													setCategory('Станки')
											}}
										>
											Для производства
										</li>
									</NavLink>
								</ul>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub('tools', !submenu.tools)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Инструменты</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.tools ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover('tools', !hover.tools)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Инструменты</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<div>
									<ul
										className={
											hover.tools
												? s.InnerLiVisible
												: s.InnerLiHidden
										}
									>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Диски'),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Диски
											</li>
										</NavLink>

										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory(
														'Сегменты'
													),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Сегменты
											</li>
										</NavLink>

										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Канат'),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Канат
											</li>
										</NavLink>

										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory(
														'Шлифовальный инструмент'
													),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Шлифовальный инструмент
											</li>
										</NavLink>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Фрезы'),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Фрезы
											</li>
										</NavLink>

										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory('Химия'),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Химия
											</li>
										</NavLink>
										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory(
														'Электро, Пневмоинструмент'
													),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Электро, Пневмоинструмент
											</li>
										</NavLink>

										<NavLink
											className={s.Link}
											to={
												NavOrNew
													? '/new-card/'
													: '/catalog/'
											}
										>
											<li
												onClick={() => {
													setUnderCategory(
														'Твердосплавный инструмент'
													),
														setCategory(
															'Инструменты'
														)
												}}
											>
												Твердосплавный инструмент
											</li>
										</NavLink>
									</ul>
								</div>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub(
										'specialTecknik',
										!submenu.specialTecknik
									)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Спец техника</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.specialTecknik
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover(
											'specialTecknik',
											!hover.specialTecknik
										)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Спец техника</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.specialTecknik
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Новая техника'
												),
													setCategory('Спец техника')
											}}
										>
											Новая техника
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Б/У техника'),
													setCategory('Спец техника')
											}}
										>
											Б/У техника
										</li>{' '}
									</NavLink>
								</ul>
							</ul>
						</li>
						<li>
							<div
								onClick={() => FnSetSub('work', !submenu.work)}
								className={s.MenuOnceDiv}
							>
								<h2>Работа</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.work ? s.submenuActive : s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover('work', !hover.work)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Работа</li>
									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.work
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew ? '/summary/' : '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Ищу работу'),
													setCategory('Работа')
											}}
										>
											Ищу работу
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Ищу сотрудника'
												),
													setCategory('Работа')
											}}
										>
											Ищу сотрудника
										</li>
									</NavLink>
								</ul>
							</ul>
						</li>
						<li>
							<div
								onClick={() =>
									FnSetSub('serveces', !submenu.serveces)
								}
								className={s.MenuOnceDiv}
							>
								<h2>Услуги</h2>
								<img src={MenuArrow} alt='' />
							</div>
							<ul
								className={
									submenu.serveces
										? s.submenuActive
										: s.submenu
								}
							>
								<div
									onClick={() =>
										FnSetHover('serveces', !hover.serveces)
									}
									className={s.MenuOnceDiv3}
								>
									<li>Услуги</li>

									<img
										className={s.MenuInnerImgRotate}
										src={MenuArrow}
										alt=''
									/>
								</div>
								<ul
									className={
										hover.serveces
											? s.InnerLiVisible
											: s.InnerLiHidden
									}
								>
									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Ремонт'),
													setCategory('Услуги')
											}}
										>
											Ремонт
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Резка камня'),
													setCategory('Услуги')
											}}
										>
											Резка камня
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Полировка'),
													setCategory('Услуги')
											}}
										>
											Полировка
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory(
													'Напайка сегментов'
												),
													setCategory('Услуги')
											}}
										>
											Напайка сегментов
										</li>
									</NavLink>

									<NavLink
										className={s.Link}
										to={
											NavOrNew
												? '/new-card/'
												: '/catalog/'
										}
									>
										<li
											onClick={() => {
												setUnderCategory('Перевозка'),
													setCategory('Услуги')
											}}
										>
											Перевозка
										</li>
									</NavLink>
								</ul>
							</ul>
						</li>
					</ul>
				</div>
				<div className={s.line}></div>
			</div>
			<button onClick={toggleMenu}>
				{BurgerisOpen ? 'Закрыть меню' : 'Открыть меню'}
			</button>
		</div>
	)
}

export default Menu
