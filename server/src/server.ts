import { PORT } from './common/config';
import { log } from './utils/logger';
import app from './app';
import { dbConnect } from './database/db';

dbConnect(() => {
  app.listen(PORT, () =>
    log(`App is running on http://localhost:${PORT}`)
  );
});
