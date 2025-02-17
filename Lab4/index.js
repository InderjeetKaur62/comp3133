const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/userRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here

const DB_NAME = "db_users"
const DB_USER_NAME = "Inderjeetkaur62"
const DB_PASSWORD = "Satnam@62"
const CLUSTER_ID = "yxex8"
const DB_CONNECTION = 'mongodb://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0'


mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
