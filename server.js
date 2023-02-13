const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: "https://nodejs-express-mysql-xhyj.onrender.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The DangerZone!!!" });
  res.status(200).json({
    message:'You can send requests to the following routes:',
    url1: {
      url: '/tutorials',
      requests: 'Post/Create'
    },
    url2: {
      url: '/',
      requests: 'Get/findAll'
    },
    url3: {
      url: '/published',
      requests: 'Get/findAllPublished'
    },
    url4: {
      url: '/:id',
      requests: 'Get/FindOne'
    },
    url5: {
      url: '/:id',
      requests: 'Put/Update'
    },
    url6: {
      url: '/:id',
      requests: 'DeleteOnce'
    },
    url7: {
      url: '/',
      requests: 'DeleteAll'
    },
  });
});



// ...
require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});