# My Project

This project consists of a React application and a Flask server, both of which are Dockerized.

## Prerequisites

- Docker
- Node.js
- Python

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/0Shree005/Dockerized-lmageProcessing-App.git
    cd Dockerized-lmageProcessing-App
    ```

2. Build the Docker image:
    ```bash
    docker build -t my-app .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 5000:5000 my-app
    ```
The application will be accessible at `http://localhost:5000`.

## Project Structure

- `FigmaDesigns/MAIN`: This directory contains the React application.
- `flask_app`: This directory contains the Flask server.
- `Dockerfile`: This file contains the Docker configuration for building the React application and Flask server.
    
