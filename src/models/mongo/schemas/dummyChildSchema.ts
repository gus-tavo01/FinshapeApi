import { Schema } from 'mongoose';

export const DummyChildSchema = new Schema({
  name: { type: String, required: true },
  superPower: { type: String, required: true },
  favoriteColors: [String],
});
