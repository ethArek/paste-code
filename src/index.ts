import express from 'express';
import { initAppDependencies } from './app-dependencies';
import { getSnippetsList, getSnippetById } from './controllers/snippet';
import errorHandlingMiddleware from './lib/error-handling-middleware';

const app = express();
const PORT = 3000;
const deps = initAppDependencies();

app.get('/snippets', (req, res, next) => getSnippetsList(req, res, next, deps));
app.get('/snippets/:id', (req, res, next) => getSnippetById(req, res, next, deps));

app.use(errorHandlingMiddleware);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));
