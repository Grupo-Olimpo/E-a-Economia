import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/controllers/index';
import compress from 'compression';
import methodOverride from 'method-override';

const app = express();

import db from './models';
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:3000"
};

// app.use(compress());
// app.use(methodOverride());

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// mount all routes on /api path
app.use('/api', routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
