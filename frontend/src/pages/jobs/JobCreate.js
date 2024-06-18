import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../axiosConfig.js';

const JobCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary_from: '',
    salary_to: '',
    experience: '',
    skills: '',
    company: ''
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${BASE_URL}/job/create/`, formData)
      .then(response => {
        console.log('Job created successfully!', response.data);
        navigate('/');  // Redirect to the JobList page
      })
      .catch(error => {
        console.error('There was an error creating the job!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Job</h1>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label><br />
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label><br />
      <label>
        Salary From:
        <input type="text" name="salary_from" value={formData.salary_from} onChange={handleChange} />
      </label><br />
      <label>
        Salary To:
        <input type="text" name="salary_to" value={formData.salary_to} onChange={handleChange} />
      </label><br />
      <label>
        Experience:
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
      </label><br />
      <label>
        Skills:
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </label><br />
      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label><br />
      <button type="submit">Create Job</button>
    </form>
  );
};

export default JobCreate;
