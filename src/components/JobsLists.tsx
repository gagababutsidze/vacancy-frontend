import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/jobsList.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import route from '../route';

function JobsList({ jobss }: any) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${route}vacancy-api/all-jobs`)
      .then(res => {
        setJobs(res.data.reverse());
        setLoading(false);
      })
      .catch(error => {
        console.error('შეცდომა ვაკანსიების მიღებისას:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>იტვირთება...</p>;
  }

  const jobsToShow = (jobss && jobss.length > 0) ? jobss : jobs;

  return (
    <div className='jobs'>
      {jobsToShow.length === 0 ? (
        <p>ვაკანსიები არ არის</p>
      ) : (
        jobsToShow.map((job: any, index: any) => (
          <Link key={job.id || index} className='link' to={`/jobs/${job.id}`}>
            <div className="job-card job">
              <div className='div1'>
                  <h3>{job.title}</h3>  
                  -    
                  <p className='location'>{job.location}</p>  
              </div> 
               <p>{job.created_by}</p>      
              <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}


export default JobsList;
