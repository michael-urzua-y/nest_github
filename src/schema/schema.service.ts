import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class SchemaContextService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getSchemaName(): string {
    
    return (this.request as any).schemaName;
  }
}
