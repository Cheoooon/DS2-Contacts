import type { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../models/userModel.ts';

import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    createUser({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(400).json({ error: 'User could not be created' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    res.json({ message: 'Logged in' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
