const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes'); // ✅ IMPORTANT

dotenv.config();

const app = express();
app.use(express.json()); // ✅ to parse JSON body

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use('/api/patients', patientRoutes); // ✅ Mount the route here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
