import { Request } from 'express';

export interface HttpRequest<T> extends Request {
  body: T;
}
