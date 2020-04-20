import { Controller, Get, Post, Put, Delete } from '@tsed/common';

// models
import { Response } from 'express';
import { HttpResponse } from '../helpers/httpResponse';
import { HttpRequest } from '../helpers/httpRequest';
import { DummyDTO } from '../dtos/DummyDTO';
import { Dummy } from '../models/Dummy';

// dependencies
import { DummiesRepository } from '../service/DummiesRepository';
import { DummyValidator } from '../validators/dummyValidator';

@Controller('/dummies')
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

    const dummyFound = await this.dummiesRepo.find(() => {
      return { _id: id };
    });

    if (dummyFound === null) {
      response.notFound(`Dummy with id '${id}' was not found`);
      return res.status(response.status).json(response);
    }

    // response.result = mapper.map<DummyDTO>(dummyFound);
    response.result = dummyFound;
    response.ok();
    return res.status(response.status).json(response);
  }
  @Post('/')
  public async createDummy(req: HttpRequest<DummyDTO>, res: Response) {
    const response = new HttpResponse<DummyDTO>();
    const dummyDto: DummyDTO = req.body;

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

    // TODO
    // if validations passed, store the entity on DB
    // const dummyDocument = mapper.map<Dummy>(dummyDto);

    // Temporal
    // fast and furious mapping
    const dummyDocument: Dummy = {
      name: dummyDto.name,
      date: dummyDto.date,
      children: dummyDto.children,
    };
    const resultDummy = await this.dummiesRepo.add(dummyDocument);

    if (resultDummy === null) {
      response.unprocessableEntity();
      return res.status(response.status).json(response);
    }

    // TODO:
    // map dummy document model into a dto model
    // const mappedDummy = mapper.map<DummyDTO>(resultDummy);

    // Construct a successful response
    response.errors = validationResult.getFailureMessages();
    //response.result = mappedDummy;
    response.result = resultDummy; // Temporal
    response.ok();
    return res.status(response.status).json(response);
  }

  @Put('/:id')
  public async updateDummy(req: HttpRequest<void>, res: Response) {}

  @Delete('/:id')
  public async deleteDummy(req: HttpRequest<void>, res: Response) {}
}
