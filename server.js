const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Define the API endpoint URL and HTTP method
app.post('/create-ticket', (req, res) => {
  // Retrieve the required information from the request body
  const { title, phone_number, description, file } = req.body;

  // Check if all required information is provided
  if (!title || !phone_number) {
    return res.status(400).json({ error: 'Title and phone number are required' });
  }

  // Write the information to a JSON file
  const ticket = { title, phone_number, description, file };
  fs.readFile('tickets.json', (err, data) => {
    if (err) throw err;
    let tickets = JSON.parse(data);
    tickets.push(ticket);
    fs.writeFile('tickets.json', JSON.stringify(tickets), (err) => {
      if (err) throw err;
      console.log('Ticket created successfully');
    });
  });

  // Return a success response
  return res.status(200).json({ message: 'Ticket created successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});