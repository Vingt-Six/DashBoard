import './avatar.css';
import Jeremy from '../../img/image-jeremy.png'

function Avatar() {
    return(
        <div className='avatar'>
            <div className='topCard'>
                <div className='image'>
                    <img src={Jeremy} alt="" />
                </div>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <p className='days'>Daily</p>
            <p className='days'>Weekly</p>
            <p className='days'>Monthly</p>
        </div>
    )
}

export default Avatar;