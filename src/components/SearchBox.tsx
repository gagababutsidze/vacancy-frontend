import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');

  // Fetch (მაგალითად ძებნისას)
  const handleSearch = () => {
    axios
      .get(`http://localhost:3000/vacancy-api/jobss?jobName=${position}`, {
        params: {
          category: position,
          location: location,
        },
      })
      .then((res) => {
        console.log('მიღებული ვაკანსიები:', res.data);
        // აქ შეგიძლია შედეგების setState გააკეთო ან props-ის სახით გააგზავნო
      })
      .catch((err) => {
        console.error('შეცდომა:', err);
      });
  };

    const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/publication"); // ავტორიზებულია
    } else {
      navigate("/login");


      alert('ნეტა არა ბოდიალომდე!!!')
    }
  };


  return (
    <div className="search-box">

    

      <input
        type="text"
        placeholder="ძებნა: პოზიცია ან კომპანია..."
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <label>
        <select className='select' name="type" >
          <option value="full-time" >ნებისმიერ ადგილას</option>
          <option value="part-time" >თბილისი</option>
          <option value="contract"  >შიდა ქართლი</option>
          <option value="internship" >აჭარა</option>
        </select>
      </label>

  

      <button onClick={handleSearch}>ძებნა</button>

  
        <button onClick={handleClick}>გამოქვეყნება</button>
   
    </div>
  );
};

export default SearchBox;
