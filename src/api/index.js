// @flow

import { Router } from 'express';

import helloWorld from '~/hello-world';

const router: Router = Router();

router.get('/', (req: $Request, res: $Response): void => {
  res.status(200).send('API Root');
});

router.use('/hello-world', helloWorld);

export default router;
