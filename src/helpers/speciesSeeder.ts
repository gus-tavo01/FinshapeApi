import { SpecieModel } from '../models/mongo/specieModel';
import { Specie } from '../models/Specie';

export const speciesSeeder = async (): Promise<string[]> => {
  const species: Specie[] = [
    { name: 'Eubalaena glacialis (Müller, 1776). North Atlantic right whale' },
    { name: 'japonica (Lacépède, 1818). North Pacific right whale' },
    { name: 'Eubalaena australis (Desmoulins, 1822). Southern right whale' },
    { name: 'Caperea marginata (Gray, 1846). Pygmy right whale' },
    { name: 'Balaenoptera acutorostrata Lacépède, 1804. Common minke whale' },
  ];

  const insertValues: Specie[] = [];

  console.log('Seeding species...');

  try {
    for (const specie of species) {
      const specieExist = await SpecieModel.findOne({ name: specie.name });
      if (!specieExist) {
        insertValues.push(specie);
      }
    }
    await SpecieModel.insertMany(insertValues);
  } catch (err) {
    throw new Error('error during seeding species');
  }

  // just return the first 10 species
  const firstTenSpecies = await SpecieModel.find().limit(10);
  return firstTenSpecies.map((specie) => specie.id);
};
