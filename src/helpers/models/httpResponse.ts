export class HttpResponse<T> {
  public message: string = '';
  public status: number = 500;
  public result: T | null = null;
  public errors: Error[] = [];
  public updatedBy?: string;
  public updatedAt?: string;
  public createdBy?: string;
  public createdAt?: string;

  public ok(message: string): void {
    this.setStatus(200, message);
  }

  public created(message: string): void {
    this.setStatus(201, message);
  }

  //public noContent()

  public badRequest(message: string): void {
    this.setStatus(400, message);
  }

  public notFound(message: string): void {
    this.setStatus(404, message);
  }

  public unprocessableEntity(message: string): void {
    this.setStatus(422, message);
  }

  public conflict(message: string): void {
    this.setStatus(409, message);
  }

  private setStatus(code: number, message: string) {
    this.status = code;
    this.message = message;
  }
}
