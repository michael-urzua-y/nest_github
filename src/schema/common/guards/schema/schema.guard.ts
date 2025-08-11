// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { Request } from 'express';
// import { Observable } from 'rxjs';
// import { SchemaService } from 'src/schema/schema.service';

// @Injectable()
// export class SchemaGuard implements CanActivate {
//   constructor(private readonly schemaService: SchemaService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest<Request>();
//     const schemaName = request.headers['schema_name'] || request.headers['schema-name'];

//     if (!schemaName || typeof schemaName !== 'string') {
//       throw new UnauthorizedException('Missing schema_name in headers');
//     }

//     const exists = await this.schemaService.schemaExists(schemaName);

//     if (!exists) {
//       throw new UnauthorizedException(`Schema "${schemaName}" does not exist`);
//     }

//     // Puedes guardar el schema para usarlo más adelante
//     (request as any).schemaName = schemaName;

//     return true;
//   }
// }
