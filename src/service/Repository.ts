import { Model, Document, MongooseFilterQuery } from 'mongoose';

export abstract class Repository<T extends Document> {
  public constructor(private model: Model<T>) {}

  public async add(entity: T): Promise<T | null> {
    const model = new this.model(entity);

    try {
      const result = await model.save();
      return result;
    } catch (err) {
      return null;
    }
  }

  public async addRange(entities: T[]): Promise<T[] | null> {
    try {
      const result = await this.model.insertMany(entities);
      if (result) {
        return result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  public async find(
    conditions: () => MongooseFilterQuery<T>
  ): Promise<T | null> {
    try {
      const result = await this.model.findOne(conditions());
      return result;
    } catch (err) {
      return null;
    }
  }

  public async findRange(
    conditions: () => MongooseFilterQuery<T>
  ): Promise<T[] | null> {
    try {
      const result = await this.model.find(conditions());
      return result;
    } catch (err) {
      return null;
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      const result = await this.model.findByIdAndDelete(id);

      if (!result) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  public async removeRange(
    conditions: () => MongooseFilterQuery<T>
  ): Promise<number> {
    try {
      const result = await this.model.deleteMany(conditions());
      if (result) {
        return result.deletedCount || 0;
      }
      return 0;
    } catch (err) {
      return 0;
    }
  }

  public async update(id: string, newEntity: T): Promise<boolean> {
    try {
      const result = await this.model.findByIdAndUpdate(id, newEntity);
      if (result) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}
