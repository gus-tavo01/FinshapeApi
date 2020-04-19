import { Document, Schema, model } from 'mongoose';
import { Specie } from '../types/Specie';
import { Collections } from './enums/collections';
import { Models } from './enums/Models';

interface SpecieDocument extends Document, Specie {}

const SpecieSchema = new Schema({
  name: { type: String, required: true },
});

export const SpecieModel = model<SpecieDocument>(
  Models.specie,
  SpecieSchema,
  Collections.species
);
