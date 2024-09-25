import { Router } from 'express';
import crypto from 'node:crypto';

export const hashVerifyRoute = Router();

hashVerifyRoute.get('/', (req, res) => {
  const queryParams = req.query;

  const newInputString = queryParams['input-string-new'];
  const oldHash = queryParams['old-hash'];

  const newHash = crypto.createHash('sha256');
  newHash.update(newInputString);
  const newHashOutput = newHash.digest('hex');
  const isCorrectHash = newHashOutput === oldHash;

  res.send(isCorrectHash)
})
