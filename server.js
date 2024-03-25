const express = require ('express')
const studentRoutes = require('./routes.js')
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/students',studentRoutes)
app.listen(port,()=>console.log(`Listening On ${port}`))