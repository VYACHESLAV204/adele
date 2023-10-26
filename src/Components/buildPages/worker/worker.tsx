import s from './worker.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import greenMoney from '../../../assets/greenmoney.svg'

const worker = () => {
  return (
    <div className={s.sectionContainer}>
        <div className={s.firstSection}>
            <img className={s.userPhoto} src={photo} alt="" />
            <div className={s.textContentBox}>
                <div className={s.inlineFlexBox}>
                    <h1 style={{fontWeight: '700'}} className={s.mainTitle}>Иван Иванов</h1>
                    <p className={`${s.secondTitle} ${s.grayText}`}>02.01.2001 (23 года)</p>
                </div>
                <div className={s.inlineFlexBox}>
                    <h2 className={s.mainTitle}>Професиия</h2>
                    <h2 className={s.secondTitle}>Каменщик</h2>
                    <p className={`${s.secondTitle} ${s.grayText}`}>Стаж (4 года)</p>
                </div>
                <div className={s.inlineFlexBox}>
                    <h2 className={s.mainTitle}>Статус поиска</h2>
                    <h2 className={s.secondTitle}>В активном поиске</h2>
                    <p className={`${s.secondTitle} ${s.grayText}`}>Стаж (4 года)</p>
                    <div className={s.greenBox}>
                        <p className={s.greenText}>Может выйти завтра</p>
                    </div>
                </div>
                <div className={s.inlineFlexBox}>
                    <h2 className={s.mainTitle}>Город</h2>
                    <h2 className={s.secondTitle}>Санкт-петербург</h2>
                </div>
                <h2 className={s.mainTitle}>О себе</h2>
                <p className={`${s.secondTitle} ${s.descriptionMob}`}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований с учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований </p>
                <button style={{fontSize: '15px'}} className={s.btn}>Показать телефон</button>
            </div>
        </div>
        <div className={s.secondSection}>
            <div className={`${s.inlineFlexBox} ${s.inlineFlexBox2}`}>
                <div className={s.travelWork}>
                    <h2 className={s.mainTitle}>Готовность к командировкам</h2>
                    <div className={s.greenBox2}>
                        <p className={s.greenText2}>Готов</p>
                    </div>
                </div>
                <div className={s.notHome}> 
                    <h2 className={s.mainTitle}>Переезд</h2>
                    <div className={`${s.btn} ${s.greenBox2} ${s. colorPurple}`}>
                        <p style={{color: '#000'}} className={s.greenText2}>Возможен</p>
                    </div>
                </div>
                <div className={s.rezidence}>
                    <h2 className={s.mainTitle}>Гражданство</h2>
                    <div style={{backgroundColor: '#5250C5'}} className={`${s.btn} ${s.greenBox2}`}>
                        <p style={{color: '#fff'}}className={s.greenText2}>РФ</p>
                    </div>
                </div>
            </div>
        </div>
        <h2 style={{marginBottom: '2rem'}} className={s.mainTitle}>Опыт работы (3 года 3 мес)</h2>
        <div className={`${s.thirdSection} ${s.colorPurple}`}>
            <div className={s.firstLine}>
                <div className={s.inlineFlexBox}>
                        <h2 className={s.mainTitle}>ООО ХОУМ СТРОЙ</h2>
                        <h2 className={s.secondTitle}>Должность</h2>
                        <p className={`${s.secondTitle} ${s.grayText}`}>Каменщик</p>
                </div>
                <div className={s.workTime}>
                    <h2 className={s.mainTitle}>Срок работы</h2>
                    <h2 className={s.secondTitle}>2 года</h2>
                </div>
            </div>
            <div className={s.secondLine}>
                <div className={s.inlineFlexBox}>
                        <h2 className={s.mainTitle}>Начало работы</h2>
                        <h2 className={s.secondTitle}>01.01.2012</h2>
                </div>
                <div className={s.workTime}>
                    <h2 className={s.mainTitle}>Окончание работы</h2>
                    <h2 className={s.secondTitle}>01.01.23</h2>
                </div>
            </div>
            <h2 className={s.mainTitle}>О себе</h2>
                <p className={`${s.secondTitle} ${s.descText}`}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований с учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований </p>
        </div>
        {/* Мобильный див */}
        <div className={`${s.thirdSectionMob} ${s.colorPurple}`}>
            <h2 className={s.mainTitle}>ООО ХОУМ СТРОЙ</h2>
        <div className={s.firstLine}>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                        <h2 className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.spaceAround}`}>Должность</h2>
                        <p className={`${s.secondTitle} ${s.weight} ${s.marginZero}`}>Каменщик</p>
                </div>
                <div className={s.workTime}>
                    <h2 className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}>Срок работы</h2>
                    <h2 className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}>2 года</h2>
                </div>
            </div>
            <div className={s.secondLine}>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                        <h2 className={s.mainTitle}>Начало работы</h2>
                        <h2 className={`${s.secondTitle} ${s.marginZero}`}>01.01.2012</h2>
                </div>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                    <h2 className={s.mainTitle}>Окончание работы</h2>
                    <h2 className={`${s.secondTitle} ${s.marginZero}`}>01.01.23</h2>
                </div>
            </div>
            <h2 className={s.mainTitle}>О себе</h2>
                <p className={`${s.secondTitle} ${s.descText}`}>С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований с учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований С учётом сложившейся международной обстановки, перспективное планирование предоставляет широкие возможности для первоочередных требований </p>
        </div>
        <h2 style={{ marginTop: '2rem' , marginBottom: '2rem'}} className={s.mainTitle}>Образование</h2>
        <div className={`${s.fourSection} ${s.colorPurple}`}>
            <div className={s.firstLine}>
                <div className={s.inlineFlexBox}>
                        <h2 className={s.mainTitle}>ООО ХОУМ СТРОЙ</h2>
                        <h2 className={s.secondTitle}>Должность</h2>
                        <p className={`${s.secondTitle} ${s.grayText}`}>Каменщик</p>
                </div>
                <div className={s.workTime}>
                    <h2 className={s.mainTitle}>Срок работы</h2>
                    <h2 className={s.secondTitle}>2 года</h2>
                </div>
            </div>
            <div className={s.secondLine}>
                <div className={s.inlineFlexBox}>
                        <h2 className={s.mainTitle}>Начало работы</h2>
                        <h2 className={s.secondTitle}>01.01.2012</h2>
                </div>
                <div className={s.workTime}>
                    <h2 className={s.mainTitle}>Окончание работы</h2>
                    <h2 className={s.secondTitle}>01.01.23</h2>
                </div>
            </div>
        </div>
        <div className={`${s.fourSectionMob} ${s.colorPurple}`}>
            <h2 className={s.mainTitle}>ООО ХОУМ СТРОЙ</h2>
            <div className={s.firstLine}>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                        <h2 className={`${s.secondTitle} ${s.weight} ${s.marginZero} ${s.marginRight}`}>Должность</h2>
                        <p className={`${s.secondTitle} ${s.marginZero} ${s.marginRight}`}>Каменщик</p>
                </div>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                    <h2 className={s.mainTitle}>Срок работы</h2>
                    <h2 className={`${s.secondTitle} ${s.marginZero}`}>2 года</h2>
                </div>
            </div>
            <div className={s.secondLine}>
                <div className={`${s.inlineFlexBox} ${s.spaceAround}`}>
                        <h2 className={s.mainTitle}>Начало работы</h2>
                        <h2 className={`${s.secondTitle} ${s.marginZero}`}>01.01.2012</h2>
                </div>
                <div className={s.workTime}>
                    <h2 className={s.mainTitle}>Окончание работы</h2>
                    <h2 className={`${s.secondTitle} ${s.marginZero}`}>01.01.23</h2>
                </div>
            </div>
        </div>
        <div className={s.fiveSection}>
        <h2 className={s.mainTitle}>Знания языков</h2>
            <div className={s.inlineFlexBox}>
                <h2 className={s.mainTitle}>Название языка</h2>
                <h2 className={s.secondTitle}>Английский</h2>
                <h2 className={s.mainTitle}>Уровень владения</h2>
                <h2 className={s.secondTitle}>С1</h2>
            </div>
            <div className={s.inlineFlexBox}>
                <h2 className={s.mainTitle}>Название языка</h2>
                <h2 className={s.secondTitle}>Французкий</h2>
                <h2 className={s.mainTitle}>Уровень владения</h2>
                <h2 className={s.secondTitle}>А1</h2>
            </div>
            <div className={s.inlineFlexBox}>
                <h2 className={s.mainTitle}>Зарплата</h2>
                <div className={s.cashBox}>
                    <h2 className={s.mainTitle}>50 000</h2>
                    <img src={greenMoney} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default worker