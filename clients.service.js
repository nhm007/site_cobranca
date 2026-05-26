
import { db } from './db.js';

export function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT
    );
  `);
}
