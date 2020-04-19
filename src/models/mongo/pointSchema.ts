import { Schema } from 'mongoose';
import { PositionSchema } from './positionSchema';

export const PointSchema = new Schema({
  position: PositionSchema,
  name: { type: String },
});
