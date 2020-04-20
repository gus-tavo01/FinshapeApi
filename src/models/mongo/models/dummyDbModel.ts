import { model, Document } from 'mongoose';
import { DummySchema } from '../schemas/dummySchema';
import { MongoCollections } from '../enums/mongoCollections';
import { MongoModels } from '../enums/mongoModels';

interface DummyDocument extends Document {}

export const DummyDbModel = model<DummyDocument>(
  MongoModels.dummy,
  DummySchema,
  MongoCollections.dummies
);
