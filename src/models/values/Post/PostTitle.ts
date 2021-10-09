import * as zod from 'zod';
import { ValueObject, ResultConstructorType, Result } from '../../shared';

export type PostTitleProps = {
  value: string;
};

export class PostTitle extends ValueObject<PostTitleProps> {
  public get value(): string {
    return this.props.value;
  }

  public validation() {
    const { value } = this.props;
    const result = valueSchema.safeParse(value);

    if (result.success === false) {
      const contents = result.error.issues.map((issue) => {
        return {
          code: issue.code,
          title: issue.message
        };
      });

      const params: ResultConstructorType<PostTitleProps> = {
        status: 'FAILURE',
        contents
      };

      return this.getResult<PostTitle>(params);
    }
  }

  public static factory(props: PostTitleProps) {
    return new PostTitle(props);
  }
}

const valueSchema = zod
  .string()
  .max(100, { message: '文字数は100字以内でお願いします！' });
