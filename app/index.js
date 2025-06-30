import express from 'express';
import { characterRoutes } from './routes/character.routes.js';
const app = express();
let port = 3000;

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
    console.log(`App running on port http://localhost:${port}`)
    console.log(`Read all data at http://localhost:${port}/api/data`)
});
