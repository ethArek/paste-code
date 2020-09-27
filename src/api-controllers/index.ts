import express from 'express';
import { AppDependencies } from 'src/app-dependencies';
import { createLanguage } from './language';
import { getSnippetsList, getSnippetById } from './snippet';

export function getApiRouter(deps: AppDependencies) {
  const router = express.Router();
  router.get('/snippets', (req, res, next) => getSnippetsList(req, res, next, deps));
  router.get('/snippets/:id', (req, res, next) => getSnippetById(req, res, next, deps));
  
  router.post('/languages', (req, res, next) => createLanguage(req, res, next, deps));
  return router;
}
