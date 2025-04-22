const express = require('express');
const bodyParser = require('body-parser');
const registrationRoutes = require('./routes/registrationRoutes');
const app = express();
app.use(bodyParser.json());


app.use('/api',registrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

