//importing express
import express from 'express';
//importing routes for the api end-point
import routes from './routes/router';

//creating instance of app
const app = express();
//setting port
const port = 3030;

//api end-point
app.use('/api', routes);

//listening to server
app.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});

export default app;
