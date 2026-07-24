import express from 'express';
import userRoutes from './src/routes/userRoutes.ts';

const app = express();
const port = 3000;

import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId: number;
  }
}

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

