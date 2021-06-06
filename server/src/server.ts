import { PORT } from './common/config';
import { log } from './utils/logger';
import app from './app';

app.listen(PORT, () =>
  log(`App is running on http://localhost:${PORT}`)
);
