import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const JobsFiltered = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:3000/vacancy-api/jobs?category=${category}`)
        .then(res => {
          setJobs(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [category]);

  if (loading) return <p>იტვირთება...</p>;

  return (
    <div className="container">
      <h2>🔍 კატეგორია: {category}</h2>
      <div className="jobs">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="job-card job">
              <h3>{job.title}</h3>
              <p><strong>კომპანია:</strong> {job.posted_by}</p>
              <p><strong>მდებარეობა:</strong> {job.location}</p>
              <p><strong>ტიპი:</strong> {job.type}</p>
              <p><strong>ხელფასი:</strong> {job.salary_min} - {job.salary_max} ₾</p>
            </div>
          ))
        ) : (
          <p>ვაკანსიები არ მოიძებნა.</p>
        )}
      </div>
    </div>
  );
};

export default JobsFiltered;
