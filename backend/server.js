const express = require('express');
const Sequelize = require('sequelize');
const port = process.env.PORT || 7000;
const app = express();
const user = require('./routes/userRoute');
const notes = require('./routes/noteRoutes');
const cors = require('cors')



app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(notes);
app.use(user);


const sequelize = new Sequelize('Notes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Error: ', err));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
