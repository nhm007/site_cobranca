
import { db } from '../db.js';

export function getClients() {
  return db.prepare('SELECT * FROM clients').all();
}

export function createClient(data) {
  const stmt = db.prepare('INSERT INTO clients (nome) VALUES (?)');
  const result = stmt.run(data.nome);
  return { id: result.lastInsertRowid, nome: data.nome };
}
