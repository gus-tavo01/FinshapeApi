import { Controller, Get, Post, Put, Delete } from '@tsed/common';

// models
import { Response } from 'express';
import { HttpResponse } from '../helpers/models/httpResponse';
import { HttpRequest } from '../helpers/models/httpRequest';
import { DummyDto } from '../dtos/DummyDTO';
import { Dummy } from '../models/Dummy';

// dependencies
import { DummiesRepository } from '../service/DummiesRepository';
import { DummyValidator } from '../validators/dummyValidator';

@Controller('/subjects')
export class DummiesController {
  public constructor(private dummiesRepo: DummiesRepository) {}

  @Get('/')
  public async getManyDummies(req: HttpRequest<void>, res: Response) {
    //const filters = req.query;
  }

  @Get('/:id')
  public async getOneDummy(req: HttpRequest<void>, res: Response) {
    const { id } = req.params;
    const response = new HttpResponse();

    // validations
    if (!id) {
      response.badRequest('An id must be provided');
      return res.status(response.status).json(response);
    }

    // const dummyFound = await this.dummiesRepo.find(
    //   (dummy: Dummy) => dummy.id === id
    // );

    // if (dummyFound === null) {
    //   response.notFound(`Dummy with id ${id} was not found`);
    // }

    // response.result = mapper.map<DummyDto>(dummyFound);
    response.ok();
    return res.status(response.status).json(response);
  }
  @Post('/dummy')
  public async createDummy(req: HttpRequest<DummyDto>, res: Response) {
    const response = new HttpResponse<DummyDto>();
    const dummyDto: DummyDto = req.body;

    if (!req.body) {
      response.badRequest('Please provide a json body on your request');
      return res.status(response.status).json(response);
    }

    // validations
    const dummyValidator = new DummyValidator();
    const validationResult = dummyValidator.validate(dummyDto);
    const isValid = validationResult.isValid();
    const errorMessages = validationResult.getFailureMessages();

    if (!isValid) {
      response.errors = errorMessages;
      response.badRequest();
      return res.status(response.status).json(response);
    }

    // if validations passed, store the entity on DB
    // const dummyDocument = mapper.map<Dummy>(dummyDto);
    // const resultDummy = await this.dummiesRepo.create(dummyDocument);

    // if (resultDummy === null) {
    //   response.unprocessableEntity();
    //   return res.status(response.status).json(response);
    // }

    // map dummy document model into a dto model
    // const mappedDummy = mapper.map<DummyDTO>(resultDummy);

    // At this point all went fine, so lets construct a successful response
    response.errors = validationResult.getFailureMessages();
    //response.result = mappedDummy;
    response.ok();
    return res.status(response.status).json(response);
  }

  @Put('/:id')
  public async updateDummy(req: HttpRequest<void>, res: Response) {
    // return subject after update
  }

  @Delete('/:id')
  public async deleteDummy(req: HttpRequest<void>, res: Response) {}
}
