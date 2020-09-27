import express from 'express';
import { AppDependencies } from "src/app-dependencies";

export function getViewRouter(deps: AppDependencies) {
  const router = express.Router();
  router.get('/', (req, res) => res.render('index', {
    title: 'Homepage'
  })); 

  return router;
}