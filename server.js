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
});

app.use('/', (req, res, next) => {
    res.status(201).json({
      message:'You can send requests to the following routes:',
      url1: {
        url: '/products',
        requests: 'POST'
      },
      url2: {
        url: '/products/:productId',
        requests: 'GET'
      },
      url3: {
        url: '/products/special',
        requests: 'GET'
      },
      url4: {
        url: '/orders',
        requests: 'GET'
      },
      url5: {
        url: '/orders/:orderId',
        requests: 'PUT'
      },
      url6: {
        url: '/orders/:orderId',
        requests: 'DELETE'
      },
      url7: {
        url: '/orders/:orderId',
        requests: 'DELETE'
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