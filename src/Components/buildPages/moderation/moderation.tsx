import s from './moderation.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import greenMoney from '../../../assets/greenmoney.svg'

const moderation = () => {
  return (
    <div className={s.sectionContainer}>
        <h1 className={`${s.mainTitle} ${s.marginTop}`}>Модерация объявлений</h1>
        <div className={s.btnBox}>
            <button className={s.btn}>Ждут действий</button>
            <button className={`${s.btn} ${s.secondBtn}`}>Архив</button>
        </div>
        <div className={s.cardContainer}>
            <div className={s.cardItem}>
                <img className={s.cardPhoto} src={photo} alt="" />
                <div className={s.textContainer}>
                    <p className={`${s.mainTitle} ${s.colorPurple}`}>Объявление</p>
                    <div className={s.priceBox}>
                        <p className={s.priceTitle}>3900</p>
                        <img className={s.priceIco} src={greenMoney} alt="" />
                    </div>
                    <p className= {s.secondTitle} >Описание:</p>
                    <p className={s.titleDescription}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований...</p>
                    <p className= {s.secondTitle} >ООО ХОУМ СТРОЙ</p>
                    <button className={s.btn}>Показать телефон</button>
                    <div className={s.cityBox}>
                        <p className= {s.titleText} >Город</p>
                        <p className={s.titleDescription}>Санкт-петербург</p>
                    </div>
                </div>
                <div className={s.btnActions}>
                    <button className={s.btn}>Опубликовать</button>
                    <button className={`${s.btn} ${s.secondBtn2}`}>Отклонить</button>
                </div>
            </div>

            <div className={s.cardItem}>
                <img className={s.cardPhoto} src={photo} alt="" />
                <div className={s.textContainer}>
                    <p className={`${s.mainTitle} ${s.colorPurple}`}>Объявление</p>
                    <div className={s.priceBox}>
                        <p className={s.priceTitle}>3900</p>
                        <img className={s.priceIco} src={greenMoney} alt="" />
                    </div>
                    <p className= {s.secondTitle} >Описание:</p>
                    <p className={s.titleDescription}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований...</p>
                    <p className= {s.secondTitle} >ООО ХОУМ СТРОЙ</p>
                    <button className={s.btn}>Показать телефон</button>
                    <div className={s.cityBox}>
                        <p className= {s.titleText} >Город</p>
                        <p className={s.titleDescription}>Санкт-петербург</p>
                    </div>
                </div>
                <div className={s.btnActions}>
                    <button className={s.btn}>Опубликовать</button>
                    <button className={`${s.btn} ${s.secondBtn2}`}>Отклонить</button>
                </div>
            </div>

            <div className={s.cardItem}>
                <img className={s.cardPhoto} src={photo} alt="" />
                <div className={s.textContainer}>
                    <p className={`${s.mainTitle} ${s.colorPurple}`}>Объявление</p>
                    <div className={s.priceBox}>
                        <p className={s.priceTitle}>3900</p>
                        <img className={s.priceIco} src={greenMoney} alt="" />
                    </div>
                    <p className= {s.secondTitle} >Описание:</p>
                    <p className={s.titleDescription}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований...</p>
                    <p className= {s.secondTitle} >ООО ХОУМ СТРОЙ</p>
                    <button className={s.btn}>Показать телефон</button>
                    <div className={s.cityBox}>
                        <p className= {s.titleText} >Город</p>
                        <p className={s.titleDescription}>Санкт-петербург</p>
                    </div>
                </div>
                <div className={s.btnActions}>
                    <button className={s.btn}>Опубликовать</button>
                    <button className={`${s.btn} ${s.secondBtn2}`}>Отклонить</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default moderation