import './avatar.css';
import Jeremy from './img/image-jeremy.png'

function Avatar(props) {
    return(
        <div className='avatar'>
            <div className='topCard'>
                <div className='image'>
                    <img src={Jeremy} alt="" />
                </div>
                <p className='report'>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <p className={props.d == 'daily' ? 'daysClick' : 'days'} onClick={props.day}>Daily</p>
            <p className={props.d == 'weekly' ? 'daysClick' : 'days'} onClick={props.week}>Weekly</p>
            <p className={props.d == 'monthly' ? 'daysClick' : 'days'} onClick={props.month}>Monthly</p>
        </div>
    )
}

export default Avatar;