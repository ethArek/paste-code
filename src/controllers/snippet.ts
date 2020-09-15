import { AppDependencies } from "src/app-dependencies";
import express from 'express';

export async function getSnippetsList(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      list: await deps.snippetService.getList()
    });
  } catch (err) {
    next(err);
  }
}

export async function getSnippetById(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      data: await deps.snippetService.get(req.params.id)
    });
  } catch (err) {
    next(err);
  }
}

export async function createSnippet(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
    data: await deps.snippetService.create(req.body)
    });
  } catch (err) {
      next(err);
  }
}
