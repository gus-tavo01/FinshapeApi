import { Document, Schema, model } from 'mongoose';
import { Subject } from '../types/Subject';
import { Collections } from './enums/collections';

// nested schemas
import { PointSchema } from './point';
import { PositionSchema } from './position';
import { Models } from './enums/Models';

interface ISubject extends Document, Subject {}

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
    required: false,
  },
});

export const SubjectModel = model<ISubject>(
  Models.subject,
  SubjectSchema,
  Collections.subjects
);
