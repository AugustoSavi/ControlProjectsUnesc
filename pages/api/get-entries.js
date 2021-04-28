import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT * FROM entries
      ORDER BY id DESC
      LIMIT 10
  `);

    return res.json(results);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
