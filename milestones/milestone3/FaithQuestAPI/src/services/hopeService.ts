import { pool } from "../db/mysql";
import { HopeEntry } from "../models/HopeEntry";

export async function createHope(entry: HopeEntry) {
  const sql =
    "INSERT INTO hope_entries (title, scripture, message, dateCreated, isFavorite) VALUES (?, ?, ?, ?, ?)";
  const [result]: any = await pool.execute(sql, [
    entry.title,
    entry.scripture,
    entry.message,
    entry.dateCreated,
    entry.isFavorite
  ]);
  return { id: result.insertId, ...entry };
}

export async function getAllHope() {
  const [rows] = await pool.query("SELECT * FROM hope_entries");
  return rows;
}

export async function getHopeById(id: number) {
  const [rows]: any = await pool.query("SELECT * FROM hope_entries WHERE id = ?", [id]);
  return rows[0];
}

export async function updateHope(id: number, entry: HopeEntry) {
  const sql =
    "UPDATE hope_entries SET title=?, scripture=?, message=?, dateCreated=?, isFavorite=? WHERE id=?";
  const [result]: any = await pool.execute(sql, [
    entry.title,
    entry.scripture,
    entry.message,
    entry.dateCreated,
    entry.isFavorite,
    id
  ]);
  return result.affectedRows;
}

export async function deleteHope(id: number) {
  const [result]: any = await pool.execute("DELETE FROM hope_entries WHERE id = ?", [id]);
  return result.affectedRows;
}
