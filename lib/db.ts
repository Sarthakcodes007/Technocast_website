import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'enquiries.db');

// Initialize database
let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    
    // Create enquiries table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        phone TEXT,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  
  return db;
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  created_at: string;
}

export function insertEnquiry(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): number {
  const db = getDatabase();
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, company, phone, message)
    VALUES (?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(
    data.name,
    data.email,
    data.company || null,
    data.phone || null,
    data.message
  );
  
  return result.lastInsertRowid as number;
}

export function getAllEnquiries(): Enquiry[] {
  const db = getDatabase();
  const stmt = db.prepare('SELECT * FROM enquiries ORDER BY created_at DESC');
  return stmt.all() as Enquiry[];
}

