import db from '../db/db.ts';

export interface Contact {
  id?: number;
  userId: number;
  name: string;
  email: string;
  phone?: string;
}

export const createContact = (contact: Contact) => {
  const insert = db.prepare('INSERT INTO contacts (userId, name, email, phone) VALUES (?, ?, ?, ?)');
  return insert.run(contact.userId, contact.name, contact.email, contact.phone || null);
};

export const getContactsByUserId = (userId: number): Contact[] => {
  const query = db.prepare('SELECT * FROM contacts WHERE userId = ?');
  return query.all(userId) as Contact[];
};

export const getContactById = (id: number): Contact | undefined => {
  const query = db.prepare('SELECT * FROM contacts WHERE id = ?');
  return query.get(id) as Contact | undefined;
};

export const updateContact = (contact: Contact) => {
  const update = db.prepare('UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ? AND userId = ?');
  return update.run(contact.name, contact.email, contact.phone || null, contact.id, contact.userId);
};

export const deleteContact = (id: number, userId: number) => {
  const remove = db.prepare('DELETE FROM contacts WHERE id = ? AND userId = ?');
  return remove.run(id, userId);
};
