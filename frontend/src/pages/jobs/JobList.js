import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { BASE_URL } from '../../axiosConfig.js';
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";


const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/jobs/`)
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          setJobs(response.data.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setJobs([]);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
        setJobs([]);
      });
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality here
    // Example:
    axios.delete(`${BASE_URL}/job/delete/${id}/`)
      .then(response => {
        console.log('Job deleted successfully!', response.data);
        // Optionally, update the job list after deletion
        // You may choose to re-fetch the job list or update state locally
      })
      .catch(error => {
        console.error('Error deleting job!', error);
      });
  };

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Job Listing
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Salary From</th>
                  <th>Salary To</th>
                  <th>Experience</th>
                  <th>Skills</th>
                  <th>Company</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.description}</td>
                    <td>{job.salary_from}</td>
                    <td>{job.salary_to}</td>
                    <td>{job.experience}</td>
                    <td>{job.skills}</td>
                    <td>{job.company}</td>
                    <td>
                      {/* Edit button */}
                      <Link to={`/update/${job.id}/`}>
                        <button>Edit</button>
                      </Link>
                      {/* Delete button */}
                      <button onClick={() => handleDelete(job.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    // <div>
    //   <h1>Job List</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Salary From</th>
    //         <th>Salary To</th>
    //         <th>Experience</th>
    //         <th>Skills</th>
    //         <th>Company</th>
    //         <th>Actions</th> {/* New column for actions */}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {jobs.map(job => (
    //         <tr key={job.id}>
    //           <td>{job.title}</td>
    //           <td>{job.description}</td>
    //           <td>{job.salary_from}</td>
    //           <td>{job.salary_to}</td>
    //           <td>{job.experience}</td>
    //           <td>{job.skills}</td>
    //           <td>{job.company}</td>
    //           <td>
    //             {/* Edit button */}
    //             <Link to={`/update/${job.id}/`}>
    //               <button>Edit</button>
    //             </Link>
    //             {/* Delete button */}
    //             <button onClick={() => handleDelete(job.id)}>Delete</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default JobList;
