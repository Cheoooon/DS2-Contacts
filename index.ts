import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express from 'express';
import { isAuthenticated } from './src/middlewares/authMiddleware.ts';
import hbs from 'hbs';
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

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use('/users', userRoutes);
app.get('/', isAuthenticated, (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
console.log('Logging test');
  console.log(`Server running on port ${port}`);
});

