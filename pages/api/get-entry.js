import { query } from '../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: '`id` required' });
    }
    if (typeof parseInt(id.toString(), 10) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' });
    }
    const results = await query(
      `
      SELECT id, title, content
      FROM entries
      WHERE id = ?
    `,
      id,
    );

    return res.json(results[0]);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
