import me from '../assets/me.jpeg'

export default function Info() {
    return (
        <>
            <img src={me} className='me'></img>
            <h1>Nitin Tripathi</h1>
            <h3>Fullstack Developer</h3>
            <a>https://nitin-ka-portfolio.vercel.app</a>
            <div>
                <button className='email-btn'>Email</button>
                <button className='linkedin-btn'>LinkedIn</button>
            </div>
        </> 
    )
}