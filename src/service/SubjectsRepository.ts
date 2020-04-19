import { SubjectModel } from '../models/mongo/subjectModel';
import { Service, Scope, ProviderScope } from '@tsed/common';
import { Subject } from '../models/Subject';
import { Collections } from '../models/mongo/enums/collections';

@Service()
@Scope(ProviderScope.INSTANCE)
export class SubjectsRepository {
  public async add(entity: Subject): Promise<string | null> {
    try {
      const subject = new SubjectModel(entity);
      const result = await subject.save();
      return result.hashKey;
    } catch (err) {
      return null;
    }
  }

  public async getSingle(id: string): Promise<Subject | null> {
    try {
      const subject = await SubjectModel.findOne({ hashKey: id });

      if (subject === null) return null;

      return subject.populate(Collections.species);
    } catch (err) {
      return null;
    }
  }
}
