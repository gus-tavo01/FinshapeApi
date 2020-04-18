import { Document, Schema, model } from 'mongoose';
import { Specie } from '../types/Specie';

interface SpecieModel extends Document, Specie {}

const SpecieSchema = new Schema({
  name: { type: String, required: true },
});

export const SpecieModel = model<SpecieModel>(
  'Specie',
  SpecieSchema,
  'species'
);
