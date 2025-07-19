import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/jobsList.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function JobsList({ jobss }: any) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/vacancy-api/all-jobs')
      .then(res => {
        setJobs(res.data);
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
              <h3>{job.title}</h3>
              <p>{job.created_by}</p>
              <p><strong>მდებარეობა:</strong> {job.location}</p>        
              <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}


export default JobsList;
