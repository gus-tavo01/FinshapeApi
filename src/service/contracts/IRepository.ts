import { MongooseFilterQuery } from 'mongoose';

export interface IRepository<T> {
  add(entity: T): Promise<T | null>;
  // addRange
  find(conditions: () => MongooseFilterQuery<T>): Promise<T | null>;
  // findRange
  remove(id: string): Promise<boolean>;
  // removeRange
  update(id: string, newEntity: T): Promise<boolean>;
}
