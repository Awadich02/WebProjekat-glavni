// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const registrationsFile = path.join(__dirname, 'registrations.json');

app.use(bodyParser.json());

// Ensure the JSON file exists
if (!fs.existsSync(registrationsFile)) {
  fs.writeFileSync(registrationsFile, JSON.stringify([]));
}

// Route to handle registration
app.post('/register', (req, res) => {
  const newRegistration = req.body;

  // Read the existing registrations
  fs.readFile(registrationsFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    const registrations = JSON.parse(data);
    registrations.push(newRegistration);

    // Write the updated registrations back to the file
    fs.writeFile(registrationsFile, JSON.stringify(registrations, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Server error');
      }

      res.status(201).send('Registration successful');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
