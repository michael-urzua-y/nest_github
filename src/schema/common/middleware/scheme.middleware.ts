import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SchemaMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const schemaName = req.headers['schema_name'] || req.headers['schema-name'];

    if (!schemaName) {
      return res.status(400).json({ message: 'Missing schema_name in headers' });
    }

    (req as any).schemaName = schemaName;
    next();
  }
}
