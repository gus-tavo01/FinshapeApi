// import { SpecieModel } from '../models/mongo/specieModel';
import { DummyChild } from '../models/DummyChild';

export const dummyChildSeeder = async (): Promise<string[]> => {
  const children: DummyChild[] = [];

  const insertValues: DummyChild[] = [];

  console.log('Seeding dummy children...');

  throw new Error('Not implemented yet...');

  // try {
  // for (const specie of species) {
  //   const specieExist = await SpecieModel.findOne({ name: specie.name });
  //   if (!specieExist) {
  //     insertValues.push(specie);
  //   }
  // }
  // await SpecieModel.insertMany(insertValues);
  // } catch (err) {
  //   throw new Error('error during seeding species');
  // }

  // just return the first 10 species
  // const firstTenSpecies = await SpecieModel.find().limit(10);
  // return firstTenSpecies.map((specie) => specie.id);
};
