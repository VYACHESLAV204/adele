import s from './ProfilePopupMob.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import editPen from '../../../assets/editPan.svg'

const ProfilePopupMob = () => {
  return (
    <div className={s.sectionContainer}>
        <div className={s.leftWrapper}>
            <div className={s.imageBox}>
                <img className={s.imageItem} src={photo} alt="" />
                <div className={s.imageIcon}>
                    <img className={s.iconItem} src={editPen} alt="" />
                </div>
            </div>
            <div className={s.textContainer}>
                <h2 className={s.userName}>Имя пользователя</h2>
                <div className={s.line}></div>
                <p className={s.textContent}>Мои объявления</p>
                <p className={s.textContent}>Резюме</p>
                <div className={s.line}></div>
                <p className={s.textContent}>Платные услуги</p>
                <p className={s.textContent}>Управление профилем</p>
                <p className={s.textContent}>Защита профиля</p>
                <p className={s.textContent}>Настройки</p>
            </div>
        </div>
    </div>
  )
}

export default ProfilePopupMob