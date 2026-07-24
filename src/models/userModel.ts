import db from '../db/db.ts';

export interface User {
  id?: number;
  username: string;
  password: string;
}

export const createUser = (user: User) => {
  const insert = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  return insert.run(user.username, user.password);
};

export const findUserByUsername = (username: string): User | undefined => {
  const query = db.prepare('SELECT * FROM users WHERE username = ?');
  return query.get(username) as User | undefined;
};
