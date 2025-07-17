import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Publication from './pages/Publication';
import JobDetails from './pages/JobDetails';
import JobsFiltered from './pages/JobsFiltered';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MyVacancies from './pages/MyVacancies';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Routes> 
            <Route path='/' element={<Container/>}/>
            <Route path='/publication' element={<Publication/>}/>
            <Route path="/jobs/:id" element={<JobDetails/>} />
            <Route path="/jobs" element={<JobsFiltered />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-vacancies" element={<MyVacancies />} />
        </Routes>
      </div>
        
      <Footer/>

    </div>
  );
}

export default App;
