import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(process.cwd(), 'public', 'player_stats.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsedData = Papa.parse(fileContent, { header: true });

  res.status(200).json(parsedData.data);
};
