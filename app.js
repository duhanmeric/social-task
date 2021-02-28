const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./src/models");
const config = require("./src/config/config");
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const staticFileMiddleware = serveStatic(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/dist/index.html'));
});

require('./src/routes')(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`server started on port ${config.port}`)
    })
