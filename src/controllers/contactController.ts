import type { Request, Response } from 'express';
import { z } from 'zod';
import { createContact, getContactsByUserId, getContactById, updateContact, deleteContact } from '../models/contactModel.ts';
import { findUserById } from '../models/userModel.ts';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
});

export const listContacts = (req: Request, res: Response) => {
  const user = findUserById(req.session.userId);
  const contacts = getContactsByUserId(req.session.userId);
  res.render('contacts/list', { contacts, user });
};

export const showCreate = (req: Request, res: Response) => {
  const user = findUserById(req.session.userId);
  res.render('contacts/form', { action: '/contacts/add', title: 'Add Contact', user });
};

export const create = async (req: Request, res: Response) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    const user = findUserById(req.session.userId);
    return res.render('contacts/form', { error: result.error.issues[0].message, action: '/contacts/add', title: 'Add Contact', contact: req.body, user });
  }
  createContact({ ...result.data, userId: req.session.userId });
  res.redirect('/contacts');
};

export const showEdit = (req: Request, res: Response) => {
  const user = findUserById(req.session.userId);
  const contact = getContactById(Number(req.params.id));
  if (!contact || contact.userId !== req.session.userId) return res.redirect('/contacts');
  res.render('contacts/form', { action: `/contacts/edit/${contact.id}`, title: 'Edit Contact', contact, user });
};

export const update = async (req: Request, res: Response) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    const user = findUserById(req.session.userId);
    return res.render('contacts/form', { error: result.error.issues[0].message, action: `/contacts/edit/${req.params.id}`, title: 'Edit Contact', contact: { ...req.body, id: req.params.id }, user });
  }
  updateContact({ ...result.data, id: Number(req.params.id), userId: req.session.userId });
  res.redirect('/contacts');
};

export const remove = (req: Request, res: Response) => {
  deleteContact(Number(req.params.id), req.session.userId);
  res.redirect('/contacts');
};
