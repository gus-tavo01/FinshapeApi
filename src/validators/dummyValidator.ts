import { AbstractValidator } from 'fluent-ts-validator';
import { DummyDto } from '../dtos/DummyDTO';

export class DummyValidator extends AbstractValidator<DummyDto> {
  constructor() {
    super();

    // TODO:
    // add rules for validations
    this.validateIfString((dummy) => dummy.name);
  }
}
