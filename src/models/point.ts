import { Schema } from 'mongoose';
import { PositionSchema } from './position';

export const PointSchema = new Schema({
  position: PositionSchema,
  name: { type: String },
});
