Project Name
This is a project for creating and managing tickets using an API endpoint.

Getting Started
To get started with this project, follow the instructions below.

Installing
To install this project, follow the steps below:

Clone the repository to your local machine:

Copy
git clone https://github.com/username/project.git
```

Install the project dependencies:

Copy
npm install
```
Testing
To test this project, follow the steps below:

Start the server:

Copy
npm start
```

Use a tool like Postman or cURL to send a POST request to the API endpoint:

dsconfig
Copy
POST http://localhost:3000/create-ticket
Content-Type: application/json

{
  "title": "Ticket Title",
  "phone_number": "123-456-7890",
  "description": "Ticket Description",
  "file": "/path/to/file"
}
```

Verify that the server returns a 200 OK response with a success message.

Building
To build this project, follow the steps below:

Run the build command:

Copy
npm run build
```

The build output will be located in the dist/ directory.

Running
To run this project, follow the steps below:

Start the server:

Copy
npm start
```

The server will listen on port 3000 by default.

Assumptions
In developing this project, I have made the following assumptions:

The JSON file used to store the tickets already exists and is writable.
The file property is a string containing the file path or URL, and does not contain binary data.
All incoming requests will be in JSON format and will contain all required fields (title and phone_number).
The server will be run on the default port (3000), but this can be changed by modifying the PORT environment variable.
