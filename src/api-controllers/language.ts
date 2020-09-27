import { AppDependencies } from "src/app-dependencies";
import express from 'express';

export async function getLanguagesList(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      list: await deps.languageService.getList()
    });
  } catch (err) {
    next(err);
  }
}

export async function getLanguageById(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      data: await deps.languageService.get(req.params.id)
    });
  } catch (err) {
    next(err);
  }
}

export async function createLanguage(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      data: await deps.languageService.create(req.body)
    });
  } catch (err) {
    next(err);
  }
}
