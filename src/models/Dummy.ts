import { DummyChild } from './DummyChild';

export interface Dummy {
  id?: string | any;
  name: string;
  date: string;
  child?: DummyChild;
  children: DummyChild[];
  relatedDummy?: string;
}
