export class RateLimitError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
    this.statusCode = 429;
  }
}
