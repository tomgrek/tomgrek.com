import { Router } from 'express';

import tweets from './tweets';
import tags from './tags';
import mediumposts from './mediumposts';

const router = Router();

router.use(tweets);
router.use(tags);
router.use(mediumposts);

export default router;
