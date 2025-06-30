import express from 'express';
import { characterRoutes } from './routes/character.routes';

const server = {
  app: express(),
  port: 3000,

  init() {
    this.app.use(express.json());
    this.app.use('/api', characterRoutes);
    this.app.get('/', (req, res) => {
      res.json({ message: 'koala rest api' });
    });
  },

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
      console.log(`Read all data at http://localhost:${this.port}/api/data`);
    });
  }
};

server.init();
server.start();

