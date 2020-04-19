import { Document, Schema, model } from 'mongoose';
import { Subject } from '../Subject';
import { Collections } from './enums/collections';
import { Models } from './enums/models';

// nested schemas
import { PointSchema } from './pointSchema';
import { PositionSchema } from './positionSchema';

interface SubjectDocument extends Document, Subject {}

const SubjectSchema = new Schema({
  hashKey: { type: String, required: true, unique: true },
  coordinates: [PointSchema],
  controlPoints: [PointSchema],
  position: PositionSchema,
  location: { type: String, required: false },
  fileName: { type: String, required: true },
  rotation: { type: Number, required: false },
  zoom: { type: Number, required: false },
  flip: { type: Number, required: false },
  area: { type: Number, required: false },
  tags: { type: String, required: false },
  specieId: {
    type: Schema.Types.ObjectId,
    ref: Models.specie,
    required: true,
  },
});

export const SubjectModel = model<SubjectDocument>(
  Models.subject,
  SubjectSchema,
  Collections.subjects
);
