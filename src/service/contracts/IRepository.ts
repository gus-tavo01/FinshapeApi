export interface IRepository<T> {
  add(entity: T): Promise<T | null>;
  // addRange
  // find
  // findRange
  // remove
  // removeRange
  // update
}
