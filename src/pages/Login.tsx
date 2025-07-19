import '../styles/login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import route from '../route';

const Login = () => {
  const [visibleDiv, setVisibleDiv] = useState<any>('first');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [passwordd, setPasswordd] = useState('');
  const [name, setName] = useState(''); 
  const [companyName, setCompanyName] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 


  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${route}users/login`, {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/publication');
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Შესვლის შეცდომა: ელფოსტა ან პაროლი არასწორია');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${route}users/registration`, {
        name,
        email,
        passwordd,
        companyName,
        phoneNumber
      });

      alert('რეგისტრაცია წარმატებით დასრულდა!');
      setVisibleDiv('second'); // გადართავს ავტორიზაციაზე
    } catch (error: any) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('რეგისტრაციის შეცდომა: ' + (error.response?.data?.message || error.message));
    }
  };

 return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            className={`auth-tab ${visibleDiv === 'first' ? 'active' : ''}`}
            onClick={() => setVisibleDiv('first')}
          >
            რეგისტრაცია
          </button>
          <button
            className={`auth-tab ${visibleDiv === 'second' ? 'active' : ''}`}
            onClick={() => setVisibleDiv('second')}
          >
            ავტორიზაცია
          </button>
        </div>

        {visibleDiv === 'second' && (
          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="ელფოსტა"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="პაროლი"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">შესვლა</button>
          </form>
        )}

        {visibleDiv === 'first' && (
          <form className="auth-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="სახელი"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="ელფოსტა"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="კომპანიის სახელი"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              placeholder="ტელეფონის ნომერი"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="პაროლი"
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
            />
            <button type="submit">რეგისტრაცია</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
