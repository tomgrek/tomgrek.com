import { Router } from 'express';

import tweets from './tweets';
import tags from './tags';

const router = Router();

router.use(tweets);
router.use(tags);

export default router;
