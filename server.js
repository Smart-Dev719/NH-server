const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const app = express();
const Web3 = require("web3");
var corsOptions = {
  origin: 'https://nakedheadz.com',
  optionsSuccessStatus: 200 // For legacy browser support
}

const db = require("./models");
db.sequelize.sync();

app.use(cors());
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(routes);
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3003,() => console.log('Server is running on port 3003'));