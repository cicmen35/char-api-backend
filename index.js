const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 3000;

const characterRoutes = require('./routes/character.routes');
app.use('/api', characterRoutes);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API'})
});

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`)
});
