import { Entity } from '../shared';

import {
  PostTitle,
  PostContent,
  PostTitleProps,
  PostContentProps
} from '../values/Post';

type EntityProps = {
  id?: number;
  title: PostTitle;
  content: PostContent;
};

type FactoryProps = {
  title: PostTitleProps;
  content: PostContentProps;
};

export class Post extends Entity<EntityProps> {
  public getTitle() {
    return this.props.title;
  }

  public getContent() {
    return this.props.content;
  }

  public changeTitle(newTitle: string) {
    const title = PostTitle.factory({
      value: newTitle
    });

    this.props = { ...this.props, title };
  }

  public changeContent(newContent: string) {
    const content = PostContent.factory({
      value: newContent
    });

    this.props = { ...this.props, content };
  }

  public static factory(props: FactoryProps) {
    const title = PostTitle.factory({
      value: props.title.value
    });

    const content = PostContent.factory({
      value: props.content.value
    });

    return new Post({ title, content });
  }
}
