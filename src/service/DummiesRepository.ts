import { Service, Scope, ProviderScope } from '@tsed/common';
import { Dummy } from '../models/Dummy';
import { DummyDbModel } from '../models/mongo/models/dummyDbModel';
import { IRepository } from './contracts/IRepository';

import { MongooseFilterQuery } from 'mongoose';

@Service()
@Scope(ProviderScope.INSTANCE)
export class DummiesRepository implements IRepository<Dummy> {
  public async find(
    conditions: () => MongooseFilterQuery<Dummy>
  ): Promise<Dummy | null> {
    try {
      const dummy = await DummyDbModel.findOne(conditions());
      return dummy;
    } catch (err) {
      return null;
    }
  }

  public async add(entity: Dummy): Promise<Dummy | null> {
    try {
      const model = new DummyDbModel(entity);
      const result = await model.save();
      return result;
    } catch (err) {
      return null;
    }
  }
}
