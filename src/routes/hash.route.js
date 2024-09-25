import { Router } from 'express';
import crypto from 'node:crypto';

export const hashRoute = Router();

hashRoute.get('/', (req, res) => {
  const queryParams = req.query;

  //Create a hash object
  const hash = crypto.createHash('sha256'); // 'sha256' is a commonly used algorithm
  // Update the hash with the input string
  hash.update(queryParams['input-string']);
  // Generate the hash in hexadecimal format
  const hashOutput = hash.digest('hex');

  res.send(hashOutput)
})
