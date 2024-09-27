import './MainPage.css';

import Map from '../components/Map/Map'
import Teacher from '../components/Teacher/Teacher'
import News from '../components/News/News'

import Slider from '../components/Slider/Slider'
import Navbar from '../components/Navbar/Navbar'
import pin from '../assets/pin.png'



export default function MainPage() {
  return (
    <div>
      <div className='nav_glav'>
      <Navbar/>
      </div>
      <div className='glavnayaSFotoTXTDiv'>
        <img src={pin} className="pin" alt="Тут есть знак" />
        <h1 className='glavnayaSFotoTXT1'>"Ритм в сердце, грация в движениях: танцуй свою историю с нами!"</h1>
      </div>
      <div className='glavnayaSFoto'>
      </div>
      <div className='probClass'>
        <h2 className='probClassTxt1'>Школа танцев в Москве "Maze Dance Company"</h2>
        <h3 className='probClassTxt2'>Попробуй себя в танцах!</h3>
      </div>
      <div className='oStudii'>
        <h3 className='oStudiiTxt1'>"Maze Dance Company" - классный проект</h3>
        <h3 className='oStudiiTxt2'>Мы обучаем детей и взрослых современным направлениям танцев.</h3>
        <h3 className='oStudiiTxt3'>Наши педагоги и амбассадоры - яркие и самобытные представители современной танцевальной культуры</h3>
      </div>
      <Slider/>
      <div id="news" className='newScholl'>
        <h1 className='newSchollTxt1'>Новости</h1>
      <News/>
      </div>
      <div id="teachers">
        <h1 className='title_ped'>Наши Педагоги</h1>
        <Teacher/>
      </div>
      <div id="contacts" className='apiConteiner'>
      <h1 className='contant1'>Наши контакты</h1>
        <div id="map" className='api'><Map/></div>
        {/* <h1 className='contant1'>Наши контакты</h1> */}
        <div className='contactConteiner'>
          <a href="https://t.me/mazedancecompany" className='contant2'>Telegram</a>
          <a href="https://vk.com/mdcompany27" className='contant2'>VKontakte</a>
          <a href="https://www.instagram.com/maze.dance.company_?igsh=MXAydmNkd3M3c3lvcA==" className='contant2'>Instagram</a>
        </div>
      </div>
    </div>
  );
}
