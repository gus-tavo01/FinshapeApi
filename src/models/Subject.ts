import { Point } from './Point';
import { Position } from './Position';

export interface Subject {
  id: string;
  coordinates: Point[];
  controlPoints: Point[];
  location: string;
  fileName: string;
  rotation: number;
  zoom: number;
  position: Position;
  flip: number;
  area: number;
  tags: string;
  specieId: string;
}
