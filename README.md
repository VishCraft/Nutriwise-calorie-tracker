# Nutriwise-calorie-tracker

NutriWise is a web application designed to help users track their daily calorie intake and monitor their nutrition. With NutriWise, users can log the foods they eat, check their real-time calorie intake, and receive warnings when they exceed a 1000-calorie limit.

Features
Add Food Entries: Users can log food items with calories.
Calorie Tracking: The app provides real-time tracking of daily calorie intake.
Warnings: Users receive warnings when their total calorie intake exceeds the 1000-calorie limit.
Responsive Design: The app is designed to work on both desktop and mobile devices.
Tech Stack
Frontend: React, Tailwind CSS
Backend: Spring Boot, MongoDB
Database: MongoDB (MongoDB Atlas)
Installation
Prerequisites
To run NutriWise locally, you need the following installed on your machine:

Node.js (for frontend)
npm (for package management)
Java (for backend)
MongoDB (for the database) or MongoDB Atlas account for cloud hosting.


Clone the repository
Clone the repository to your local machine using Git:
bash
Copy
Edit
git clone https://github.com/your-username/nutriwise.git
cd nutriwise

Setup the Backend (Spring Boot)
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Run the Spring Boot Application:

You can run the backend using Maven or Gradle.

If using Maven:

bash
Copy
Edit
mvn spring-boot:run

If using Gradle:

bash
Copy
Edit
./gradlew bootRun
MongoDB Configuration:

In the application.properties or application.yml file, update the MongoDB connection URI to point to your MongoDB instance or use MongoDB Atlas for cloud hosting.

Example MongoDB Atlas URI:

properties
Copy
Edit
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nutriwise?retryWrites=true&w=majority
Your backend should now be running locally at http://localhost:8080.

Setup the Frontend (React)
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install Dependencies:

Install the required npm dependencies by running:

bash
Copy
Edit
npm install
Start the React Application:

Run the React app:

bash
Copy
Edit
npm start
Your frontend should now be accessible at http://localhost:3000.

API Endpoints
The backend exposes several API endpoints for interacting with food entries. Here are some of the key endpoints:

POST /api/food: Add a new food entry.
GET /api/food: Get all food entries for the day.
DELETE /api/food/{id}: Delete a food entry.

How to Use NutriWise
Login: Open the app in your browser (http://localhost:3000).
Add Food: Click on the “Add Food” button to log a food entry with its calorie count.
Track Calories: The app will update the total calorie count as you add food entries.
Get Warnings: If your total calorie intake exceeds 1000 calories, you will receive a warning message.

Deployment
For production deployment, you can use the following platforms:

Frontend: Host the React app on platforms like Netlify, Vercel, or GitHub Pages.
Backend: Host the Spring Boot application on platforms like Heroku, Render, or Railway.
Database: Use MongoDB Atlas for a remote cloud-hosted MongoDB database.

Known Issues
None at the moment. If you encounter any issues, please raise them in the issues section of this repository.

Contributing
Feel free to fork this project and submit pull requests with improvements or bug fixes!

Screenshots:
![image](https://github.com/user-attachments/assets/34369a59-8ccb-4ddf-bf08-24a723cafbf1)

![image](https://github.com/user-attachments/assets/6406c13c-93e5-45cd-9dc8-2298454b48bc)

![image](https://github.com/user-attachments/assets/83f065da-77d6-44b9-b69d-2dd8bb283725) 

![image](https://github.com/user-attachments/assets/71eb86f0-c046-45db-9a47-cfbf3e162ac1)





