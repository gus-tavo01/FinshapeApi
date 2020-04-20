import { model, Document } from 'mongoose';
import { DummyChildSchema } from '../schemas/dummyChildSchema';
import { MongoCollections } from '../enums/mongoCollections';
import { MongoModels } from '../enums/mongoModels';
import { DummyChild } from '../../DummyChild';

export interface DummyChildDocument extends Document, DummyChild {}

export const DummyChildDbModel = model<DummyChildDocument>(
  MongoModels.dummyChild,
  DummyChildSchema,
  MongoCollections.dummyChilds
);
