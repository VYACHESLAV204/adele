import React, { useState, useEffect } from 'react'
import s from './Menu.module.css'
import MenuArrow from '../../../assets/Menu arrow.svg'
import { NavLink } from 'react-router-dom'
import closeIcon from '../../../assets/closeIcon.svg'

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
		
			className={BurgerisOpen ? s.menuWrapperActive : s.menuWrapper}
		>
			<div className={s.MainDiv}>
				<div className='1'>
					<div className={s.mobileMenuTitle}>
						<p className={s.titleMenuItem}>Все категории</p>
					</div>
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
								<NavLink
									style={{ marginBottom: '0px' }}
									className={s.Link}
									onClick={() => {
										setUnderCategory('Нет'),
											setCategory('Карьер')
										setBurgerIsOpen(!BurgerisOpen)
									}}
									to={NavOrNew ? '/new-card/' : '/catalog/'}
								>
									<div
										onClick={() =>
											FnSetHover(
												'submenuCarier',
												!hover.submenuCarier
											)
										}
										className={s.MenuOnceDiv3}
									>
										<li>Карьер</li>
										<img
											className={s.MenuImg}
											src={MenuArrow}
											alt=''
										/>
									</div>
								</NavLink>
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
													setBurgerIsOpen(
														!BurgerisOpen
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
														setCategory('Блоки')
													setBurgerIsOpen(
														!BurgerisOpen
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
													setUnderCategory(
														'Покупают'
													),
														setCategory('Блоки')
													setBurgerIsOpen(
														!BurgerisOpen
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
														setCategory('Блоки')
													setBurgerIsOpen(
														!BurgerisOpen
													)
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
								<h2>Стройматериалы</h2>
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
									<li>Стройматериалы</li>
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
														'Стройматериалы'
													)
												setBurgerIsOpen(!BurgerisOpen)
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
														'Стройматериалы'
													)
												setBurgerIsOpen(!BurgerisOpen)
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
														'Стройматериалы'
													)
												setBurgerIsOpen(!BurgerisOpen)
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
														'Стройматериалы'
													)
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setUnderCategory(
													'Памятники оптом'
												),
													setCategory(
														'Ритуальные изделия'
													)
												setBurgerIsOpen(!BurgerisOpen)
											}}
										>
											Памятники оптом
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setUnderCategory(
													'Для карьера'
												),
													setCategory('Станки')
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
											}}
										>
											Для производства
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
													''
												),
													setCategory('Инструменты')
												setBurgerIsOpen(!BurgerisOpen)
											}}
										>
											Инструменты
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
													''
												),
													setCategory('Спецтехника')
												setBurgerIsOpen(!BurgerisOpen)
											}}
										>
											Спецтехника
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
													setBurgerIsOpen(
														!BurgerisOpen
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
								<h2>Спецтехника</h2>
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
									<li>Спецтехника</li>
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
												setUnderCategory('Покупают'),
													setCategory('Спецтехника')
												setBurgerIsOpen(!BurgerisOpen)
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
													setCategory('Спецтехника')
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
												setBurgerIsOpen(!BurgerisOpen)
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
			<button
				className={s.btnProperty}
				style={{
					all: 'unset',
					position: 'relative',
					top: '-609px',
					left: '287px',
				}}
				onClick={toggleMenu}
			>
				<img className={s.closeIcon} src={closeIcon} alt='' />
			</button>
		</div>
	)
}

export default Menu
