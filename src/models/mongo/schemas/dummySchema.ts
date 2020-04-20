import { Schema } from 'mongoose';
import { DummyChildSchema } from './dummyChildSchema';
import { MongoModels } from '../enums/mongoModels';

export const DummySchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  child: DummyChildSchema,
  children: [DummyChildSchema],
  relatedDumy: {
    type: Schema.Types.ObjectId,
    ref: MongoModels.dummy,
    required: false,
  },
});
