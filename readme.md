# My Project

This project consists of a React application and a Flask server, both of which are Dockerized.

## Prerequisites

- Docker
- Node.js
- Python

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/username/my-project.git
    cd my-project

    Build the Docker image:docker build -t my-app .

    Run the Docker container: docker run -p 5000:5000 my-app
    The application will be accessible at http://localhost:5000.

    FigmaDesigns/MAIN: This directory contains the React application.
flask_app: This directory contains the Flask server.
Dockerfile: This file contains the Docker configuration for building the React application and Flask server.