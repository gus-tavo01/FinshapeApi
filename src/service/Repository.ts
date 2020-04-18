// use mongoose types
import { Model, Document } from 'mongoose';

export class Repository<TModel> {
  public constructor(private context: Model<Document>) {}

  public async add(model: TModel): Promise<TModel | void> {
    const entity = new this.context(model);
    await entity.save();
  }

  // add range

  public async find(hash: string) {
    const result = this.context.findOne({ hashKey: hash });
    return result;
  }

  // findRange

  public async remove(hash: string) {}

  // removeRange

  public async update(hash: string, model: TModel) {}
}
