import { useEffect, useState } from 'react';
import '../styles/profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import route from '../route';


const Profile = () => {

    const token = window.localStorage.getItem('token')
    let [companyName, setCompanyName] = useState()
    let [email, setEmail] = useState()
    let [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${route}users/get-your-acc/`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then((res) => {
    console.log(res.data);

    setCompanyName(res.data.company_name)
    setEmail(res.data.email)
    setPhoneNumber(res.data.phone_number)
    
})  
    }, [])



    const handleClickPublication = () => {
      navigate('/publication')
    }

        const handleClickMyVacancies = () => {
      navigate('/my-vacancies')
    }

     return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">კომპანიის პროფილი</h1>

        <p><strong>სახელი:</strong> {companyName}</p>
        <p><strong>ელფოსტა:</strong> {email}</p>
        <p><strong>ტელეფონის ნომერი:</strong> {phoneNumber}</p>

        <div className="profile-buttons">
          <button onClick={handleClickMyVacancies} className="profile-btn">ჩემი ვაკანსიები</button>
          <button onClick={handleClickPublication} className="profile-btn blue">ახალი ვაკანსია</button>
        </div>
      </div>
    </div>
  );
}

export default Profile