import { AbstractValidator } from 'fluent-ts-validator';
import { DummyDTO } from '../dtos/DummyDTO';

export class DummyValidator extends AbstractValidator<DummyDTO> {
  constructor() {
    super();

    // TODO:
    // add rules for validations
    this.validateIfString((dummy) => dummy.name);
  }
}
