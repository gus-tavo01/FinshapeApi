export class HttpResponse<T> {
  public message: string = '';
  public status: number = 500;
  public result: T | null = null;
  public errors: string[] = [];
  public updatedBy?: string;
  public updatedAt?: string;
  public createdBy?: string;
  public createdAt?: string;

  public ok(optionalMessage?: string): void {
    const message = optionalMessage ? optionalMessage : 'Success';
    this.status = 200;
    this.message = message;
  }

  public created(optionalMessage?: string): void {
    const message = optionalMessage ? optionalMessage : 'Created';
    this.message = message;
    this.status = 201;
  }

  //public noContent()

  public badRequest(optionalMessage?: string): void {
    const message = optionalMessage ? optionalMessage : 'Bad request';
    this.message = message;
    this.status = 400;
  }

  public notFound(optionalMessage?: string): void {
    const message = optionalMessage ? optionalMessage : 'Resource not found';
    this.message = message;
    this.status = 404;
  }

  public unprocessableEntity(optionalMessage?: string): void {
    const message = optionalMessage
      ? optionalMessage
      : 'Cannot process your entity';
    this.message = message;
    this.status = 422;
  }

  public conflict(optionalMessage?: string): void {
    const message = optionalMessage ? optionalMessage : 'Conflict';
    this.message = message;
    this.status = 409;
  }
}
