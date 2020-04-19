import { Document, Schema, model } from 'mongoose';
import { Specie } from '../types/Specie';
import { Collections } from './enums/collections';
import { Models } from './enums/Models';

interface SpecieModel extends Document, Specie {}

const SpecieSchema = new Schema({
  name: { type: String, required: true },
});

export const SpecieModel = model<SpecieModel>(
  Models.specie,
  SpecieSchema,
  Collections.species
);
