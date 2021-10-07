import { Entity } from '../shared';

import { PostTitle, PostContent, PostDate } from '../values/Post';

type EntityProps = {
  id?: number;
  title: PostTitle;
  content: PostContent;
  createdAt: PostDate;
  updatedAt: PostDate;
};

type FactoryProps = {
  id?: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export class Post extends Entity<EntityProps> {
  public getTitle() {
    return this.props.title;
  }

  public getContent() {
    return this.props.content;
  }

  public getCreatedAt() {
    return this.props.createdAt;
  }

  public getUpdatedAt() {
    return this.props.updatedAt;
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
      value: props.title
    });

    const content = PostContent.factory({
      value: props.content
    });

    const createdAt = PostDate.factory({
      value: props.createdAt
    });

    const updatedAt = PostDate.factory({
      value: props.updatedAt
    });

    return new Post({ title, content, createdAt, updatedAt });
  }
}
