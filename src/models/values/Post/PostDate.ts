import { format } from 'date-fns';
import { ValueObject } from '../../shared';

export type PostDateProps = {
  value: string;
};

export class PostDate extends ValueObject<PostDateProps> {
  public get value(): string {
    return format(new Date(this.props.value), 'yyyy/MM/dd');
  }

  public static factory(props: PostDateProps) {
    return new PostDate(props);
  }
}
