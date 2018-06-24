// @flow

import { Router } from 'express';

import helloWorld from '~/hello-world';

const router: Router = Router();

router.use('/hello-world', helloWorld);

export default router;
