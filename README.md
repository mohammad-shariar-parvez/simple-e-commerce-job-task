# E-Commerce Project

## Overview

This is a simple e-commerce project built using React, Redux Toolkit, Axios, RTK Query, Tailwind CSS, Docker, Yarn, and Vite. The project allows users to search for items, view item details, filter by price range, and sort results. It is designed to be efficient, reusable, and responsive.

## Live Site

https://e-commerce-gigalogy.netlify.app

## Features

- **Search:** Users can search for items, and the application displays the search results.

- **Item Details:** Clicking on an item from the search results takes the user to the item details page.

- **Filtering:** Users can filter search results by price range.

- **Sorting:** Results can be sorted by price, review average, and review count in both ascending and descending orders.

## Technologies Used

- HTML
- CSS
- Javascript
- React
- Redux Toolkit
- RTK Query
- Axios
- Tailwind CSS
- Docker
- Yarn
- Vite

## Project Structure

      ├── src/
      │   ├── assets/
      │   ├── components/
      │   ├── helpers/
      │   ├── pages/
      │   ├── redux/
      │   ├── routes/
      │   ├── utils/
      │   ├── App.js
      │   ├── App.css
      │   └── main.jsx
      ├── public/
      ├── Dockerfile
      ├── docker-compose.yaml
      ├── index.html
      ├── .env.example
      ├── .dockerignore
      ├── .gitignore
      ├── package.json
      ├── package-lock.json
      ├── postcss.config.js
      ├── tailwind.config.js
      ├── vite.config.js
      ├── yarn-error.log
      ├── yarn.lock
      └── README.md

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed
- Docker installed (for running with Docker)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-project.git
   cd e-commerce-project

   ```

2. Install dependencies:

   ```bash
   yarn install

   ```

3. Create a .env file based on .env.example and fill in the necessary environment variables.

4. Start the development server:

   ```bash
   yarn dev
   ```

5. With Docker:

   ```bash
   docker-compose up --build

   ```

6. Open your browser and visit http://localhost:5173/

## Development

Use the provided scripts in package.json for linting, building, and other development tasks.

## Contributors

Mohammad Shariar Parvez

- Email: shariarparvezm@gmail.com
