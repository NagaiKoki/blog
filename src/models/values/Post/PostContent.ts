import * as zod from 'zod';
import { ValueObject, ResultConstructorType } from '../../shared';

export type PostContentProps = {
  value: string;
};

export class PostContent extends ValueObject<PostContentProps> {
  public get value(): string {
    return this.props.value;
  }

  public static factory(props: PostContentProps) {
    return new PostContent(props);
  }
}
