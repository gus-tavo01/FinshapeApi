import { Repository } from './Repository';
import { SubjectModel } from '../models/subject';
import { Subject } from '../types/Subject';
import { Service, Scope, ProviderScope } from '@tsed/common';

@Service()
@Scope(ProviderScope.INSTANCE)
export class SubjectsRepository extends Repository<Subject> {
  constructor() {
    super(SubjectModel);
  }
}
