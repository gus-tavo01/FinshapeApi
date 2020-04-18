import { Document, Schema, model } from 'mongoose';
import { Subject } from '../types/Subject';

interface SubjectModel extends Document, Subject {}

const SubjectSchema = new Schema({
  hashKey: { type: String, required: true },
  // coordinates: { type: Point[]}
  // controlPoints: Point[];
  // position: Position;
  location: { type: String, required: false },
  fileName: { type: String, required: true },
  rotation: { type: Number, required: false },
  zoom: { type: Number, required: false },
  flip: { type: Number, required: false },
  area: { type: Number, required: false },
  tags: { type: String, required: false },
  // specieId: string;
});

export const SubjectModel = model<SubjectModel>('Subjects', SubjectSchema);
