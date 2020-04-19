import { SubjectModel } from '../models/subject';
import { Subject } from '../types/Subject';

export const subjectsSeeder = async () => {
  const subjects: Subject[] = [
    {
      hashKey: 'uniqueHashKey',
      coordinates: [{ position: { x: 0, y: 10 }, name: 'a' }],
      controlPoints: [{ position: { x: 0, y: 10 }, name: 'ad-1' }],
      location: 'location',
      fileName: 'fileName',
      rotation: 10,
      zoom: 10,
      position: { x: 10, y: 10 },
      flip: 10,
      area: 10,
      tags: 'tag, tag2',
    },
    {
      hashKey: 'anotherHashKey',
      coordinates: [{ position: { x: 0, y: 10 }, name: 'a' }],
      controlPoints: [{ position: { x: 0, y: 10 }, name: 'ad-1' }],
      location: 'ensenada',
      fileName: 'photo.jpeg',
      rotation: 10,
      zoom: 10,
      position: { x: 10, y: 10 },
      flip: 10,
      area: 10,
      tags: 'tag, tag1, tag2',
    },
  ];

  const insertValues: Subject[] = [];

  console.log('Seeding subjects...');

  try {
    for (const subject of subjects) {
      const subjectExist = await SubjectModel.findOne({
        hashKey: subject.hashKey,
      });

      if (!subjectExist) {
        insertValues.push(subject);
      }
    }
    await SubjectModel.insertMany(insertValues);
  } catch (err) {
    console.log('Error during seeding subjects');
    console.error(err);
  }
};
