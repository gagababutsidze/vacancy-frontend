import logo from '../assets/logggo.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/profile')
    }

    const mainLInk = () => {
        navigate('/')
    }

    return(
        <header className='header'>

            <div onClick={mainLInk} className='logo-text-out-div'>
                <img className='logo-text' src={logo} alt="" />
            </div>

            <h1>მოიძიე შენი მომავალი სამსახური</h1>

            <div>
            <FontAwesomeIcon onClickCapture={handleClick} icon={faUser} />
            </div>
        </header>
    )
}
export default Header