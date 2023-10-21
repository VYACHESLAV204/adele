import {useState,useEffect} from 'react'
import s from './Summary.module.css'
import addNew from '../../../assets/addNew.svg'
import greenMoney from '../../../assets/greenmoney.svg'
import photoClose from '../../../assets/photoClose.svg'
import plus from '../../../assets/plus.svg'
import "react-widgets/styles.css";
import Calendar from "react-widgets/Calendar";
const Summary = () => {
  const [calendarValue, setCalendarValue] = useState<Date>()
  const [calendarToggle, setCalendarToggle] = useState(false)
  useEffect(() => {
    console.log(calendarValue);

  }, [calendarValue])
  
  return (
    <div className={s.summaryContainer}>
      <h1 className={s.MainTitle}>Резюме</h1>
      <div className={s.categoryContainer}>
        <p className={s.categoryTitle}>Категория:</p>
        <p className={s.categoryText}>Работа/резюме</p>
      </div>
      <h2 className={s.pageTitle}>Подробности</h2>
      <div className={s.workCategory}>
        <p className={s.marginRight}>Кем вы хотите работать?</p>
        <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='Каменщик' />
      </div>
      <h2 className={s.pageTitle}>Параметры</h2>
      <div className={s.workCategory}>
        <p style={{marginBottom: '2rem'}} className={s.marginRight}>Профессия</p>
        <div className={s.inputContainer}>
          <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='Каменщик' />
          <p className={s.inputAbout}>Поможет нам сделать поиск точнее, работадатели этого не увидят</p> 
        </div>
      </div>
      <div className={s.workCategory}>
        <p className={s.marginRight}>График работы</p>
        <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='2/2' />
      </div>
      <div className={s.workCategory}>
        <p className={s.marginRight}>Статус поиска</p>
        <input className={`${s.input} ${s.inputWork}`} type="text" />
      </div>
      <div className={s.checkboxContainer}>
        <input className={s.checkboxItem} type="checkbox" />
        <p className={s.checkboxText}>Могу выйти завтра</p>
      </div>
      <div className={s.workCategory}>
        <p className={s.marginRight}>Стаж работы</p>
        <input className={`${s.input} ${s.inputWork}`} type="text" />
      </div>
      <div className={s.genderContainer}>
        <p className={s.marginRight}>Пол</p>
        <button className={s.genderBtn}>Мужской</button>
        <button className={`${s.genderBtn} ${s.genderUnactive}`}>Женский</button>
      </div>
      <div className={s.dateNewborn}>
        <p className={s.marginRight}>Дата рождения</p>
      {calendarToggle?<Calendar value={calendarValue} onChange={value => setCalendarValue(value)} className={s.calendarValueOn}/> : <Calendar className={s.calendarValue}></Calendar>} 
        <input onClick={() => setCalendarToggle
        (!calendarToggle)} className={`${s.input} ${s.inputNewborn}`} type="text" />
        <input onClick={() => setCalendarToggle
        (!calendarToggle)} className={`${s.input} ${s.inputNewborn2}`} type="text" />
        <input onClick={() => setCalendarToggle
        (!calendarToggle)} className={`${s.input} ${s.inputNewborn}`} type="text" />
      </div>
      <div className={s.genderContainer}>
        <p className={s.marginRight}>Готовность к командировкам</p>
        <button className={s.genderBtn}>Готов</button>
        <button className={`${s.genderBtn} ${s.genderUnactive}`}>Иногда</button>
        <button className={`${s.genderBtn} ${s.genderUnactive}`}>Не готов</button>
      </div>
      <div className={s.genderContainer}>
        <p className={s.marginRight}>Переезд</p>
        <button className={s.genderBtn}>Возможен</button>
        <button className={`${s.genderBtn} ${s.genderUnactive}`}>Не возможен</button>
      </div>
      <div className={s.workCategory}>
        <p className={s.marginRight}>Гражданство</p>
        <input className={`${s.input} ${s.inputWork}`} type="text" />
      </div>
      <div className={s.workingType}>
      <p className={s.marginRight}>Тип занятости</p>
      <div className={s.checkboxContainer2}>
        <div className={s.checkboxBox}>
          <input className={s.checkboxItem} type="checkbox" />
          <p className={s.checkboxText}>Частичная занятость</p>
        </div>
        <div className={s.checkboxBox}>
          <input className={s.checkboxItem} type="checkbox" />
          <p className={s.checkboxText}>Полная занятость</p>
        </div>
      </div>
      </div>
      <h2 className={s.pageTitle}>Укажите дополнительные параметры и опции</h2>
      <p>Выберите, чем занимаетесь. Укажите стоимость, чтобы клиенты её видели в поиске по цене</p>
      <div className={`${s.aboutContainer} ${s.about}`}>
        <div className={s.workCategory}>
          <p className={s.marginRight}>Название компании</p>
          <input className={`${s.input} ${s.inputWork}`} type="text" />
        </div>
        <div className={s.workCategory}>
          <p className={s.marginRight}>Должность</p>
          <input className={`${s.input} ${s.inputWork}`} type="text" />
        </div>
        <div className={s.dateNewborn}>
          <p className={s.marginRight}>Начало работы</p>
          <input className={`${s.input} ${s.inputNewborn}`} type="text" />
          <p className={s.marginRight}>Окончание работы</p>
          <input className={`${s.input} ${s.inputNewborn2}`} type="text" />
          <div className={s.checkboxBox}>
            <input className={s.checkboxItem} type="checkbox" />
            <p className={s.checkboxText}>Полная занятость</p>
          </div>
      </div>
      <div className={s.aboutDesc}>
        <p className={s.marginRight}>Описание работы</p>
        <input className={`${s.input} ${s.inputDesc}`} type="text" />
      </div>
      </div>
      <button className={s.addBtn} style={{border:'0px',backgroundColor:'#fff'}}>
        <img className={s.addNew} src={addNew} alt="" />
        <p className={`${s.marginRight} ${s.addText}`}>Добавить ещё одну работу</p>
      </button>
      <h2 className={`${s.pageTitle} ${s.marginTop}`}>Учебные заведения</h2>
      
      <div className={`${s.aboutContainer} ${s.aboutStudy}`}>
        <div className={s.workCategory}>
          <p style={{marginBottom: '2rem'}} className={s.marginRight}>Название заведения</p>
          <div className={s.inputContainer}>
            <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='Каменщик' />
            <p className={s.inputAbout}>Название учебного заведения</p>
          </div>
        </div>
        <div className={s.workCategory}>
          <p style={{marginBottom: '2rem'}} className={s.marginRight}>Должность</p>
          <div className={s.inputContainer}>
            <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='Каменщик' />
            <p className={s.inputAbout}>Например “Оператор станка”</p>
          </div>
        </div>
        <div className={s.workCategory}>
          <p style={{marginBottom: '2rem'}} className={s.marginRight}>Год окончания</p>
          <div className={s.inputContainer}>
            <div>


            <input className={`${s.input} ${s.inputDate}`} type="" placeholder='--'/>
              <ul className={s.Ul}>
                <li className={s.LiTest}>1231321</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <p className={s.inputAbout}>Если вы ещё учитесь год - предполагаемого окончания</p>
          </div>
        </div>
      </div>
      <button className={s.addBtn} style={{border:'0px',backgroundColor:'#fff'}}>
        <img className={s.addNew} src={addNew} alt="" />
        <p className={`${s.marginRight} ${s.addText}`}>Добавить ещё одно место обучение</p>
      </button>
      <h2 className={`${s.pageTitle} ${s.marginTop}`}>Знания языков</h2>
      <div className={`${s.aboutLang } ${s.langContainer}`}>
      <div className={s.workCategory}>
          <p className={s.marginRight}>Название языка</p>
          <div className={s.inputContainer}>
            <input className={`${s.input} ${s.inputWork}`} type="text" placeholder='Английский' />
          </div>
        </div>

        <div className={s.inputBox}>
          <p className={s.marginRight}>Год окончания</p>
          <input className={`${s.input} ${s.inputDate}`} type="" placeholder='--'/>
        </div>


      </div>
      <button className={s.addBtn} style={{border:'0px',backgroundColor:'#fff'}}>
        <img className={s.addNew} src={addNew} alt="" />
        <p className={`${s.marginRight} ${s.addText}`}>Добавить знание языка</p>
      </button>
      <div className={s.aboutDesc}>
        <p className={`${s.marginRight} ${s.textAbout}`}>О себе</p>
        <input className={`${s.input} ${s.inputDesc}`} type="text" />
      </div>
					<div>
            <label className={s.marginRight} htmlFor=''>Цена:</label>
						<input className={s.inputPrice} type='text' placeholder='12 500' />
						<img className={s.marginLeft} src={greenMoney} alt='' />
					</div>
          <div>
					<h4 className={s.titleTextStyle} >Фотографии</h4>
					<p style={{textAlign: 'left' , marginBottom: '1rem'}}>Не более 5 фото</p>
					<div className={s.photoSectionContainer}>
						<div className={`${s.photo} ${s.photoContainer}`}>
							<img className={s.photoClose} src={photoClose} alt="" />
						</div>
						<div className={s.addPhotoContainer}>
							<div className={s.plusContainer}>
							<p style={{textAlign: 'center' , marginBottom: '1rem'}}>Нажмите, чтобы добавить новую фотографию</p>
							<img className={s.plusPhoto} src={plus} alt="" />
							</div>
							<input className={s.photoInput}type="file" />
						</div>
					</div>
				</div>
      <button className={`${s.btn} ${s.textMargin}`}>Разместить обьявление</button>
    </div>
    
  )
}

export default Summary