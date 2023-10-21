import s from './defence.module.css'
const defence = () => {
  return (
    <div className={s.pageContainer}>
        <h1 className={s.mainTitle}>Защита профиля</h1>
        <div className={s.passwordBox}>
            <h2 className={s.secondTitle}>Смена пароля</h2>
            <input className={s.input} type="password" placeholder='Старый пароль'/>
            <input className={s.input} type="password" placeholder='Новый пароль'/>
            <button className={s.btn}>Сохранить</button>
        </div>
    </div>
  )
}

export default defence