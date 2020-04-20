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

  public async remove(id: string): Promise<boolean> {
    try {
      const result = await DummyDbModel.findByIdAndDelete(id);
      if (result) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  public async update(id: string, newEntity: Dummy): Promise<boolean> {
    try {
      const result = await DummyDbModel.findByIdAndUpdate(id, newEntity);
      if (result) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}
