import News1 from '../../assets/news1.jpg'
import News2 from '../../assets/news2.jpg'
import News3 from '../../assets/news3.jpg'

import './News.css'

export default function News() {
  return (
    <div className='conteiner'>
        <div className='card'> 
            <img src={News1} className='photo' alt="картинка" />
            <p className='description'>
            Открыт набор в группы по направлению CHOREO 🔥 <br/>
            Подходит как для девочек, так и для мальчиков 🤩
            </p>
        </div>
        <div className='card'>
            <img src={News2} className='photo' alt="картинка" />
            <p className='description'>
                Мы закрыли танцевальный сезон на отлично 😻  <br/>
                6 лауриатов первой степени и 2 лауриата второй степени
            </p>
        </div>
        <div className='card'>
            <img src={News3} className='photo' alt="картинка" />
            <p className='description'>Запиши друга на пробное занятие и получи БЕСПЛАТНУЮ индивидуальную тренировку в подарок 🎁
</p>
        </div>
     
    </div>
  )
}
