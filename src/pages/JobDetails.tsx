import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import route from '../route';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${route}vacancy-api/jobs/${id}`).then((res:any) => {
        console.log(res.data);
        const data = res.data[0]
        setJob(data);
        setLoading(false);
        console.log(job);
        
      })
      .catch(error => {
        console.error('შეცდომა:', error);
        setLoading(false);
      });
  }, [id]);

  
useEffect(() => {
  if (job) {
    console.log("job is updated", job);
  }
}, [job]);

  if (loading) return <p>იტვირტება...</p>;
  if (!job) return <p>ვაკანსია ვერ მოიძებნა.</p>;

  return (
    <div className="job-details-container">
      <div className="">
        <h2>{job.title}</h2>
        <p><strong>კომპანია:</strong> {job.created_by}</p>
        <p><strong>მდებარეობა:</strong> {job.location}</p>
        <p><strong>ტიპი:</strong> {job.type}</p>
        <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
        <p><strong>აღწერა:</strong></p>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;