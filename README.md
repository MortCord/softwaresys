Instructions:
1. Download and Setup:
- Clone the project repository from the Git repository:
- Install the necessary dependencies and applications for the project: Java Development Kit 21 (JDK 21), Node.js, MySQL, IntelliJ IDEA, Visual Studio Code (if desired).
  JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
  Node.js: https://nodejs.org/en/download/
  MySQL: https://dev.mysql.com/downloads/installer/
  IntelliJ IDEA: https://www.jetbrains.com/idea/download/
  VS Code: https://code.visualstudio.com/download

2. Database Setup:
- Create a MySQL database to store your application data.

3. Server-Side Setup (Spring Boot):
- Open the project in your IDE.
- Find the configuration file for connecting to the database (application.properties) and specify the connection parameters to your MySQL database (URL, username, password).
- Run the server-side of the application.
- The tables will be created automatically once you run the application.

4. Client-Side Setup (React):
- Navigate to the folder with the client-side code (src).
- Open the terminal in this folder (cmd).
- Run the command `npm install` to install all React dependencies.
- Start the client-side of the application using the command `npm start`.

5. Using the Application:
- After starting the server and client, open your web browser and navigate to the URL of your client-side application (usually the browser opens automatically).
- Perform CRUD actions through the user interface (create, read, update, delete records).
- Verify that all operations work correctly and data is stored in the database.
