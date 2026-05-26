
import * as service from '../services/clients.service.js';

export function list(req, res) {
  const data = service.getClients();
  res.json(data);
}

export function create(req, res) {
  const data = service.createClient(req.body);
  res.status(201).json(data);
}
