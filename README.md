// To run the apllication follow the steps below:

Step 1: Download the project and run npm install from the project root folder (Where package.json is located)
Step 2: To run the API'S . From the cmd go to the project root folder. Run npm run start. (This is will start nodemon)
Step 3: Go to chrome browser or any browser. Or use postman. Hit the following endpoint
        a. http://localhost:3000/alice (This will run the scenario one where alice pusblish a message and sees in timeline)
        b.http://localhost:3000/alice2bob (This will run scenario 2 where alice sees bob timeline. Note: one min delay will be there to fetch response. This is to simulate bob 2 message at 1 min interval) 
        c. http://localhost:3000/charlie (This will run scenario 3 where charlie subscribes and  sees bob and alice timeline. Also his own message. Note: one min delay will be there to fetch response. This is to simulate bob 2 message at 1 min interval) 
Step 4: Now press cntrl + c or command + c to exit the terminal. To run the test, From the cmd go to the project root folder. Run npm run test.

// This is simplest way which i can think of creating the app.