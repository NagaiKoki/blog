import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
  protected readonly uuid: string;
  protected readonly props: T;

  constructor(props: T, uuid?: string) {
    this.uuid = uuid || uuidv4();
    this.props = props;
  }

  public equals<T>(entity?: Entity<T>) {
    if (entity === null || entity === null) {
      return false;
    }
    return entity.uuid === this.uuid;
  }
}
