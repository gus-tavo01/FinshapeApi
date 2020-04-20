import { DummyChildDto } from './DummyChildDto';

export class DummyDto {
  name?: string;
  date: string = new Date().toJSON();
  child?: DummyChildDto;
  children: DummyChildDto[] = [];
  relatedDummy?: string;
}
