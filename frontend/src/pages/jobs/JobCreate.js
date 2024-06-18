import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../axiosConfig.js';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";


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
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Create Job
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  placeholder="Job Title"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  value={formData.description}
                  placeholder="Job Description"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="salary_from">Salary From</Label>
                <Input
                  id="salary_from"
                  name="salary_from"
                  value={formData.salary_from}
                  placeholder="Salary Range From"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="salary_to">Salary To</Label>
                <Input
                  id="salary_to"
                  name="salary_to"
                  value={formData.salary_to}
                  placeholder="Salary Range To"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="experience">Experience</Label>
                <Input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  placeholder="Minimum Experience Required To Do this Job In Years"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="skills">Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  placeholder="Skills Required for the job"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  placeholder="Company Providing this job"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <Button className="mt-2">Post Job</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
  
};

export default JobCreate;
