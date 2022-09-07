import './tracking.css'
import data from '../../data.json'
import work from './img/icon-work.svg'
import play from './img/icon-play.svg'
import study from './img/icon-study.svg'
import exercise from './img/icon-exercise.svg'
import social from './img/icon-social.svg'
import self from './img/icon-self-care.svg'

function Tracking(props) {
    return (
        <div className={props.bgcolor}>
            <div className='svgIcon'>
                <img src={props.icon} alt="" />
            </div>
            <div className='infoCard'>
                <div className='titre'>
                    <p>{props.title}</p>
                    <span>...</span>
                </div>
                <h1 className='heures'>{props.hours}hrs</h1>
                <p className='lastheures'>Last {props.dwm} - {props.lastHrs}hrs</p>
            </div>
        </div>
    )
}

export default Tracking;