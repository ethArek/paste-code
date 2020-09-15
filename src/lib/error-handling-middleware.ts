import express from 'express';

export default (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
}
