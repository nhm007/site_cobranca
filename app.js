
import { Router } from 'express';
import * as controller from '../controllers/clients.controller.js';

export const clientsRoutes = Router();

clientsRoutes.get('/', controller.list);
clientsRoutes.post('/', controller.create);
