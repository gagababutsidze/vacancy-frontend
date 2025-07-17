import axios from 'axios'
import { useState } from 'react'
import '../styles/publication.css'

const Publication = () => {

 const token = window.localStorage.getItem('token')



  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    type:"",
    category:"",
    salary_min:"",
    salary_max:"",
   // created_by:""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData((prevData:any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("დაგზავნილი მონაცემები:", formData);
    // აქ შეგიძლია axios ან fetch გამოყენო მონაცემების გაგზავნისთვის

    axios.post('http://localhost:3000/vacancy/add-vacancy', formData, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
    
    
    
    .then((res) => {
      alert('მონაცემი გაიგზავნა')
    })

  };

    return(
          <main className="publication-container">
    <form className="job-form" onSubmit={handleSubmit}>

      <label>
        პოზიცია:
        <input type="text" name="title" placeholder="მაგ: Frontend დეველოპერი" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        აღწერა:
        <textarea name="description"     value={formData.description}
        onChange={handleChange}  placeholder="ვაკანსიის დეტალური აღწერა..." required></textarea>
      </label>

      <label>
        მდებარეობა:
        <input type="text" name="location" placeholder="მაგ: თბილისი" value={formData.location} onChange={handleChange} />
      </label>

      <label>
        ვაკანსიის ტიპი:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="full-time" onChange={handleChange}>სრული განაკვეთი</option>
          <option value="part-time" onChange={handleChange}>ნახევარ განაკვეთი</option>
          <option value="contract"  onChange={handleChange}>კონტრაქტი</option>
          <option value="internship" onChange={handleChange}>სტაჟირება</option>
        </select>
      </label>

      <label>
        ვაკანსიის კატეგორია:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="finance" onChange={handleChange}>ფინანსები</option>
          <option value="marketing" onChange={handleChange}>მარკეტინგი</option>
          <option value="design"  onChange={handleChange}>დიზაინი</option>
          <option value="development" onChange={handleChange}>დეველოპმენტი</option>
        </select>
      </label>

      <label>
        ხელფასი (მინ):
        <input type="number" name="salary_min" placeholder="მაგ: 1000" value={formData.salary_min} onChange={handleChange}/>
      </label>

      <label>
        ხელფასი (მაქს):
        <input type="number" name="salary_max" placeholder="მაგ: 2000" value={formData.salary_max} onChange={handleChange}/>
      </label>

      <button type="submit">გამოქვეყნება</button>
    </form>
  </main>
    )
}


export default Publication