import { DummyChild } from './DummyChild';

export interface Dummy {
  name: string;
  date: string;
  child?: DummyChild;
  children: DummyChild[];
  relatedDummy?: string;
}
