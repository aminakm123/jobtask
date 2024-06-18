import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobUpdate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary_from: '',
    salary_to: '',
    experience: '',
    skills: '',
  });

  useEffect(() => {
    axios.get(`/jobs/${id}/`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the job!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/jobs/${id}/`, formData)
      .then(response => {
        console.log('Job updated successfully!', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the job!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Job</h1>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Salary From:
        <input type="text" name="salary_from" value={formData.salary_from} onChange={handleChange} />
      </label>
      <label>
        Salary To:
        <input type="text" name="salary_to" value={formData.salary_to} onChange={handleChange} />
      </label>
      <label>
        Experience:
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
      </label>
      <label>
        Skills:
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </label>
      <button type="submit">Update Job</button>
    </form>
  );
};

export default JobUpdate;
