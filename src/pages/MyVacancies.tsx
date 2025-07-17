import userEvent from "@testing-library/user-event"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const MyVacancies = () => {

    const token = window.localStorage.getItem('token');
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // იტვირთება

   useEffect(() => {
        axios.get(`http://localhost:3000/vacancy/get-my-vacancies`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then((res) => {
        setJobs(res.data);
        setLoading(false); // დასრულდა იტვირთება
        console.log(res.data);

    
})  
    }, []) 



    if (loading) {
    return <p>იტვირთება...</p>;
  }

  return(
    <div className='jobs'>
         <h2>ჩემი გამოქვეყნებული</h2>
         {jobs.length === 0 ? (
        <p>ვაკანსიები არ არის</p>
      ) : (
       
        jobs.map((job:any, index) => (
            <div>
          <Link className='link' to={`/jobs/${job.id}`}>
          <div key={job.id || index} className="job-card job">
            <h3>{job.title}</h3>
            <p>{job.created_by}</p>
            <p><strong>მდებარეობა:</strong> {job.location}</p>        
            <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
          </div>
          </Link>
          <button onClick={() => {
            axios.delete(`http://localhost:3000/vacancy/delete-vacancy/${job.id}`,{
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then(() => {
    window.location.reload()
})
          }} className="delete-button">🗑️ წაშლა</button>
          </div>
         
        ))
      )}
    </div>
  )
    }

export default MyVacancies