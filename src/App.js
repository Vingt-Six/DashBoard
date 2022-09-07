import './App.css';
import Avatar from './component/avatar/avatar';
import Tracking from './component/tracking/tracking'
import data from './data.json'
import work from './component/tracking/img/icon-work.svg'
import play from './component/tracking/img/icon-play.svg'
import study from './component/tracking/img/icon-study.svg'
import exercise from './component/tracking/img/icon-exercise.svg'
import social from './component/tracking/img/icon-social.svg'
import self from './component/tracking/img/icon-self-care.svg'
import { useState } from 'react';

const color = ["bgwork", "bgplay", "bgstudy", "bgexercise", "bgsocial", "bgsoft"]
const icon = [work, play, study, exercise, social, self]

function App() {

  const [donnee, setDonnee] = useState('weekly');

  const daily = () => {
    setDonnee('daily')
  }

  const weekly = () => {
    setDonnee('weekly')
  }

  const monthly = () => {
    setDonnee('monthly')
  }

  return (
    <div className="App">
      <div className='displayAll'>

        <div>
          <Avatar day={daily} week={weekly} month={monthly} d={donnee} />
        </div>

        <div>
          <div className='allCards'>
            {data.map((data) => (
              <Tracking bgcolor={color[data.id - 1]} icon={icon[data.id - 1]} title={data.title} hours={data.timeframes[donnee].current} dwm={data.timeframes[donnee].name} lastHrs={data.timeframes[donnee].previous} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
