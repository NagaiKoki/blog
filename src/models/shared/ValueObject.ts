import { Result, ResultConstructorType } from './Result';

export abstract class ValueObject<T> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  protected getResult<I>(
    props: Pick<ResultConstructorType<I>, 'status' | 'contents'>
  ) {
    return Result.create<I>(props);
  }
}
