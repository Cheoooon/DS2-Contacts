import { z } from 'zod';
import type { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../models/userModel.ts';

import bcrypt from 'bcrypt';

const userSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const register = async (req: Request, res: Response) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.render('register', { error: result.error.issues[0].message });
  }
  const { username, password } = result.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    createUser({ username, password: hashedPassword });
    res.redirect('/users/login?success=true');
  } catch (error) {
    res.render('register', { error: 'Username already taken' });
  }
};

export const login = async (req: Request, res: Response) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.render('login', { error: result.error.issues[0].message });
  }
  const { username, password } = result.data;
  const user = findUserByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id!;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
};
