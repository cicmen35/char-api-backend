const express = require('express');
const app = express();
let port = 3000;

const characterRoutes = require('./routes/character.routes.js');
app.use('/api', characterRoutes);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API'})
});

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`)
});
