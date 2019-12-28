import React from 'react';
// import logo from './pngfuel.png';
import './App.css';
import logoContent from './Tarifa.jpg';

const Profile = () => {
  return <div className="content">

    <img src={logoContent} alt="Tarifa" width="100%" heigh="96px"></img>
    <div className="ava"> ava +++  description</div>
    <div className="posts"></div>
    <h2>Tarifa</h2>
    <div className="post">
      Тарифа в Андалусии – это самый южный город Европы и один из самых благородных городов Испании. Здесь слились воедино культура мавров и христиан. Это место, где: «Море обнимает океан», – именно так любят говорить испанцы о своем городе.
      Бирюзовая морская гладь самой крайней точки благословенного Иберийского полуострова в солнечный летний день не уступает красоте сказочных Мальдив.
      Но вся суть в том, что вы еще в безопасной и обласканной цивилизацией Европе. На протяжении тысячелетия Тарифа остается плацдармом европейской культуры и гордо хранит свое историческое наследие.
    </div>

  </div>
}
export default Profile;