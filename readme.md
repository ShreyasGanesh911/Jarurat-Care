# Internship Assignment submission

## Problem Statement 
Build a simple simple API using Node.js and Express to manage a list of healthcare services.

## Must include
*  Add a service
*  Get all services
*  Update existing service
*  Delete a service

## Get started 
1) Fork this repo.
2) Cd into the directory
3) Run script in the terminal to install all dependencies.
    ```
    npm install
    ```
4) Create a .env file in the current directory and paste all the requirements present in the .env.sample file.
   ```
   PORT = 4000 || PORT NUMBER 
   MONGO_URI = YOUR URI HERE
   ```
5) Run this script in the same dir to start the server (Nodemon)
    ```
    npm run dev
    ```
6) Make a simple GET request (Will be an empty array as no data is present)
   ```
   http://localhost:4000/service/all
   ```

You are now good to go!
   
PS: Have added a dummy json file in the asset folder which can me imported in your local Mongo DB for testing.