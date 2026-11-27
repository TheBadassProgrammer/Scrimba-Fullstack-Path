import twitter from '../assets/Twitter Icon.png'
import facebook from '../assets/Facebook Icon.png'
import instagram from '../assets/Instagram Icon.png'
import github from '../assets/GitHub Icon.png'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={twitter} className='social-icons'></img>
            <img src={facebook} className='social-icons'></img>
            <img src={instagram} className='social-icons'></img>
            <img src={github} className='social-icons'></img>
        </div>
    )
}