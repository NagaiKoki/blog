import { ZodIssueCode } from 'zod';

export type ResultConstructorType<T> = {
  status: ResultStatusType;
  data?: T;
  contents?: ResultContentType[];
};

export class Result<T> {
  private readonly _status: ResultStatusType;
  private readonly _data?: T;
  private readonly _contents?: ResultContentType[];

  constructor({ status, data, contents }: ResultConstructorType<T>) {
    this._status = status;
    this._data = data;
    this._contents = contents;

    Object.freeze(this);
  }

  public get status() {
    return this._status;
  }

  public get data() {
    return this._data;
  }

  public get contents() {
    return this._contents;
  }

  public static create<T>(params: ResultConstructorType<T>) {
    return new Result(params);
  }
}

export type ResultStatusType = 'SUCCESS' | 'FAILURE';
export type ResultCodeType = ZodIssueCode;
export type ResultContentType = {
  title: string;
  detail?: string;
  code?: ResultContentType;
};
