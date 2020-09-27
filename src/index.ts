import express from 'express';
import exphbs from 'express-handlebars';
import { initAppDependencies } from './app-dependencies';
import { getApiRouter } from './api-controllers';
import errorHandlingMiddleware from './lib/error-handling-middleware';
import { getViewRouter } from './view-controllers';

const app = express();
const PORT = 3000;
const deps = initAppDependencies();

app
  .use(express.json())
  .engine('.hbs', exphbs({
    extname: ".hbs",
    
  }))
  .set('view engine', '.hbs')

app
  .use('/api', getApiRouter(deps))
  .use(errorHandlingMiddleware)
  .use('', getViewRouter(deps))
  .listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));
