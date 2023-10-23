import { useState, useEffect } from 'react';
import s from './infoProfile.module.css'

const InfoProfile = () => {
  const [profileData, setProfileData] = useState({email: '', city: '', phone: '', phone_two: ''});
  const [cityInput, setCityInput] = useState("");
  const [secondPhoneInput, setSecondPhoneInput] = useState("");
  const [isSecondPhoneVisible, setIsSecondPhoneVisible] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {

    const url = `http://31.129.105.19/api/v1/profile-settings?jwt=${localStorage.getItem("token")}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setProfileData(data));
  }, []);

  useEffect(() => {
    setCityInput(profileData.city);
  }, [profileData]);

  const handleSave = () => {
    fetch('http://192.168.0.4:6969/api/v1/profile-settings-replace', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city: cityInput, phone_two: secondPhoneInput })
    })
      .then(response => response.json())
      .then(data => setProfileData(data));
  };

  const handleAddPhone = () => {
    setIsSecondPhoneVisible(true);
  };

  return (
    <div className={s.sectionContainer}>
      <h1 className={s.mainTitle}>Настройки</h1>
      <div className={s.contentContainer}>
        <div className={s.rightWrapper}>
          <p className={s.textContent}>{profileData.email}</p> 
          <p className={s.textContent}>Телефоны</p>
          <div className={s.phoneConteiner}>
            <p className={s.textContent}>{profileData.phone}</p>
            {profileData.phone_two && <p className={s.textContent}>{profileData.phone_two}</p>}
            {isSecondPhoneVisible && 
               <input 
                 className={s.input} 
                 value={secondPhoneInput} 
                 onChange={(e) => setSecondPhoneInput(e.target.value)}
               />
            }
            <p className={s.descText}>(можно добавить не более 2-х номеров)</p>
          </div> 
          <button className={s.btn} onClick={handleAddPhone}>Добавить номер</button>
        </div>
        <div className={s.leftWrapper}>
          <h2 className={s.secondTitle}>Контактная информация</h2>
          <p className={s.textContent}>Город</p>
          <input 
            className={s.input} 
            value={cityInput} 
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button className={s.btn} onClick={handleSave}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default InfoProfile;
