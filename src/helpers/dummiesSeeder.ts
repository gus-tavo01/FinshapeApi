import { DummyDbModel } from '../models/mongo/models/dummyDbModel';
import { Dummy } from '../models/Dummy';

export const subjectsSeeder = async () => {
  // parameter => speciesCollection: string[]
  // function getAnySpecieId(): string {
  //   const index = Math.floor(Math.random() * speciesCollection.length);
  //   return speciesCollection[index];
  // }

  const dummies: Dummy[] = [
    {
      name: 'firstDummy',
      children: [],
      date: new Date().toJSON(),
    },
    {
      name: 'secondDummy',
      children: [],
      date: new Date().toJSON(),
    },
  ];

  const insertValues: Dummy[] = [];

  console.log('Seeding dummy data...');

  try {
    for (const dummy of dummies) {
      const dummyExist = await DummyDbModel.findOne({
        name: dummy.name,
      });

      if (!dummyExist) {
        // dummy.specieId = getAnySpecieId();
        insertValues.push(dummy);
      }
    }
    await DummyDbModel.insertMany(insertValues);
  } catch (err) {
    console.log('Error during seeding dummies');
    console.error(err);
  }
};
