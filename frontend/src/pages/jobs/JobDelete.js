import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDelete = () => {
  const { id } = useParams();

  const handleDelete = () => {
    axios.delete(`/api/jobs/${id}/`)
      .then(response => {
        console.log('Job deleted successfully!', response.data);
      })
      .catch(error => {
        console.error('There was an error deleting the job!', error);
      });
  };

  return (
    <div>
      <h1>Delete Job</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobDelete;
