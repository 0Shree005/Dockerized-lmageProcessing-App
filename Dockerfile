# Stage 1: React application
FROM node:14 as react-build
WORKDIR /app
COPY ./FigmaDesigns/MAIN/package*.json ./
RUN npm install
COPY ./FigmaDesigns/MAIN ./
RUN npm run build

# Stage 2: Flask server
FROM python:3.8-slim-buster
WORKDIR /app
COPY ./flask_app/requirements.txt ./
RUN pip install -r requirements.txt
COPY ./flask_app/src ./
COPY --from=react-build /app/build ./static

# port 5000 for the Flask server
EXPOSE 5000

# Run the Flask server
CMD ["python", "app.py"]