import { model, Document } from 'mongoose';
import { DummyChildSchema } from '../schemas/dummyChildSchema';
import { MongoCollections } from '../enums/mongoCollections';
import { MongoModels } from '../enums/mongoModels';

interface DummyChildDocument extends Document {}

export const DummyChildDbModel = model<DummyChildDocument>(
  MongoModels.dummyChild,
  DummyChildSchema,
  MongoCollections.dummyChilds
);
