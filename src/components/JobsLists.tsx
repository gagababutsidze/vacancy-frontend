import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/jobsList.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function JobsList() {
  const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // იტვირთება
      const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/vacancy-api/all-jobs') // 🔁 აქ ჩაანაცვლე შენი API ლინკი
   
      .then(res => {
        setJobs(res.data);
         setLoading(false); // დასრულდა იტვირთება
        console.log(res.data);
        
      })
      .catch(error => {
        console.error('შეცდომა ვაკანსიების მიღებისას:', error);
         setLoading(false); // შეცდომის შემთხვევაშიც გაჩერდეს იტვირთება
      });
  }, []);

    if (loading) {
    return <p>იტვირთება...</p>;
  }

  return(
    <div className='jobs'>
         {jobs.length === 0 ? (
        <p>ვაკანსიები არ არის</p>
      ) : (
        jobs.map((job:any, index) => (
          <Link className='link' to={`/jobs/${job.id}`}>
          <div key={job.id || index} className="job-card job">
            <h3>{job.title}</h3>
            <p>{job.created_by}</p>
            <p><strong>მდებარეობა:</strong> {job.location}</p>        
            <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
          </div>
          </Link>
        ))
      )}
    </div>
  )


}

export default JobsList;
