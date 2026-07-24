import { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../models/userModel.js';

export const register = (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    createUser({ username, password });
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(400).json({ error: 'User could not be created' });
  }
};
