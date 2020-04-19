import { SpecieModel } from '../models/specie';
import { Specie } from '../types/Specie';

export const speciesSeeder = async () => {
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
    console.log('error during seeding species');
    console.error(err);
  }
};
