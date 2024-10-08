
import './Teacher.css'

import marina from '../../assets/marina.jpg'
import line from '../../assets/line.png'

export default function Teacher() {
  return (
    <div className='glav_conteiner'>
        <div className='oneTeacher'>
      <img className='photo-marina' src={marina} alt="Фото руководителя" />
      <div className='opis'>
      <p className='zagolovok'>Руководитель клуба</p>
      <p className='text_marina'> Закончила Кузбасский колледж культуры и искусств имени народного артиста СССР Иосифа Давыдовича Кобзона! <br/>
 Победительница всероссийский и международных конкурсов и фестивалей!   <br/>
Хореограф, педагог и основатель школы современного танца « Maze dance company» по направлению contemporary , modern, детский танец!  <br/>
Ученики школы являются победителями чемпионата «Scala Champ-Fest» в 2023 году!  <br/>
Обладатели многократных побед на всероссийских и международных конкурсах и фестивалей!</p>
      </div>
    </div>
    <img className='line' src={line} alt="линия" />
    </div>
  )
}
