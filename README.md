# JobTask

## Overview

JobTask is a web application designed to manage job listings. The backend is built with Django REST Framework, and the frontend is developed using React. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on job listings.

## Technologies

- **Backend:** Django REST Framework
- **Frontend:** React

## Features

The application includes the following fields for job listings:
- `title`: The title of the job position.
- `company`: The company offering the job.
- `description`: A detailed description of the job.
- `salary_from`: The minimum salary for the job.
- `salary_to`: The maximum salary for the job.
- `experience`: The required experience level for the job.
- `skills`: The skills required for the job.
- `is_deleted`: A boolean field indicating if the job listing is deleted.

## Installation

### Backend

1. **Clone the repository:**
   ```sh
   git clone https://github.com/aminakm123/jobtask.git
   cd jobtask/backend
