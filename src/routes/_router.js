import { Router } from 'express';
import { hashRoute } from './hash.route.js';
import { hashVerifyRoute } from './hash-verify.route.js';

export const router = Router();

router.use('/hash', hashRoute);
router.use('/hash-verify', hashVerifyRoute);