import { DummyChildDTO } from './DummyChildDTO';

export class DummyDTO {
  name: string = '';
  date: string = new Date().toJSON();
  child?: DummyChildDTO;
  children: DummyChildDTO[] = [];
  relatedDummy?: string;
}
