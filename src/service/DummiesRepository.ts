import { Service, Scope, ProviderScope } from '@tsed/common';
import { Dummy } from '../models/Dummy';
import { DummyDbModel } from '../models/mongo/models/dummyDbModel';

interface GenericRepo<T> {
  create(entity: T): Promise<T | null>;
}

@Service()
@Scope(ProviderScope.INSTANCE)
export class DummiesRepository implements GenericRepo<Dummy> {
  public async find(conditions: () => boolean): Promise<Dummy | null> {
    throw new Error('Not implemented yet');
  }

  public async create(entity: Dummy): Promise<Dummy | null> {
    try {
      const model = new DummyDbModel(entity);
      const result = await model.save();
      return result;
    } catch (err) {
      return null;
    }
  }
}
