import logo from '../assets/searchlogo.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')

    const handleClick = () => {
        if (token) {
            navigate('/profile')
        }else{
        navigate('/login')
        }
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
            <FontAwesomeIcon className='icon' onClickCapture={handleClick} icon={faUser} />
            </div>
        </header>
    )
}
export default Header