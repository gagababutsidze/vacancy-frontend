import SearchBox from "./SearchBox"
import JobsList from "./JobsLists"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Container = () => {

  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/jobs?category=${category}`);
  };
 /*   return(
        <div className="container">
      <SearchBox/>

      
    
     <h2>📂 კატეგორიები</h2>
    <div className="categories">
      <div onClick={() => handleCategoryClick('development')}  className="category">
        <h3>დეველოპმენტი</h3>
      </div>
      <div  onClick={() => handleCategoryClick('marketing')}  className="category">
        <h3>მარკეტინგი</h3>
      </div>
      <div  onClick={() => handleCategoryClick('finance')}  className="category">
        <h3>ფინანსები</h3>
      </div>
      <div  onClick={() => handleCategoryClick('design')}  className="category">
        <h3>დიზაინი</h3>
      </div>
    </div>
      
    <h2>🔥 ვაკანსიები</h2>
    <div className="jobs">
      <JobsList/>
    </div>

   
  </div>
    )*/

  return(
     <div className="container">
      <SearchBox/>
      
    <h2>🔥 ვაკანსიები</h2>
    <div className="jobs">
      <JobsList/>
    </div>

   
  </div>
  )
}

export default Container