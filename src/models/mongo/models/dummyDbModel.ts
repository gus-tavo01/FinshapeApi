import { model, Document } from 'mongoose';
import { DummySchema } from '../schemas/dummySchema';
import { MongoCollections } from '../enums/mongoCollections';
import { MongoModels } from '../enums/mongoModels';
import { Dummy } from '../../Dummy';

interface DummyDocument extends Document, Dummy {}

export const DummyDbModel = model<DummyDocument>(
  MongoModels.dummy,
  DummySchema,
  MongoCollections.dummies
);
