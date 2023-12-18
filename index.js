const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patients');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://Dwamenachris:648321Acid@cluster0.mszqylq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.use(bodyParser.json());

app.use('/patients', patientRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
