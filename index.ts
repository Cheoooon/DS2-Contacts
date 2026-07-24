import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

